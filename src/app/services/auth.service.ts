import { Injectable } from "@angular/core";
import firebase from "firebase";
import { Platform } from "@ionic/angular";
import {
  AlertController,
  ModalController,
  LoadingController,
  ToastController,
  NavController,
} from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  confirmationResult: firebase.auth.ConfirmationResult;
  public fireAuth: firebase.auth.Auth;
  public userProfileRef: firebase.database.Reference;
  private currentUser: firebase.User;

  constructor(public platform: Platform, private toastCtrl: ToastController) {
    this.fireAuth = firebase.auth();
    this.userProfileRef = firebase.database().ref("/driverProfile");
    this.fireAuth.onAuthStateChanged(
      (user: firebase.User) => (this.currentUser = user)
    );
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUserWithPhone(verification: any, code: any, phone: any): Promise<any> {
    const signInCredential = firebase.auth.PhoneAuthProvider.credential(
      verification,
      code
    );
    const prevUser = this.currentUser;

    return this.fireAuth
      .signInWithCredential(signInCredential)
      .then((newUser) => {
        const currentUser = newUser;
        // Merge prevUser and currentUser data stored in Firebase.
        // Note: How you handle this is specific to your application

        // After data is migrated delete the duplicate user
        return newUser.user
          .delete()
          .then(() => {
            // Link the OAuth Credential to original account
            return prevUser.linkWithCredential(signInCredential);
          })
          .then(() => {
            // Sign in with the newly linked credential
            return this.fireAuth
              .signInWithCredential(signInCredential)
              .then(() => {
                this.userProfileRef
                  .child(newUser.user.uid)
                  .child("userInfo")
                  .set({
                    phoneNumber: phone,
                  });
              });
          });
      })
      .catch((error) => {
        console.log("Sign In Error", error);
      });
  }

  public signInWithPhoneNumber(recaptchaVerifier, phoneNumber) {
    console.log("PHONE::", phoneNumber);
    console.log("recaptchaVerifier::", recaptchaVerifier);
    return new Promise<any>((resolve, reject) => {
      return firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
        .then((confirmationResult) => {
          console.log("confirmationResult", confirmationResult);
          this.confirmationResult = confirmationResult;
          resolve(confirmationResult);
        })
        .catch((error) => {
          console.log(error);
          reject("SMS not sent");
        });
    });
  }
  public async enterVerificationCode(code) {
    return new Promise<any>((resolve, reject) => {
      this.confirmationResult
        .confirm(code)
        .then(async (result) => {
          console.log("RESULTS", result);
          const user = result.user;
          resolve(user);
        })
        .catch((error) => {
          console.log("ERROR IN VERIFICATION", error);
          reject(error.message);
          this.presentToast(error.message);
        });
    });
  }

  signupUser(email: string, password: string): Promise<any> {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userProfileRef.child(newUser.user.uid).child("userInfo").set({
          email,
        });
      });
  }

  resetPassword(email: string): Promise<void> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    this.userProfileRef
      .child(this.fireAuth.currentUser.uid)
      .child("userInfo")
      .off();
    return this.fireAuth.signOut();
  }

  signOut(): void {
    this.fireAuth.signOut();
  }

  displayName(): string {
    if (this.currentUser !== null) {
      return this.currentUser.displayName;
    } else {
      return "";
    }
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: "bottom",
    });

    toast.onDidDismiss();

    toast.present();
  }
}
