import { Injectable } from "@angular/core";
import firebase from "firebase";
import { HttpClientModule, HttpInterceptor, HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable()
export class ProfileService {
  public userProfile: firebase.database.Reference;
  public userOtherProfile: firebase.database.Reference;
  public customer: firebase.database.Reference;
  public subscription: firebase.database.Reference;
  otherDatabseInfo: firebase.database.Reference;
  public currentUser: firebase.User;
  public user: any;
  public drivers: any;
  public photo: any;
  public CustomerOwnPropertyRef: firebase.database.Reference;
  public location;
  public plate;
  public carType;
  public name;
  public seat;
  public rating: any;
  public picture;
  public number;
  public earnings;
  public mainuser;
  public userEmail;
  public accountNum;
  public caryear;
  public city;
  public rateText: any;
  public bank;
  public lat;
  public img;
  userOtherProfile2: firebase.database.Reference;
  uidProfile: firebase.database.Reference;
  public lng;
  public promoProfile: any;
  // tslint:disable-next-line: variable-name
  referal_earnings: any;
  public ridePrice;
  public cars: any;
  public Language;
  public help;
  public loadingState = false;
  card: any;
  email: any;
  public convrefEarning: any;
  year: any;
  companyProfile: any;
  companyNews: any;
  month: any;
  cvc: any;
  public compEarnings: any;
  id: any;
  companyName: any;
  funds: any;
  addedFunds: any = 0;
  isTest = true;
  numSchedule: number;
  userProfil: firebase.database.Reference;
  subscribed: firebase.database.Reference;
  theKey: any;
  // tslint:disable-next-line: variable-name
  active_state: any;
  has_subscribed: any;
  license: any;
  // tslint:disable-next-line: variable-name
  license_picture: any;
  blocked: boolean;
  campaigns;
  isOffline;
  commission: any;
  CancelledProfile: firebase.database.Reference;
  constructor(public http: HttpClient) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;

        this.id = this.user.uid;
        this.subscribed = firebase
          .database()
          .ref(`subscribed/${user.uid}`);
        this.userProfil = firebase.database().ref(`driverProfile/`);
        this.userProfile = firebase
          .database()
          .ref(`driverProfile/${user.uid}/userInfo`);
        this.campaigns = firebase.database().ref(`campaigns`);
        this.userOtherProfile = firebase
          .database()
          .ref(`userProfile/${user.uid}/userInfo`);
        this.otherDatabseInfo = firebase.database().ref(`DashboardSettings`);
        this.drivers = firebase.database().ref(`Drivers/AllDrivers`);
        this.uidProfile = firebase.database().ref(`SharingID/`);
        this.companyProfile = firebase.database().ref(`Company`);
        this.subscription = firebase.database().ref(`subscriptions`);
        this.userOtherProfile2 = firebase.database().ref(`userProfile/`);
        this.companyNews = firebase.database().ref(`News/Driver`);
        this.CustomerOwnPropertyRef = firebase
          .database()
          .ref(`Customer/${user.uid}/client`);
        this.CancelledProfile = firebase.database().ref(`Company`);
        this.promoProfile = firebase.database().ref(`SharingIDPromo/`);
        this.commission = firebase.database().ref(`commissions`);
        this.getUserOtherProfile().on("value", (userProfileSnapshot) => {
          this.mainuser = userProfileSnapshot.val();
        });

        this.getUserOtherProfile().on("value", (userProfileSnapshot) => {
          this.mainuser = userProfileSnapshot.val();
        });

        this.getDatabaseProfile().on("value", (userProfileSnapshot) => {
          console.log(userProfileSnapshot.val());
          this.cars = userProfileSnapshot.val();
          // if (userProfileSnapshot.val().test) {
          //   this.isTest = userProfileSnapshot.val().test;
          // }
        });

        this.getUserProfil()
          .child(this.id)
          .on("child_added", (userProfileSnapshot) => {
            this.plate = userProfileSnapshot.val().plate;
            this.active_state = userProfileSnapshot.val().active_state;
            this.license = userProfileSnapshot.val().license;
            this.license_picture = userProfileSnapshot.val().license_picture;
            this.blocked = userProfileSnapshot.val().blocked;
            this.img = userProfileSnapshot.val().img;
            this.ridePrice = userProfileSnapshot.val().price;
            this.carType = userProfileSnapshot.val().carmodel;
            this.caryear = userProfileSnapshot.val().caryear;
            this.seat = userProfileSnapshot.val().seats;
            this.rating = userProfileSnapshot.val().rating;
            this.rateText = userProfileSnapshot.val().review;
            this.picture = userProfileSnapshot.val().picture;
            this.name = userProfileSnapshot.val().first_name;
            this.earnings = userProfileSnapshot.val().earnings;
            this.referal_earnings = userProfileSnapshot.val().referal_earnings;
            this.number = userProfileSnapshot.val().phoneNumber;
            this.accountNum = userProfileSnapshot.val().accountNumber;
            this.bank = userProfileSnapshot.val().Bank;
            this.city = userProfileSnapshot.val().city;
            this.card = userProfileSnapshot.val().Card_Number;
            this.email = userProfileSnapshot.val().Card_email;
            this.funds = userProfileSnapshot.val().funds;
            this.cvc = userProfileSnapshot.val().Card_Cvc;
            this.year = userProfileSnapshot.val().Card_Year;
            this.month = userProfileSnapshot.val().Card_month;
            this.Language = userProfileSnapshot.val().Language;
            this.convrefEarning = userProfileSnapshot.val().refEarning;
            this.companyName = userProfileSnapshot.val().companies;
            this.isOffline = userProfileSnapshot.val().isOffline


            // tslint:disable-next-line: no-shadowed-variable
            this.getCompanyProfile(this.companyName).on(
              "value",
              (userProfileSnapshot) => {
                if (userProfileSnapshot.val()) {
                  this.compEarnings = userProfileSnapshot.val().earnings;
                }
              }
            );

            console.log(this.userProfile);
          });
      }
    });
  }


  newSubscription(funds, reference, trans, status, user_id) {
    // this.subscription = this.db.list("/Chats");
    // return this.chatListRef;
    var todayDate = "";
    var d = new Date();
    todayDate += d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    todayDate;

    return this.subscription.push({
      
      funds: funds,
      reference: reference,
      trans: trans,
      status: status,
      user_id: user_id,
    
      date: todayDate
    });
  }

  getCancelledProfile(): firebase.database.Reference {
    return this.CancelledProfile;
  }
  doShit2(id: any, amt: any): Promise<any> {
    return this.userProfile
      .child("/eventList")
      .child(id)
      .update({
        tip: amt,
      })
      .then(() => {
        this.userProfile.child("tipper").remove();
      });
  }


  getCommision(): firebase.database.Reference {
    return this.commission;
  }

  getSubscription(): firebase.database.Reference {
    return this.subscription;
  }
  CancelledMe2(
    usr: string,
    id: any,
    name: string,
    date: any,
    location: any,
    destination: any,
    price: any,
    reason: any,
    charge: any
  ): Promise<any> {
    return this.userOtherProfile2
      .child(id)
      .child(`/userInfo`)
      .child("cancelled/")
      .push({
        name: name,
        user_name: usr,
        date: date,
        location: location,
        destination: destination,
        price: price,
        reason: reason,
        charge: charge,
      });
  }
  Cancelled(
    usr: string,
    name: string,
    date: any,
    location: any,
    destination: any,
    price: any,
    reason: any,
    charge: any
  ): Promise<any> {
    return firebase.database().ref(`Cancelled`).push({
      name: name,
      user_name: usr,
      date: date,
      location: location,
      destination: destination,
      price: price,
      reason: reason,
      charge: charge,
    });
  }
  CancelledMe(
    usr: string,
    name: string,
    date: any,
    location: any,
    destination: any,
    price: any,
    reason: any,
    charge: any
  ): Promise<any> {
    return this.userProfile.child(`cancelled/`).push({
      user_name: usr,
      name: name,
      date: date,
      location: location,
      destination: destination,
      price: price,
      reason: reason,
      charge: charge,
    });
  }

  UpdateRiderCredits(number: number, id: any): Promise<any> {
    return this.userOtherProfile2.child(id).child("userInfo").update({
      credits: number,
    });
  }
  getCurrentDriver(id: any): firebase.database.Reference {
    return this.userOtherProfile;
  }
  doShit3(): Promise<any> {
    return this.userProfile.child("rater").remove();
  }
  getOtherProfile(): firebase.database.Reference {
    return this.userOtherProfile2;
  }

  RateUser(id: any, rScore: any, text: any, value: boolean): Promise<any> {
    return firebase.database().ref(`userProfile/${id}/userInfo`).update({
      rating: rScore,
      ratingtext: text,
    });
  }
  UpdateCredits(number: number): Promise<any> {
    return this.userProfile.update({
      credits: number,
    });
  }

  RejectFavorite(id: any): Promise<any> {
    return firebase
      .database()
      .ref(`userProfile/${id}/userInfo`)
      .child("favorite")
      .child(this.id)
      .remove();
  }

  getSharingID(): firebase.database.Reference {
    return this.uidProfile;
  }

  retrieve_campaigns(): firebase.database.Reference {
    return this.campaigns;
  }

  getCompanies(): firebase.database.Reference {
    return this.companyProfile;
  }

  getActivityProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnPropertyRef.child(`${id}/client`);
  }

  getCompanyProfileEarnings(): firebase.database.Reference {
    return this.companyProfile.child(`${this.companyName}/`);
  }

  getCompanyProfile(id: any): firebase.database.Reference {
    return this.companyProfile.child(`${id}/`);
  }

  createDocList(data, id): firebase.database.Reference {
    return this.companyProfile
      .child("Rider")
      .child("documents")
      .child(`${id}/`)
      .push({
        data,
      });
  }

  createMyDocList(data, id): Promise<void> {
    return this.companyProfile
      .child("Rider")
      .child("documents")
      .child(`${id}`)
      .child(`${this.id}/`)
      .update({
        name: this.name,
        client: "Rider",
        data,
        comment: "none",
        expired: [2019, 6, 5],
        denied: "false",
        approved: "false",
      });
  }

  uploadDocFile(data, id): Promise<void> {
    return this.companyProfile
      .child("Rider")
      .child("documents")
      .child(`${id}`)
      .child(`${this.id}/`)
      .update({
        name: this.name,
        client: "Rider",
        data,
        comment: "none",
        expired: [2019, 6, 5],
        denied: "false",
        approved: "false",
      });
  }

  uploadDocFile2(data, id): Promise<void> {
    return this.companyProfile
      .child("Rider")
      .child("documents")
      .child(`${id}`)
      .child(`${this.id}/`)
      .update({
        data,
      });
  }

  getNewsProfile(): firebase.database.Reference {
    return this.companyNews;
  }

  getActiveProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnPropertyRef.child(id);
  }

  getDatabaseProfile(): firebase.database.Reference {
    return this.otherDatabseInfo;
  }

  updateID(username: string): Promise<void> {
    return this.userProfile.update({
      id: username,
    });
  }

  updateGUID(username: string): Promise<void> {
    return this.uidProfile
      .child(username)
      .update({
        id: [this.user.uid],
      })
      .then(() => {
        this.updateID(username);
      });
  }

  getUserProfile(): firebase.database.Reference {

    return this.userProfile;
  }

  getUserProfil(): firebase.database.Reference {
    return this.userProfil;
  }

  UpdateEarnings(sum: any): Promise<any> {
    return this.userProfile.update({
      earnings: this.earnings + sum,
    });
  }

  UpdateRating(current: any, text: any): Promise<any> {
    return this.userProfile.update({
      rating: current,
      review: text,
    });
  }

  NegativeRateDriver(id: any, rt: number): Promise<any> {
    return firebase.database().ref(`userProfile/${id}/userInfo`).update({
      rating_negative: rt,
    });
  }
  PositiveRateDriver(id: any, rt: any): Promise<any> {
    return firebase.database().ref(`userProfile/${id}/userInfo`).update({
      rating_positive: rt,
    });
  }

  UpdatePaymentType(
    // tslint:disable-next-line: variable-name
    number: number,
    data: any
  ): Promise<any> {
    return this.userProfile.update({
      payWith: number,
      funds: data,
    });
  }

  getUserOtherProfile(): firebase.database.Reference {
    return this.userOtherProfile;
  }

  getUserAsClientInfo(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/`);
  }

  getUserAsClientInfoMessage(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/`);
  }

  getUser2AsClientInfo(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/`);
  }

  getAllDrivers(): firebase.database.Reference {
    return this.drivers;
  }

  Complain(value: any): Promise<any> {
    return firebase.database().ref(`DashboardSettings/driver/complains`).push({
      complain: value,
      email: this.user.email,
    });
  }

  UpdateDriverLocation(lat: any, lng: any, id: any, bearing: any): Promise<any> {
    console.log("upadating in database");
    return firebase
      .database()
      .ref(`Customer/${id}/client`)
      .update({
        Driver_location: [lat, lng],
        Driver_Bearing: bearing
      });
  }

  Reject(id: any): Promise<any> {
    console.log("upadating in database");
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Driver_Reject: true,
    });
  }

  doShit(): Promise<any> {
    return this.userProfile.child("favorite").update({
      favoriteSeek: false,
    });
  }

  UpdateInfo(
    first_name,
    last_name,
    dob,
    gender,
    address,
    city,
    company,
    phonenumber,
    license: any,
    carmodel: any,
    caryear: number,
    plate: any,
    seats: number,
    carName: any,
    cartypes,
    car_color,
    company_name,
    img: any,
    unique_number,
    date,
    email
  ): Promise<any> {
    return this.userProfile.update({
      first_name,
      last_name,
      dob,
      gender,
      address,
      city,
      company,
      phonenumber,
      license,
      carmodel,
      caryear,
      plate,
      seats,
      rating: 0,
      earnings: 0,
      active_state: false,
      carName: carName,
      cartypes,
      car_color,
      company_name,
      img,
      unique_number,
      price: 10,
      isOffline: false,
      Language: "en",
      date,
      email,
      has_subscribed: false

    });
  }

  // UpdateInfo(
  //   name: string,
  //   city: string,
  //   license: any,
  //   carmodel: any,
  //   caryear: number,
  //   plate: any,
  //   seats: number,
  //   accountNum: any,
  //   bank: any,
  //   carname: any,
  //   carprice: any,
  //   carImage: any,
  //   insp: any
  // ): Promise<any> {
  //   return this.userProfile.update({
  //     name,
  //     city,
  //     license,
  //     carmodel,
  //     caryear,
  //     plate,
  //     seats,
  //     rating: 0,
  //     earnings: 0,
  //     active_state: false,
  //     accountNumber: accountNum,
  //     Bank: bank,
  //     Carname: carname,
  //     Carprice: carprice,
  //     CarImage: carImage,
  //     price: 10,
  //     isOffline: false,
  //     Language: "en",
  //     inspector: insp,
  //   });
  // }

  // tslint:disable-next-line: variable-name
  UpdateNumber(number: number): Promise<any> {
    return this.userProfile.update({
      phoneNumber: number,
    });
  }

  InActiveState(): Promise<any> {
    return this.userProfile.update({
      isOffline: true,
    });
  }

  isZone(lat: any, lng: any): Promise<any> {
    return this.userProfile.update({
      zone_lat: lat,
      zone_lng: lng,
    });
  }

  ActiveState(): Promise<any> {
    return this.userProfile.update({
      isOffline: false,
    });
  }

  // tslint:disable-next-line: variable-name
  UpdateAccountNumber(number: any): Promise<any> {
    return this.userProfile.update({
      accountNumber: number,
    });
  }

  UpdatePPhotoInfo(picture: any): Promise<any> {
    return this.userProfile.update({
      picture,
    });
  }

  UpdateInsurancePhotoInfo(insurance_picture: any): Promise<any> {
    return this.userProfile.update({
      insurance_picture,
    });
  }

  UpdateSubscription(subscribe: any): Promise<any> {
    return this.userProfile.update({
      has_subscribed: subscribe
    });
  }

  UpdateLanguage(value: any): Promise<any> {
    return this.userProfile.update({
      Language: value,
    });
  }

  UpdateNPhotoInfo(picture: any): Promise<any> {
    return this.userProfile.update({
      NID: picture,
    });
  }

  // tslint:disable-next-line: variable-name
  UpdateBank(number: any): Promise<any> {
    return this.userProfile.update({
      Bank: number,
    });
  }

  // tslint:disable-next-line: variable-name
  UpdateCarName(name: any): Promise<any> {
    return this.userProfile.update({
      carName: name,
    });
  }

  // tslint:disable-next-line: variable-name
  UpdateCarModel(number: any): Promise<any> {
    return this.userProfile.update({
      carmodel: number,
    });
  }

  // tslint:disable-next-line: variable-name
  UpdatePrice(number: any): Promise<any> {
    return this.userProfile.update({
      price: number,
    });
  }

  // tslint:disable-next-line: variable-name
  UpdateCarYear(number: any): Promise<any> {
    return this.userProfile.update({
      caryear: number,
    });
  }
  // tslint:disable-next-line: variable-name
  UpdateName(number: any): Promise<any> {
    return this.userProfile.update({
      name: number,
    });
  }

  UpdateEmergencyNumbers(number: number): Promise<any> {
    return this.userProfile.update({
      emergencyNumber: number,
    });
  }

  updateEmail(email: string): Promise<void> {
    return this.userProfile.update({
      email: email,
    });
  }
  // tslint:disable-next-line: variable-name
  UpdatePlate(number: any): Promise<any> {
    return this.userProfile.update({
      plate: number,
    });
  }

  UpdateCarLicense(license: any): Promise<any> {
    return this.userProfile.update({
      license: license,
    });
  }

  M_updateID(id: any, name: any): Promise<void> {
    console.log(id, name);
    return this.userOtherProfile.child("rejected").child(id).update({
      name,
    });
  }
  // tslint:disable-next-line: variable-name
  UpdateCarSeats(number: any): Promise<any> {
    return this.userProfile.update({
      seats: number,
    });
  }
  // tslint:disable-next-line: variable-name
  UpdateCity(number: any): Promise<any> {
    return this.userProfile.update({
      city: number,
    });
  }

  getAllSharingID(): firebase.database.Reference {
    return this.uidProfile;
  }
  // tslint:disable-next-line: variable-name
  UpdateCartype(number: any): Promise<any> {
    return this.userProfile.update({
      Cartype: number,
    });
  }
  // tslint:disable-next-line: variable-name
  UpdateLPhotoInfo(license_picture: any): Promise<any> {
    return this.userProfile.update({
      license_picture,
    });
  }



  UpdateCarPhotoInfo(img: any): Promise<any> {
    return this.userProfile.update({
      img,
    });
  }

  getAllSharingPromoID(code): firebase.database.Reference {
    return this.promoProfile.child(code);
  }

  ///////SAVE USER FOR SERVER

  main_url = "https://wwtpapi.devdexsoftware.com";
  create_user = this.main_url + "/ionic_register";
  getOtp = this.main_url + "/getOTPcode_ionic";

  create_admin_user(data) {
    const promise = new Promise<void>((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: "application/json"
        }),
      };

      this.http.post(this.create_user, data, httpOptions).subscribe({
        next: (res: any) => {
          console.log(" resolve(res);", resolve(res))
          return resolve(res);

        },
        error: (err: any) => {
          reject(err);
          console.log(" Error(res);", reject(err))
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }


  genOTP(data) {
    // console.log("DATA COMING FOR genOTP:::", data)
    const data1 = { mobile_number: data };
    console.log("DATA COMING FOR genOTP:::", data1)
    const promise = new Promise<void>((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: "application/json"
        }),
      };

      this.http.post(this.getOtp, data1, httpOptions).subscribe({
        next: (res: any) => {
          console.log(" resolve(res);", resolve(res))
          return resolve(res);

        },
        error: (err: any) => {
          reject(err);
          console.log(" Error(res);", reject(err))
        },
        complete: () => {
          console.log('complete');
        },
      });
    });
    return promise;
  }





}
