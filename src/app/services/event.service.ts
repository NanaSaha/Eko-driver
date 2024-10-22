import { Injectable } from "@angular/core";
import firebase from "firebase/app";
import "firebase/auth";
@Injectable({
  providedIn: "root",
})
export class EventService {
  public userProfileRef: firebase.database.Reference;

  public CustomerRef: firebase.database.Reference;
  CustomerOwnRef: firebase.database.Reference;
  scheduledProfileRef: firebase.database.Reference;
  public id: any;
  public customerId: any;
  public rating: any;
  public rateText: any;
  public CustomerOwnPropertyRef: firebase.database.Reference;
  public DriverRef: firebase.database.Reference;
  public selectedUser: any;
  public companyList: any;

  user: any;
  userProfileRefer: firebase.database.Reference;
  returnCompleted: firebase.database.Reference;
  historyKey: any;
  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.id = user.uid;
        this.user = user;
        this.userProfileRef = firebase
          .database()
          .ref(`driverProfile/${user.uid}/userInfo`);
        this.userProfileRefer = firebase
          .database()
          .ref(`driverProfile/${user.uid}/`);

        this.returnCompleted = firebase.database().ref(`Completed`)

        this.CustomerRef = firebase
          .database()
          .ref(`Customer/${this.selectedUser}`);
        this.CustomerOwnPropertyRef = firebase
          .database()
          .ref(`Customer/${user.uid}/client`);
        this.CustomerOwnRef = firebase.database().ref(`Customer`);
        this.DriverRef = firebase
          .database()
          .ref(`Drivers/AllDrivers/${this.id}`);
        this.scheduledProfileRef = firebase.database().ref(`ScheduledRides`);
        this.companyList = firebase.database().ref(`Company`);
        this.getUserProfile().on("child_added", (userProfileSnapshot) => {
          this.rating = userProfileSnapshot.val().rating;
          this.rateText = userProfileSnapshot.val().review;
        });
      }
    });
  }

  getEventList(): firebase.database.Reference {
    return this.userProfileRef.child("/eventList");
  }

  getEarningList(): firebase.database.Reference {
    return this.userProfileRef.child("/earningList");
  }



  getEventListToday(date): firebase.database.Reference {
    return this.userProfileRef.child("/eventList").child(date);
  }

  getEarningsListToday(date): firebase.database.Reference {
    return this.userProfileRef.child("/earningList").child(date);
  }

  removeEarnings() {
    return this.userProfileRef.child("/earningList").remove();
  }


  Complain2(value: any, id: any): Promise<any> {
    return firebase
      .database()
      .ref(`DashboardSettings/user/complains/${id}`)
      .push({
        Client_Audio: value,
        email: this.user.email,
        chat_key: id,
      });
  }

  getSupportChatList(id: any): firebase.database.Reference {
    return firebase.database().ref(`DashboardSettings/user/complains/${id}`);
  }

  Complain(value: any, id: any): Promise<any> {
    return firebase
      .database()
      .ref(`DashboardSettings/user/complains/${id}`)
      .push({
        Client_Message: value,
        email: this.user.email,
        chat_key: id,
      });
  }

  getChatList(id: any): firebase.database.Reference {
    return firebase.database().ref(`Customer/${id}/client/Chat`);
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfileRef;
  }

  getUserProfiler(): firebase.database.Reference {
    return this.userProfileRefer;
  }

  getCompleted() {
    return this.returnCompleted;
  }

  UpdateTip(tip: any): Promise<any> {
    return this.userProfileRef
      .child("/eventList")
      .child(this.historyKey)
      .update({
        tip: tip,
      });
  }

  getScheduleList(): firebase.database.Reference {
    return this.scheduledProfileRef;
  }

  getCompanyList(): firebase.database.Reference {
    return this.companyList;
  }

  getCancelledList(): firebase.database.Reference {
    return this.userProfileRef.child("/cancelled");
  }
  getCurrentDriver(): firebase.database.Reference {
    return this.DriverRef;
  }

  getActivityProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnRef.child(`${id}/client`);
  }

  getActiveProfile(id: any): firebase.database.Reference {
    return this.CustomerOwnPropertyRef.child(id);
  }

  getEventDetail(eventId: string): firebase.database.Reference {
    return this.userProfileRef.child("/eventList").child(eventId);
  }

  getEarningDetail(eventId: string): firebase.database.Reference {
    return this.userProfileRef.child("/earningList").child(eventId);
  }

  UpdateCash(cash: number, eventId: string): Promise<any> {
    return this.userProfileRef.child("/eventList").update({
      price: cash,
    });
  }

  createHistory(
    p: any,
    name: any,
    price: number,
    date: any,
    location: any,
    destination: any,
    today: any,
    surge: any,
    waitTimeCost: any,
    osc: any,
    userID: any,
    tip: any
  ): Promise<any> {
    return this.userProfileRef
      .child("/eventList")
      .push({
        realPrice: p,
        name: name,
        price: price,
        date: date,
        location: location,
        paid: 1,
        destination: destination,
        hidden: false,
        waitTimeCost: waitTimeCost,
        today: today,
        surcharge: surge,
        osc: osc,
        tip: tip,
      })
      .then((d) => {
        console.log(d.key);
        this.historyKey = d.key;
        this.GiveInfo(this.id, d.key, userID);
      });
  }




  saveEarnings(
    p: any,
    name: any,
    price: number,
    date: any,
    location: any,
    destination: any,
    today: any,
    surge: any,
    waitTimeCost: any,
    osc: any,
    userID: any,
    tip: any
  ): Promise<any> {
    return this.userProfileRef
      .child("/earningList")
      .push({
        realPrice: p,
        name: name,
        price: price,
        date: date,
        location: location,
        paid: 1,
        destination: destination,
        hidden: false,
        waitTimeCost: waitTimeCost,
        today: today,
        surcharge: surge,
        osc: osc,
        tip: tip,
      })
      .then((d) => {
        console.log(d.key);
        this.historyKey = d.key;

      });
  }

  GiveInfo(id: any, rt: any, myId: any): Promise<any> {
    return firebase.database().ref(`userProfile/${myId}/userInfo`).update({
      Driver_id: id,
      Driver_key: rt,
    });
  }

  PushUserDetails(
    name: string,
    picture: any,
    id: any,
    lat: number,
    lng: number,
    locationName: any,
    plate: any,
    carType: any,
    positive: any,
    negative: any,
    rateText: any,
    number: number,
    regnum: any,
    bearing: any
  ): Promise<any> {
    return firebase
      .database()
      .ref(`Customer/${id}/client`)
      .update({
        Driver_name: name,
        Driver_location: [lat, lng],
        Driver_locationName: locationName,
        Driver_plate: plate,
        Driver_picture: picture,
        Driver_ID: this.id,
        Driver_RegNum: regnum,
        Driver_carType: carType,
        Driver_Positive_rating: positive,
        Driver_Negative_rating: negative,
        Driver_rateText: rateText,
        Driver_number: number,
        Driver_HasRated: false,
        Driver_bearing: bearing
      });
  }

  UpdateCard(
    card: string,
    month: any,
    year: any,
    cvc: any,
    amount: any,
    email: any,
    driverPay: any
  ): Promise<any> {
    return this.userProfileRef.update({
      Card_Number: card,
      Card_month: month,
      Card_Year: year,
      Card_Cvc: cvc,
      Card_Amount: amount,
      Card_email: email,
      Card_driverPay: driverPay,
    });
  }

  UpdateFund(card: any): Promise<any> {
    return this.userProfileRef.update({
      funds: card,
    });
  }

  PushCurrentLocation(
    lat: number,
    lng: number,
    id: any,
    carname: any,
    phone: any,
    pic: any,
    rating: any,
    earnings: any,
    price: any
  ): Promise<any> {
    return this.DriverRef.set({
      driver_details: [
        lat,
        lng,
        id,
        carname,
        phone,
        pic,
        rating,
        earnings,
        price,
      ],
    });
  }

  confirmRentry(value: any, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      entered: value,
    });
  }

  updatePrice(value: any, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_price: value,
    });
  }

  RateDriver(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_HasRated: value,
    });
  }

  ApprovePickup(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_PickedUp: value,
    });
  }

  pauseTrip(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      PauseTrip: value,
    });
  }

  resumeTrip(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      PauseTrip: value,
    });
  }



  SendMessage(value: string, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client/Chat`).push({
      Driver_Message: value,
    });
  }

  UpdateTime(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Time_Destination: value,
    });
  }

  ApprovePickup2(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Pool_PickedUp: value,
    });
  }

  ApproveDrop(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Dropped: value,
    });
  }

  ApproveDrop2(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Pool_Dropped: value,
    });
  }

  ApprovedArrival(value: boolean, id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Arrived: value,
      Driver_Arrived: value
    });
  }

  ApproveDelete(id: any): Promise<any> {
    return firebase.database().ref(`Customer/${id}/client`).update({
      Client_Deleted: true,
    });
  }

  UpdateLocation(lat: number, lng: number, id: any): Promise<any> {
    return firebase
      .database()
      .ref(`Customer/${id}/client`)
      .update({
        Driver_location: [lat, lng],
      });
  }
}
