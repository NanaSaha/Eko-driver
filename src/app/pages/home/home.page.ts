import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
    NavController, AlertController, Platform, ModalController, LoadingController, MenuController, ActionSheetController,
} from "@ionic/angular";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { Storage } from "@ionic/storage";
import firebase from "firebase";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Vibration } from "@ionic-native/vibration/ngx";
import { timer } from "rxjs";
import { interval } from "rxjs";
import { LatLng } from "@ionic-native/google-maps";
import { SettingsService } from "../../services/settings.service";
import { LocationTrackerService } from "../../services/location-tracker.service";
import { DirectionserviceService } from "../../services/directionservice.service";
import { OnesignalService } from "../../services/onesignal.service";
import { LanguageService } from "../../services/language.service";
import { GeocoderService } from "../../services/geocoder.service";
import { PopUpService } from "../../services/pop-up.service";
import { EventService } from "../../services/event.service";
import { ProfileService } from "../../services/profile.service";
import { NewsPage } from "../news/news.page";
import { ChatPage } from "../chat/chat.page";
import { PaymentpagePage } from "../paymentpage/paymentpage.page";
// import { AcceptPage } from"../../pages/accept/accept.page";
import { AcceptPage } from "src/app/pages/accept/accept.page";
import { Router } from "@angular/router";
import { TripinfoPage } from "../tripinfo/tripinfo.page";
import { AuthService } from "../../services/auth.service";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { Geolocation, PositionError, Geoposition } from "@ionic-native/geolocation/ngx";

import { Insomnia } from '@ionic-native/insomnia/ngx';
import { BackgroundMode } from "@ionic-native/background-mode/ngx";
declare var google;
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

import Swal from 'sweetalert2';
// declare var Stripe;

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
    // encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {


    map: any;
    address: any;
    userProfile: any;
    paymentType: any; selectedShape: any;
    colors = ["#1E90FF", "#FF1493", "#32CD32", "#FF8C00", "#4B0082"];
    selectedColor;
    colorButtons = {};
    notification_Id: any;
    public userProfileRef: firebase.database.Reference;
    public toggleMore: boolean = false;
    public geocoder: any = new google.maps.Geocoder();
    gpsIson: boolean = false;
    public hideMe: boolean = false;
    public marker: any;
    public name2;
    public picture2;
    public location2;
    public destination2;
    public rating2;
    public hasArrived: boolean = false;
    public ratingText2;
    public poolRequest: boolean = false;
    public message2: any;
    public urPos2: any;
    public driverLoc2: any;
    destination_lat: any;
    destination_lng: any;
    hasAdded_Destination2: boolean = false;
    hasPooled: boolean = true;
    poolEnd: boolean = true;
    name: any;
    watchId: any;
    hasDone: boolean = true;
    isPaused: boolean = false;
    timeOut: any;
    lat: any;
    isArrived: boolean = false;
    remove_arrived: boolean = false;

    isBlocked: boolean = false;
    urPos: any;
    canLoad: boolean = true;
    lng: any;
    myAlert: any;
    timer: any;
    location: any;
    doneK: boolean = true;
    picture: any;
    canDO: boolean = true;
    IamOffline: boolean = false;
    destination: any;
    returningUser: boolean = true;
    NotifyTimes: number = -1;
    timerBeforeNotify: number = 2000;
    timeTonotify: any;
    mapSection: boolean = false;
    toggleButtons: boolean = false;
    moreText: string = "Hide All";
    moreIcon: any = "ios-arrow-up";
    canShowOther: boolean = false;
    public hasNotPicked: boolean = true;
    public hasNotPicked2: boolean = true;
    public customerPhone: any;
    public customerPhone2: any;
    public hasPooled2: boolean = true;
    hideNews: boolean = false;
    userLat: any;
    userLat2: any;
    notification: boolean = false;
    numSchedule: any;
    mapFalse: boolean = false;
    userLng: any;
    userLng2: any;
    driverLoc: any;
    connected: boolean = false;
    toggleStatus: boolean = false;
    newDestinationStop;
    // notify_ID: any;
    isNotDestinyOption: boolean = true;
    userHasPhone: boolean = false;
    hasAdded_Destination: boolean = false;
    message: string;
    cartype: any;
    earnings: any;
    canEnd2: boolean = true;
    public connect: boolean = false;
    canEnd: boolean = true;
    callback: any;
    public rating: any = 0;
    public ratingText: any = "Cool";
    appReady: boolean = false;
    public hasSent: boolean = false;
    public canStopCheck: boolean = false;
    public canStop: boolean = false;
    isNetwork: boolean = true;
    greut: boolean = true;
    public called = true;
    customerID: any;
    public showGps: boolean = false;
    public hasEnded: boolean = true;
    public called2 = true;
    public called_2 = true;
    public news: any;
    public itsOver: boolean = true;
    public called_22 = true;
    public ridePrice: any;
    public newsti: any;
    public tacktime = true;
    public dropped = true;
    public dropped2 = true;
    cliet: boolean = true;
    public clientClrCheck: boolean = false;
    public PoolClrCheck: boolean = false;
    public done = true;
    public hasNotFoundMap: boolean = true;
    showPassenger2: boolean = false;
    public scheduleList: Array<any>;
    public eventList: Array<any>;
    c_picked: boolean = true;
    c_dropped: boolean = true;
    c_ended: boolean = true;
    c_added: boolean = true;
    c_complete: boolean = true;
    mysheet: any;
    data: any;
    tracker: any;
    isInBooking: boolean = true;
    watchPositionSubscription: Geolocation;
    mapTracker: any;
    canListen: boolean = true;
    isPassengerCleared: boolean = true;
    passenger_Lat: any;
    passenger_Lng: any;
    hasG: boolean = true;
    isPickedDone: boolean = false;
    canStart: boolean = false;
    isUser: boolean = true;
    rating_positive: any = 1;
    rating_negative: any = 1;
    zoner: boolean = false;
    items: any[];
    canIncur: boolean = false;
    hasTimed: boolean = true;
    cancelTimer: any;
    currentCar: any;
    scope: boolean = false;
    drawingManager: any;
    coordinates: any[];
    radius: boolean = false;
    thatmap: any;
    rateUp: any;
    rateDown: any;
    timeLeft: number = 120;
    interval;
    myAlert2: any;
    bull: any;
    Arrined: boolean = false;
    isPiked: boolean = true;
    startIme: any;
    totalSec: number;
    myVal: any;
    myListening: any;
    timeOver: boolean;
    tipped: any;
    jkl: boolean = true;
    hour: any = 1;
    customeID: any;
    hours: any = 0;
    myVal2: number;
    countDownDate: any;
    now: any;
    noww: any;
    manTime: any;
    hasPAused: boolean = false;
    seconds: any = 1;
    minutes: any = 0;
    clock_minutes: any = 0;
    pauseCost: any = 0;
    trop: number;
    canBe: boolean = true;
    currency: string = "GHC";
    currencyIcon: string = "C";
    stripe_key =
        "pk_test_8tqD66FgCZq0DosnjKmXqdHe00aCCiUfTN";
    cardDetails: any = {};
    card: any;
    info: any;
    payme: any;
    canTrack: any;
    totalTipped: any = 0;
    pickArrived: string;
    isDrop: string;
    currLat: number;
    currLng: number;
    check_tracker_loop: any;
    tip: any;
    client_Name: any;
    mr = 0;
    flat2Driver: any;
    myDriverSurge: any;
    percent2Driver: any;
    wef: any;
    flatDriver: any;
    percentDriver: any;
    totalDriverSurge: any;
    riderpaid: any;
    subscription: any;
    http: any;
    hasHome: any;
    emergenc;
    first_name;
    last_name;
    phonenumber;
    unique;
    watch;
    subscribed: boolean = false;
    has_subscribed

    notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
    //OneSignal: any;
    //showLoadRefresh: any;

    shortMap: boolean = true;
    defaultMap: boolean;
    email: any;
    targetEarning: any;

    // test2: boolean = false;
    audioPlayer: HTMLAudioElement;

    constructor(
        public share: SocialSharing,
        private vibration: Vibration,
        public lp: LanguageService,
        public modalCtrl: ModalController,
        public storage: Storage,
        public settings: SettingsService,
        public One: OneSignal,
        public statusBar: StatusBar,
        public loadingCtrl: LoadingController,
        private router: Router,
        public locationTracker: LocationTrackerService,
        public myGcode: GeocoderService,
        public dProvider: DirectionserviceService,
        public platform: Platform, // tslint:disable-next-line: no-shadowed-variable
        public OneSignal: OnesignalService,
        public alert: AlertController,
        public pop: PopUpService,
        public auth: AuthService,
        public ph: ProfileService,
        public navCtrl: NavController,
        public eventProvider: EventService,
        public menu: MenuController,
        public call1: CallNumber,
        private geo: Geolocation,
        public insomnia: Insomnia,
        public actionSheetController: ActionSheetController,
        public backgroundMode: BackgroundMode,) {

        this.platform.ready().then(() => {

         
            this.onResumme()

            this.goOnline();
            this.locationTracker.loadMap();
            this.NowWaitingForID();

            //SUBSCRIBE TO ONE SIGNAL
            this.subscribeToOnesignal();

         

        });
    }

    playNotificationSound() {

        this.audioPlayer.play();
    }


    onResumme() {
        // ON RESUME CHECKING FROM STORAGE

        this.storage.get("LoggedOff").then((value) => {
            if (value == null) {

            } else {
                this.pop.loggedOff = value


            }

        })

        this.storage.get("shortMap").then((value) => {
            if (value == null) {

            } else {
                this.shortMap = value
            }

        })

        this.storage.get("isPaused").then((value) => {
            if (value == null) {

            } else {
                this.isPaused = value
            }

        })



        this.storage.get("isNotDestinyOption").then((value) => {
            if (value == null) {

            } else {
                this.isNotDestinyOption = value

            }

        })



        this.storage.get("hideMe").then((value) => {
            if (value == null) {

            } else {
                this.hideMe = value

            }

        })



        this.storage.get("myLat").then((value) => {
            if (value == null) {

            } else {
                this.locationTracker.myLat = value

            }

        })

        this.storage.get("myLng").then((value) => {
            if (value == null) {

            } else {
                this.locationTracker.myLng = value

            }

        })


        this.storage.get("data").then((value) => {
            if (value == null) {

            } else {
                this.data = value

            }

        })


        this.storage.get("destination").then((value) => {
            if (value == null) {

            } else {
                this.destination = value

            }

        })
        this.storage.get("remove_arrived").then((value) => {
            if (value == null) {

            } else {
                this.remove_arrived = value

            }

        })
        this.storage.get("canListen").then((value) => {
            if (value == null) {

            } else {
                this.canListen = value

            }

        })
        this.storage.get("canStart").then((value) => {
            if (value == null) {

            } else {
                this.canStart = value

            }


        })
        this.storage.get("customeID").then((value) => {
            if (value == null) {

            } else {
                this.customeID = value

            }

        })
        this.storage.get("jkl").then((value) => {
            if (value == null) {

            } else {
                this.jkl = value

            }

        })

        this.storage.get("defaultMap").then((value) => {
            if (value == null) {

            } else {
                this.defaultMap = value

            }

        })



        this.storage.get("customerPhone").then((value) => {
            if (value == null) {

            } else {
                this.customerPhone = value

            }

        })


        this.storage.get("hasEnded").then((value) => {
            if (value == null) {

            } else {
                this.hasEnded = value

            }

        })
        this.storage.get("hasNotFoundMap").then((value) => {
            if (value == null) {

            } else {
                this.hasNotFoundMap = value

            }

        })
        this.storage.get("ph.isOffline").then((value) => {
            if (value == null) {

            } else {
                this.ph.isOffline = value

            }

        })
        this.storage.get("isArrived").then((value) => {
            if (value == null) {

            } else {
                this.isArrived = value

            }

        })
        this.storage.get("hasNotPicked").then((value) => {
            if (value == null) {

            } else {
                this.hasNotPicked = value

            }

        })

        this.storage.get("pop.hasPicked").then((value) => {
            if (value == null) {

            } else {
                this.pop.hasPicked = value

            }

        })
        this.storage.get("time").then((value) => {
            if (value == null) {

            } else {
                this.dProvider.time = value

            }

        })
        this.storage.get("time2").then((value) => {
            if (value == null) {

            } else {
                this.dProvider.time2 = value

            }

        })
        this.storage.get("price").then((value) => {
            if (value == null) {

            } else {
                this.dProvider.price = value

            }

        })
        this.storage.get("isPiked").then((value) => {
            if (value == null) {

            } else {
                this.isPiked = value

            }

        })
        this.storage.get("bull").then((value) => {
            if (value == null) {

            } else {
                this.bull = value

            }

        })
        this.storage.get("pickArrived").then((value) => {
            if (value == null) {

            } else {
                this.pickArrived = value

            }

        })
        this.storage.get("isDrop").then((value) => {
            if (value == null) {

            } else {
                this.isDrop = value

            }

        })

        this.storage.get("distance2").then((value) => {
            if (value == null) {

            } else {
                this.dProvider.distance2 = value

            }

        })
        this.storage.get("name").then((value) => {
            if (value == null) {

            } else {
                this.name = value

            }

        })

        this.storage.get("notify_ID").then((value) => {
            if (value == null) {

            } else {
                this.notify_ID = value

            }

        })
    }




    removeStorage() {

        this.storage.remove("LoggedOff")

        this.storage.remove("shortMap")

        this.storage.remove("isPaused")


        this.storage.remove("isNotDestinyOption")

        this.storage.remove("hideMe")

        this.storage.remove("myLat")

        this.storage.remove("myLng")

        this.storage.remove("data")


        this.storage.remove("destination")
        this.storage.remove("remove_arrived")
        this.storage.remove("canListen")
        this.storage.remove("canStart")
        this.storage.remove("customeID")
        this.storage.remove("jkl")

        this.storage.remove("defaultMap")

        this.storage.remove("customerPhone")


        this.storage.remove("hasEnded")
        this.storage.remove("hasNotFoundMap")
        this.storage.remove("ph.isOffline")
        this.storage.remove("isArrived")
        this.storage.remove("hasNotPicked")

        this.storage.remove("pop.hasPicked")
        this.storage.remove("time")
        this.storage.remove("time2")
        this.storage.remove("price")
        this.storage.remove("isPiked")
        this.storage.remove("bull")
        this.storage.remove("pickArrived")
        this.storage.remove("isDrop")

        this.storage.remove("distance2")
        this.storage.remove("name")

        this.storage.remove("notify_ID")
    }

    completeItem() {
        this.shortMap = !this.shortMap;
        this.defaultMap = !this.defaultMap;

        console.log("IS defaultMap IS ", this.defaultMap)
        console.log("shortMap IS ", this.shortMap)
    }



    subscribeToOnesignal() {
        if (!this.platform.is("cordova")) {
            this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            this.locationTracker.notifID = this.notify_ID;
            this.OneSignal.notif_id = this.notify_ID;

            this.storage.set("notify_ID", this.notify_ID);

            this.StartListeningForChanges(this.notify_ID);
        }
        else if (this.platform.is("desktop")) {
            this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            this.storage.set("notify_ID", this.notify_ID);

            this.StartListeningForChanges(this.notify_ID);
        }

        else if (this.platform.is("mobileweb")) {
            this.notify_ID = "43cd6829-4651-4039-bbc3-aace7fbe7d72";
            this.storage.set("notify_ID", this.notify_ID);

            this.StartListeningForChanges(this.notify_ID);
        }
        else {
            this.One.getIds().then((success) => {
                this.notify_ID = success.userId;
                this.OneSignal.notif_id = success.userId;
                this.locationTracker.notifID = this.notify_ID;
                this.storage.set("notify_ID", this.notify_ID);

                this.StartListeningForChanges(this.notify_ID);
            });
        }
    }


    toggle() {
        this.menu.enable(true); this.menu.open();
    }

    checkTotalEarnings() {
        let n = [];
        this.pop.showLoader("").then(() => {
            this.pop.hideLoader();
        });

        this.eventProvider.getEventList().on("value",
            (snapshot) => {
                this.eventList = [];
                snapshot.forEach((snap) => {
                    this.eventList.push({ price: snap.val().price, tip: snap.val().tip, });
                    this.eventList.sort();
                    this.eventList.reverse();
                    console.log(this.eventList);
                    return false;
                });
            });

        for (let index = 0; index < this.eventList.length; index++) {
            const element = this.eventList[index];
            // console.log(element.price.replace(/[^\d\.]/g, ''));
            // n.push(this.eventList[index].price || 0);
            // n.push(parseFloat(this.eventList[index].price.replace(/[^\d\.]/g, '')));
            n.push(parseFloat(this.eventList[index].price));

            const add4 = (a, b) => a + b;
            const result4 = n.reduce(add4);
            this.mr = result4.toFixed(2);
            // sum += this.eventList[index].price + element.tip || 0;
        }
        console.log("HOW MUCH MADE::", this.mr);
    }


    ionViewDidEnter() {

        this.onResumme()

        this.audioPlayer = new Audio('/assets/sounds/drivermatch.mp3');


        this.checkTotalEarnings();
        this.StartTracker()

        console.log("LATTITUDE FIRSTD::",
            this.locationTracker.driver_lat);

        if (this.locationTracker.watch)
            this.locationTracker.watch.unsubscribe()
        if (this.isInBooking) {
            this.platform.ready().then(async () => {
                this.subscribeToOnesignal();

                console.log("PAGE HAS ENTERED--");
                if (!this.platform.is("cordova")) {
                    this.locationTracker.driver_lat = 5.7186233;
                    this.locationTracker.driver_lng = -0.0240626;
                    console.log("LATTITUDE SEC::", this.locationTracker.driver_lat);
                }
                this.eventProvider.getUserProfiler().on("value", (userProfileSnapshot) => {
                    console.log(userProfileSnapshot.val().userInfo);
                    if (userProfileSnapshot.val().userInfo.rating_positive) {
                        this.rating_positive = userProfileSnapshot.val().userInfo.rating_positive;
                        this.eventProvider.getUserProfiler().off("value");
                    }
                    if (userProfileSnapshot.val().userInfo.rating_negative) {
                        this.rating_negative = userProfileSnapshot.val().userInfo.rating_negative;
                        this.eventProvider.getUserProfiler().off("value");
                    }
                });
                if (this.appReady && this.locationTracker.driver_lat != 0) {
                    console.log(this.settings.current_ID);
                    if (!this.platform.is("cordova")) {
                        if (this.hasEnded) {
                            console.log("Updating car on database.");

                        }
                    }
                    if (this.platform.is("cordova")) {
                        if (this.hasEnded) {

                            this.subscription =
                                this.platform.backButton.subscribe(() => {
                                    navigator["app"].exitApp();
                                    this.subscription.unsubscribe();
                                });
                        }
                        if (this.settings.current_ID) {

                            this.showLoadRefresh().then(() => {
                                this.notify_ID = this.settings.id;
                                this.storage.set("notify_ID", this.notify_ID);

                            });
                        }
                    } else {
                        if
                            (this.settings.current_ID) {
                            this.showLoadRefresh().then(() => {
                                this.notify_ID = this.settings.id;
                                this.storage.set("notify_ID", this.notify_ID);

                            });
                        }
                    }
                }

            });
        }




    }



    ngOnInit() {

        this.onResumme()
        this.StartTracker();
        this.subscribeToOnesignal();
        //GET USER PROFILE DETAILS
        this.ph.getUserProfile().on("value", (userProfileSnapshot) => {
            console.log("USER PROFILE:: " + userProfileSnapshot.val());
            this.emergenc = userProfileSnapshot.val().emergencyNumber;
            this.first_name = userProfileSnapshot.val().first_name;
            this.last_name = userProfileSnapshot.val().last_name;
            this.picture = userProfileSnapshot.val().picture;
            this.phonenumber = userProfileSnapshot.val().phonenumber;
            this.unique = userProfileSnapshot.val().unique_number;
            this.has_subscribed = userProfileSnapshot.val().subscribe;
            console.log("first_name:: " + this.first_name);
            console.log("picture:: " + this.picture);
            console.log("EMERGENCY NUM:: " + this.emergenc);
            console.log("SUBSCRIBEDD????:: " + this.has_subscribed);
        });

        this.ph.getUserProfile().once("value", (us) => {
            if (us.val().favoriteSeek) {

            }
            if (us.val().isOffline != null)
                if (us.val().isOffline) {
                    this.isBlocked = true;
                    this.pop.loggedOff = true;
                    console.log("The user is offline");
                    this.canTrack = false;
                    this.pop.presentToast("You Are Offline, Will not recieve any jobs.");
                }
                else {
                    this.isBlocked = false;
                    this.pop.loggedOff = false;
                    console.log("The user is online");
                    this.canTrack = true;
                    // this.starTimer();
                }
            // this.ph.getUserProfile().off("value"); }); 

            this.NowWaitingForID();

        })

    }




    goBack() {
        console.log("Hittine back");
        this.navCtrl.navigateBack("home");
    }


    UpdateCredits(number: number): Promise<any> {
        return this.userProfile.update({
            credits: number,
        });
    }






    checkMe(price, surcharge) {
        let c = []; let n = [];
        console.log(surcharge)
            ; surcharge.forEach((element) => {
                this.riderpaid = parseFloat(price).toFixed(2);
                //if driver
                if (element.owner == 0) {
                    //if percent 
                    if (element.bone == 1) {
                        let nb = element.price / 100;
                        console.log(nb * this.riderpaid);
                        let fo = nb * this.riderpaid;
                        n.push(fo);
                        const add2 = (a, b) => a + b;
                        const result2 = n.reduce(add2);
                        this.percentDriver = result2;
                        console.log((Math.floor(element.price) /
                            100) * this.riderpaid);
                    } //if flat fee 
                    if (element.bone == 0) {
                        c.push(parseFloat(element.price));
                        const add4 = (a, b) => a + b;
                        const result4 = c.reduce(add4);
                        this.flatDriver = result4;
                        console.log(result4);
                    }
                    this.totalDriverSurge = this.flatDriver + this.percentDriver;
                    console.log(this.totalDriverSurge, this.flatDriver, this.percentDriver);
                }
            });
        return this.totalDriverSurge;
    }



    check(price, surcharge) {
        let c = [];
        let n = [];
        console.log(surcharge); surcharge.forEach((element) => {
            this.wef = parseFloat(price).toFixed(2);
            //if driver
            if (element.owner == 0) {
                //if percent
                if (element.bone == 1) {
                    let nb = element.price / 100;
                    console.log(nb * this.wef);
                    let fo = nb * this.wef;
                    n.push(fo);
                    const add2 = (a, b) => a + b;
                    const result2 = n.reduce(add2);
                    this.percent2Driver = result2;
                    console.log((Math.floor(element.price) / 100) * this.wef);
                }
                //if    flat fee 
                if (element.bone == 0) {
                    c.push(parseFloat(element.price));
                    const add4 = (a, b) => a + b;
                    const result4 = c.reduce(add4);
                    this.flat2Driver = result4;
                    console.log(result4);
                }
                this.myDriverSurge = this.flat2Driver + this.percent2Driver; console.log(this.myDriverSurge, this.flatDriver,
                    this.percentDriver);
            }

        }); return this.myDriverSurge;
    }


    ionViewDidExit() {
        this.pauseTimer();
    }

    RemoveZones() {
        this.ph.userProfile.child("zone_lat").remove();
        this.ph.userProfile.child("zone_lng").remove();
        this.ph.ActiveState().then(() => {
            this.pop.showPimp("Restart The App To  Use Normal Mode.");
        });
    }


    starTimer() {
        this.canBe = true;
        this.ph.getDatabaseProfile().on("value", (snapshot) => {
            this.manTime = 0;
            // if
            //     (snapshot.val().timeOn) {
            //     this.manTime = snapshot.val().timeOn;
            //     this.manTime = 0;
            // }
            // else {
            //     this.manTime = 0;
            // }
            this.ph.getDatabaseProfile().off();
        });
        this.ph.getUserProfile().on("value", (us) => {
            if (us.val().seconds)
                this.seconds = us.val().seconds; if (us.val().minutes) this.minutes =
                    us.val().minutes; this.ph.getUserProfile().off("value"); if
                (us.val().elapse) this.noww = us.val().elapse; console.log(this.noww);
        });
        this.myVal = interval(1000).subscribe(() => {
            var demo = document.getElementById("demo");
            this.trop = new Date().getHours() - new Date(this.noww).getHours();


            if (this.trop >= this.manTime && this.canBe) {
                this.ph.getUserProfile().off("value"); this.closEm(); this.canBe =
                    false; this.seconds = 1; this.minutes = 0; this.hours = 0;
            }
            if (demo)
                if (this.seconds) {
                    this.seconds++; this.ph.getUserProfile().update({
                        seconds: this.seconds,
                    });
                    if (this.seconds >= 60) {
                        this.minutes++;
                        this.seconds = 1;
                        console.log(this.minutes);
                        this.ph.getUserProfile().update({
                            minutes: this.minutes,
                        });
                    } if
                        (this.minutes >= 60) {
                        this.hours++; this.minutes = 1;
                        console.log(this.minutes); this.ph.getUserProfile().update({
                            hours:
                                this.hours,
                        });
                    }
                    // Output the result in an element with id="demo"
                    demo.innerHTML = this.hours + "h : " + this.minutes + "m : " +
                        this.seconds + "s ";
                }
        });
    }


    closEm() {
        this.ph.getUserProfile().update({
            seconds: 0,
        }); this.ph.getUserProfile().update({ minutes: 0, });
        this.ph.getUserProfile().update({ hours: 0, });
        this.ph.getUserProfile().update({ elapse: 0, });
    }



    pauseTimer() {
        //this.myVal.unsubscribe();
        console.log(this.noww);
        this.noww = new Date();
        this.ph.getUserProfile().update({ elapse: this.noww, });

    }



    startCountdown() {

        this.manTime = 0;

        this.myVal = interval(1000).subscribe(() => {
            var wait_time = document.getElementById("wait_time");
            this.trop = new Date().getHours() - new Date().getHours();

            if (wait_time) {
                if (this.seconds) {
                    this.seconds++;

                    if (this.seconds >= 60) {
                        this.minutes++;
                        this.seconds = 1;


                    }
                    if (this.minutes >= 5) {
                        this.myVal.unsubscribe();


                        this.waitTimeAlert()

                    }

                    wait_time.innerHTML = this.minutes + "min : " +
                        this.seconds + "secs ";

                }
            }
        });
    }



    pausingCountdown() {

        this.manTime = 0;

        this.myVal = interval(1000).subscribe(() => {
            var pause_time = document.getElementById("pause_time");

            if (pause_time) {
                if (this.seconds) {
                    this.seconds++;

                    if (this.seconds >= 60) {
                        this.minutes++;
                        this.clock_minutes++;
                        this.seconds = 1;


                    }
                    if (this.minutes >= 1) {
                        this.pauseCost = this.pauseCost + 0.20

                        this.minutes = 0
                        // this.myVal.unsubscribe();


                        // this.waitTimeAlert()

                    }

                    pause_time.innerHTML = this.clock_minutes + "min : " +
                        this.seconds + "secs ";

                }
            }
        });
    }

    async waitTimeAlert() {
        const alert = await this.alert.create({
            message: "Passenger meeting you soon....",
            subHeader: "Hello, you have been waiting for 5mins. Kindly call or wait for passenger",
            buttons: [
                {
                    text: "Keep Waiting",
                    role: "cancel",
                    handler: () => {

                    },
                },
                {
                    text: "Call Rider",
                    handler: () => {
                        this.call()

                    },
                },
            ],
            backdropDismiss: false,
        });
        await alert.present();
    }


    async anyAlert(message) {
        const alert =
            await this.alert.create({
                message: message, buttons: [{
                    text: "OK", role:
                        "cancel", handler: () => { },
                },], backdropDismiss: true,
            });
        alert.present();
    }


    async showMe(name, id) {
        const alert = await
            this.alert.create({
                message: name + " Wants To Add You As A Favorite.",
                buttons: [{
                    text: "Yes", role: "cancel", handler: () => {
                        this.ph.doShit();
                    },
                }, {
                    text: "No", role: "cancel", handler: () => {
                        this.ph.RejectFavorite(id);
                    },
                },], backdropDismiss: true,
            });
        alert.present();
    }


    async showMe3(name) {
        const alert = await
            this.alert.create({
                message: "You Were Rated. " + name, buttons: [{
                    text:
                        "Okay", role: "cancel", handler: () => { this.ph.doShit3(); },
                },],
                backdropDismiss: true,
            }); alert.present();
    }


    async showMe2(name, id) {
        const alert = await this.alert.create({
            message: "You Were Tipped. " +
                name, buttons: [{
                    text: "Okay", role: "cancel", handler: () => {
                        this.ph.doShit2(id, name);
                    },
                },], backdropDismiss: true,
        });
        alert.present();
    }


    toggleMapFalse() {
        this.mapFalse = this.mapFalse ?
            false : true;
    }

    async openNews() {
        const mod = await
            this.modalCtrl.create({ component: NewsPage, }); await mod.present();
        mod.onDidDismiss().then(() => {
            this.hideNews = true;
            this.storage.set(`News`, this.news);
        }); return await mod.present();
    }


    togglePassengers() {
        this.showPassenger2 = this.showPassenger2 ? false : true;
        console.log("Now Toggling");

    }

    gotoSupport() {
        this.navCtrl.navigateRoot("Suppor");
        this.platform.backButton.subscribe(() => this.navCtrl.pop());
    }

    hoseMe() {
        this.hideMe = this.hideMe ? false : true;
    }

    showMoreRating() {
        this.pop.showPimp(this.ratingText);
    }

    showMoreMessage() {
        this.pop.showPimp(this.message);
    }

    call_phone() {

        let customerPhone = this.emergenc;
        window.open("tel:" +
            customerPhone);
    }

    call_phone_other() {
        window.open("tel:+233276113371");
        //window.open("tel:" + this.emergenc); 

    }

    gotoScheduled() {
        this.platform.backButton.subscribe(() => this.navCtrl.pop());
        this.router.navigate(["schedule", {
            lat: this.locationTracker.driver_lat, lng:
                this.locationTracker.driver_lng, notif: this.notify_ID,
        },]);
        // Push your "OtherPage"
    }



    ionViewDidLoad() {
        // this.locationTracker.loadMap();
        // this.NowWaitingForID();
        // this.showLoadRefresh().then(() => {
        //   console.log("ABOUT TO LOAD MAP");

        // });

    }



    NowWaitingForID() {
        let location_locationTracker_loop = interval(3000).subscribe(() => {

            console.log("WAITING FOR ID:: IF  LOCATION hasShown:: ", this.locationTracker.hasShown);
            //this.watchPositionSubscription.clearWatch(this.mapTracker)
            if (this.locationTracker.hasShown) {
                location_locationTracker_loop.unsubscribe();
                console.log("LONGITIUDESHOWIN", this.locationTracker.driver_lng);

                this.OneSignal.UpdateInfo(this.locationTracker.driver_lat,
                    this.locationTracker.driver_lng, this.ph.carType);

                this.showGps = false;
                this.locationTracker.mapLoadComplete = true;
                this.toggleStatus = true;
                this.hasNotFoundMap = false;
                this.storage.set("hasNotFoundMap", this.hasNotFoundMap);
                // if (!this.isBlocked) {
                //   this.Register();
                // }
            } else {
                this.hasNotFoundMap = false;
                this.storage.set("hasNotFoundMap", this.hasNotFoundMap);

                this.NowWaitingForID();
                location_locationTracker_loop.unsubscribe();
            }
        });
    }

    Register() {
        this.pop.loggedOff = false;
        this.storage.set("LoggedOff", this.pop.loggedOff);
        this.StartTracker();


        if (this.platform.is("cordova")) {


            this.myListening = interval(3000).subscribe(() => {
                this.StartListeningForChanges(this.notify_ID);
            })
        }
        else {
            this.myListening = interval(3000).subscribe(() => {
                this.StartListeningForChanges(this.notify_ID);
            })

        }


        this.appReady = true;

        this.OneSignal.UpdateInfo(this.locationTracker.driver_lat,
            this.locationTracker.driver_lng, this.ph.carType);
        this.myGcode.Reverse_Geocode(
            this.locationTracker.driver_lat, this.locationTracker.driver_lng,
            this.locationTracker.map1, false);
    }

    StartTracker() {
        console.log("start tracking..........");


        this.watch = this.geo.watchPosition({ enableHighAccuracy: true, timeout: 10000 }).subscribe(position => {
            if ((position as Geoposition).coords != undefined) {
                // if (this.locationTracker.marker && this.canTrack) {
                var geoposition = (position as Geoposition);
                
                this.currLat = geoposition.coords.latitude,
                    this.currLng = geoposition.coords.longitude;

                this.OneSignal.UpdateInfo(this.currLat, this.currLng,
                    this.ph.carType);    //push Driver info to be avaolable




            } else {
                var positionError = (position as PositionError);
               

            }
        });


    }




    gotoProfile() {
        this.navCtrl.navigateRoot("proflie");
        this.platform.backButton.subscribe(() => this.navCtrl.pop());
    }


    gotoEarnings() {
        this.navCtrl.navigateRoot("payment");
        this.platform.backButton.subscribe(() => this.navCtrl.pop());
    }

    async SendMessage() {
        const modal = await this.modalCtrl.create({
            component:
                ChatPage, componentProps: { id: this.notify_ID },
        }); await
            modal.present(); await modal.onDidDismiss().then(() => {
                this.notification
                    = false;
            });
    }


    gotoHistory() {
        this.navCtrl.navigateRoot("history");
        this.platform.backButton.subscribe(() => this.navCtrl.pop());
    }

    goOnline() {
        // this.pauseTimer(); 
        // if (this.locationTracker.driver_lat != 0) {
        this.Register();
        this.ph.ActiveState();
      
        this.pop.presentToast(this.lp.translate()[0].e5);
        this.starTimer();
        this.pop.loggedOff = false;
        this.storage.set("LoggedOff", this.pop.loggedOff);
        this.pop.presentToast(this.lp.translate()[0].e5);
        this.OneSignal.UpdateInfo(this.locationTracker.driver_lat,
            this.locationTracker.driver_lng, this.ph.carType); 
        //push Driver info to be avaolable
        this.canTrack = true;
        this.canListen = true;
        this.storage.set("canListen", this.canListen);
        // } else {
        //   this.pop.alertMe("No latitude and Longitude On Your Device. Are You running on an emulator ? ");
        // }

    }

    goOffline() {
        this.canTrack = false;
        this.pop.GoOffline();
       
        this.canListen = false;
        this.storage.set("canListen", this.canListen);

        if (this.watch) {
            this.watch.unsubscribe();
        }

        this.pop.loggedOff = true;

        this.storage.set("LoggedOff", this.pop.loggedOff);
        this.ph.InActiveState();
        this.pauseTimer();
    }


    HasArrived() {
        this.pauseTimer();
        //this.startCountdown();


        if (this.platform.is("cordova")) {
            this.sendPush(this.customerID, "Driver has arrived");
        }
        else if (this.platform.is("desktop")) {
            this.pop.presentToast("Driver has arrived");
        }
        else if (this.platform.is("mobileweb")) {
            this.pop.presentToast("Driver has arrived");


        }

        this.isArrived = true;
        this.storage.set("isArrived", this.isArrived);
        this.remove_arrived = true;
        this.storage.set("remove_arrived", this.remove_arrived);
        this.eventProvider.ApprovedArrival(true, this.notify_ID);
        this.startTimer();
        this.isPiked = false;

        this.storage.set("isPiked", this.isPiked);
        this.Arrined = true;
        var currentdate = new Date();
        var datetime = this.paddNumber(currentdate.getMonth() + 1, "00") + "-" + this.paddNumber(currentdate.getDate(), "00") + "-" + currentdate.getFullYear() + " @ " + this.paddNumber((currentdate.getHours() + 24) % 12 || 12, "00") + ":" + ("0" + currentdate.getMinutes()).slice(-2) + " " + (currentdate.getHours() > 11 ? "PM" : "AM");
        this.pickArrived = datetime;
        this.storage.set("pickArrived", this.pickArrived);
    }

    driveToPickup() {
        this.isArrived = true;
        this.storage.set("isArrived", this.isArrived);
        this.remove_arrived = false;
        this.storage.set("remove_arrived", this.remove_arrived);
    }


    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--; this.timeOver = false;
            } else {
                clearInterval(this.interval); this.timeOver = true;
            }
        }, 1000);
    }

    moonTimer() {
        clearInterval(this.interval);
    }


    async OpenInfo() {
        const obj = {
            info: this.bull, accepted: this.pickArrived, arrived: this.isDrop,
            distance: this.dProvider.distance2,
        };
        const myAlert2 = await this.modalCtrl.create({ component: TripinfoPage, componentProps: obj, });
        await myAlert2.present();
        await myAlert2.onDidDismiss().then((data) => {


            if (data.data == null) { //this.onChange(data); //this.ReturnHome(); 
            } else {
                this.onChange(data); // this.ReturnHome(); // this.onChanger(data);
            }

        });
    }


    ReturnHome() {
        this.platform.backButton.subscribe(() => {
            navigator["app"].exitApp();
        });
    }

    call() {
       
        window.open("tel:" +
            this.customerPhone);
    }



    clearConnection() {

        let customer = firebase.database().ref(`Customer/${this.notify_ID}`);
        customer.remove().then(() => {
            this.pop.hasPicked = false;
            this.hasNotPicked = true;
            this.isPickedDone = false;

            this.storage.set("hasNotPicked", this.hasNotPicked);
            this.storage.set("pop.hasPicked", this.pop.hasPicked);
        })

        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe()
        }
    }

    // showHelp(){
    // this.pop.alertMe('PLEASE MAKE SURE YOU HAVE GOOGLE MAPS INSTALLED ON
    // YOUR DEVICE.Click on start navigation, to drive to client. ') // }

    async onChanger(e) {
        const alert = await this.alert.create({
            message: 'A charge Of $5 Will be Incurred',
            buttons: [{
                text: 'Okay',
                role: 'cancel',
                handler: () => {

                    let charge = 5
                    let r;
                    this.ph.getUserProfil().child(this.ph.id).on('child_added', userProfileSnapshot => {
                        r = userProfileSnapshot.val().credits
                        console.log(r)
                    })
                    let cred;

                    this.ph.getOtherProfile().child(this.customeID).child('userInfo').on('value', snapshot => {
                        cred = snapshot.val().credits
                    })
                    this.HideFunk();
                    let yu = e;

                    var currentdate = new Date();

                    var datetime =
                        (this.paddNumber(currentdate.getMonth() + 1, "00")) +
                        "-" +
                        (this.paddNumber(currentdate.getDate(), "00")) +
                        "-" +
                        currentdate.getFullYear() +
                        " @ " +
                        this.paddNumber(((currentdate.getHours() + 24) % 12 || 12), "00") +
                        ":" +
                        ('0' + currentdate.getMinutes()).slice(-2) +
                        " " +
                        (currentdate.getHours() > 11 ? 'PM' : 'AM')
                    if (this.ph.name && datetime && this.myGcode.locationName && this.destination && this.dProvider.price && yu)
                        this.ph.Cancelled(this.client_Name, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => {
                            this.timeOver = false
                            let m

                            if (r) {
                                let h = r;
                                m = h - 5;
                                this.ph.UpdateCredits(m);
                            } else {
                                this.ph.UpdateCredits(-5);
                            }


                            let g;


                            if (cred) {
                                g = cred + 5
                                console.log(cred)
                                this.ph.UpdateRiderCredits(g, this.customeID);
                                this.ph.getOtherProfile().child(this.customeID).child('userInfo').off('value')
                            } else {
                                this.ph.UpdateRiderCredits(5, this.customeID);
                                this.ph.getOtherProfile().child(this.customeID).child('userInfo').off('value')
                            }

                            this.ph.CancelledMe2(this.data.Client_username, this.customeID, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => { })
                            this.ph.CancelledMe(this.data.Client_username, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => { })
                            this.ph.getCancelledProfile().child('Cancelled/documents').on('value', snapshot => {
                                this.items = [];
                                console.log(snapshot.val());
                                this.currentCar = null;
                                snapshot.forEach(snap => {
                                    console.log(snap.val());
                                    if (snap.val().type == 'Driver')
                                        this.items.push({
                                            key: snap.key,
                                            text: snap.val().title,
                                            type: snap.val().type,
                                            status: snap.val().status
                                        });
                                    console.log(snap.val())
                                    return false
                                });
                            });
                        })
                    console.log(this.ph.name, datetime, this.myGcode.locationName, this.destination, this.dProvider.price, yu)

                }
            },

            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {

                }
            },
            ],
            backdropDismiss: false
        });
        alert.present();


    }


    async RiderNoSHow() {
        const alert = await this.alert.create({
            message: 'Are you sure you want to cancel?',
            buttons: [{
                text: 'Okay',
                role: 'cancel',
                handler: () => {

                    let charge = 5
                    let r;
                    this.ph.getUserProfil().child(this.ph.id).on('child_added', userProfileSnapshot => {
                        r = userProfileSnapshot.val().credits
                        console.log(r)
                    })
                    let cred;

                    this.ph.getOtherProfile().child(this.customeID).child('userInfo').on('value', snapshot => {
                        cred = snapshot.val().credits
                    })
                    this.HideFunk();
                    let yu = 'Rider No Show';

                    var currentdate = new Date();

                    var datetime =
                        (this.paddNumber(currentdate.getMonth() + 1, "00")) +
                        "-" +
                        (this.paddNumber(currentdate.getDate(), "00")) +
                        "-" +
                        currentdate.getFullYear() +
                        " @ " +
                        this.paddNumber(((currentdate.getHours() + 24) % 12 || 12), "00") +
                        ":" +
                        ('0' + currentdate.getMinutes()).slice(-2) +
                        " " +
                        (currentdate.getHours() > 11 ? 'PM' : 'AM')

                    if (this.ph.name && datetime && this.myGcode.locationName && this.destination && this.dProvider.price && yu)
                        this.ph.Cancelled(this.data.Client_username, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => {

                            this.timeOver = false
                            let m
                            if (r) {
                                let h = r
                                m = h + 5
                                this.ph.UpdateCredits(m);
                            } else {
                                this.ph.UpdateCredits(5);
                            }




                            let g;




                            if (cred) {
                                g = cred - 5

                                console.log(cred)
                                this.ph.UpdateRiderCredits(g, this.customeID);
                                this.ph.getOtherProfile().child(this.customeID).child('userInfo').off('value')
                            } else {
                                this.ph.UpdateRiderCredits(-5, this.customeID);
                                this.ph.getOtherProfile().child(this.customeID).child('userInfo').off('value')
                            }




                            this.ph.CancelledMe2(this.data.Client_username, this.customeID, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => { })
                            this.ph.CancelledMe(this.data.Client_username, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => { })
                            this.ph.getCancelledProfile().child('Cancelled/documents').on('value', snapshot => {
                                this.items = [];
                                console.log(snapshot.val());
                                this.currentCar = null;
                                snapshot.forEach(snap => {
                                    console.log(snap.val());
                                    if (snap.val().type == 'Driver')
                                        this.items.push({
                                            key: snap.key,
                                            text: snap.val().title,
                                            type: snap.val().type,
                                            status: snap.val().status
                                        });
                                    console.log(snap.val())
                                    return false
                                });
                            });
                        })
                    console.log(this.ph.name, datetime, this.myGcode.locationName, this.destination, this.dProvider.price, yu)

                }
            },

            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {

                }
            },
            ],
            backdropDismiss: false
        });
        alert.present();


    }

    paddNumber(number,
        paddingValue) {
        return String(paddingValue +
            number).slice(-paddingValue.length);
    }

    onChange(e) {

        this.HideFunk();
        let yu = "Wrong Trip";
        let charge = 0

        var currentdate = new Date();

        var datetime =
            (this.paddNumber(currentdate.getMonth() + 1, "00")) +
            "-" +
            (this.paddNumber(currentdate.getDate(), "00")) +
            "-" +
            currentdate.getFullYear() +
            " @ " +
            this.paddNumber(((currentdate.getHours() + 24) % 12 || 12), "00") +
            ":" +
            ('0' + currentdate.getMinutes()).slice(-2) +
            " " +
            (currentdate.getHours() > 11 ? 'PM' : 'AM')
        if (this.ph.name && datetime && this.myGcode.locationName && this.destination && this.dProvider.price && yu)
            this.ph.Cancelled(this.data.Client_username, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => {
                // this.ph.UpdateCredits(5);
                this.ph.CancelledMe(this.data.Client_username, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => {
                    this.ph.CancelledMe2(this.data.Client_username, this.customeID, this.ph.name, datetime, this.myGcode.locationName, this.destination, this.ridePrice, yu, charge).then(() => { })
                })
                this.ph.getCancelledProfile().child('Cancelled/documents').on('value', snapshot => {
                    this.items = [];
                    console.log(snapshot.val());
                    this.currentCar = null;
                    snapshot.forEach(snap => {
                        console.log(snap.val());
                        if (snap.val().type == 'Driver')
                            this.items.push({
                                key: snap.key,
                                text: snap.val().title,
                                type: snap.val().type,
                                status: snap.val().status
                            });
                        console.log(snap.val())
                        return false
                    });
                });
            })
        console.log(this.ph.name, datetime, this.myGcode.locationName, this.destination, this.dProvider.price, yu)


    }


    Arrived() {
        if (this.platform.is("cordova")) {
            this.sendPush(this.customerID, "Driver has arrived");
        }
        else if (this.platform.is("desktop")) {
            this.pop.presentToast("Driver has arrived");
            console.log("NOTIFCATION IN DESKTOP");
        }
        else if (this.platform.is("mobileweb")) {
            this.pop.presentToast("Driver has arrived");
            console.log("NOTIFCATION IN mobileweb");

        }
        this.hasArrived = false;
        this.eventProvider.ApprovedArrival(true, this.notify_ID);
    }

    sendPush(id, message) {

        let notificationObj: any = {
            include_player_ids: [id], contents: {
                en: message
            },
        }; this.One.postNotification(notificationObj).then(
            (good) => {
                console.log("NOTIFICATIONS SENT");

            }, (error) => {
                console.log("ERROR SENDING NOTIFICATIONS " + error);
                //this.pop.presentToast("Push notification failed");
            });
    }

    showFilters() {
        this.isNotDestinyOption = this.isNotDestinyOption ? false : true;
        this.scope = false; this.radius = false;
    }

    Scope() {

        this.scope = true;
        var polyOptions = {
            strokeWeight: 0,
            fillOpacity: 0.45,
            editable: true
        };
        // Creates a drawing manager attached to the map that allows the user to draw
        // markers, lines, and shapes.
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['polygon']
            },
            markerOptions: {
                draggable: true
            },
            polylineOptions: {
                editable: true
            },
            polygonOptions: polyOptions,
            map: this.thatmap
        });

        google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (e) => {
            if (e.type != google.maps.drawing.OverlayType.MARKER) {
                // Switch back to non-drawing mode after drawing a shape.
                this.drawingManager.setDrawingMode(null);
            }
        });


    }

    Radius() {
        this.radius = true;
        var polyOptions = {
            strokeWeight: 0,
            fillOpacity: 0.45,
            editable: true
        };
        // Creates a drawing manager attached to the map that allows the user to draw
        // markers, lines, and shapes.
        this.drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.CIRCLE,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['circle']
            },
            markerOptions: {
                draggable: true
            },
            polylineOptions: {
                editable: true
            },
            // rectangleOptions: polyOptions,
            // circleOptions: polyOptions,
            polygonOptions: polyOptions,
            map: this.thatmap
        });

        google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (e) => {
            if (e.type != google.maps.drawing.OverlayType.MARKER) {
                // Switch back to non-drawing mode after drawing a shape.
                this.drawingManager.setDrawingMode(null);
            }
        });

    }

    pauseRide() {
        this.isPaused = true;
        this.eventProvider.pauseTrip(true, this.notify_ID);
        this.pausingCountdown()

        this.alerting("Trip Paused", "You have paused the ongoing trip\nPlease note there will be additional cost charged per minute whiles the trip is paused", "warning")
        this.storage.set("isPaused", this.isPaused);
    }

    resumeRide() {
        this.isPaused = false;
        this.myVal.unsubscribe();
        this.eventProvider.pauseTrip(false, this.notify_ID);
        this.alerting("Trip Resumed", "You  have resume the trip \nEnjoy the ride", "success")
        this.storage.set("isPaused", this.isPaused);
    }

    alerting(title, msg, icon) {
        Swal.fire({
            title: title,
            text: msg,
            icon: icon,
            heightAuto: false
        })

    }



    Pickup() {
        this.locationTracker.isPickedUp = false;
        this.eventProvider.ApprovePickup(true, this.notify_ID);
        //this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher);
        this.pop.hasPicked = true;
        this.isPickedDone = true;
        this.moonTimer()
        // this.hasNotPicked = false;
        if (this.platform.is("cordova")) {
            this.sendPush(this.customerID, "Driver has started trip");
        }
        else if (this.platform.is("desktop")) {
            this.pop.presentToast("Driver has started trip");
            console.log("NOTIFCATION IN DESKTOP");
        }
        else if (this.platform.is("mobileweb")) {
            this.pop.presentToast("Driver has started trip");
            console.log("NOTIFCATION IN mobileweb");

        }

        // this.locationTracker.hasTransactionEnded = false
        // clearTimeout(this.locationTracker.tracking_timeout)
        this.locationTracker.ClearDetection = true;
        //clearInterval(this.locationTracker.detectCarChange)
        this.myGcode.Reverse_Geocode(this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.locationTracker.map1, false)
        
        if (this.platform.is('cordova')) {
            console.log('this detiny ' + this.destination)

            this.geocoder.geocode({ 'address': this.destination }, (results, status) => {
                if (status == 'OK') {
                    var position = results[0].geometry.location
                    let lat = position.lat();
                    let lng = position.lng();


                    let urPos = new google.maps.LatLng(lat, lng);
                    let uLOC = new google.maps.LatLng(this.locationTracker.driver_lat, this.locationTracker.driver_lng);

                    console.log(lat, lng);
                    this.showLoadRefresh();
                    this.locationTracker.setMarkersDestination(lat, lng, this.notify_ID);
                    this.dProvider.calcDestRoute(this.name, uLOC, urPos, this.destination, this.notify_ID);

                }


            })
        } else {
            let urPos = new google.maps.LatLng(5.4975394, 7.5029374);
            let uLOC = new google.maps.LatLng(this.locationTracker.driver_lat, this.locationTracker.driver_lng);
            this.dProvider.calcDestRoute(this.name, uLOC, urPos, this.destination, this.notify_ID);
            // this.pop.hideLoader();
        }
    }

    async Drop() {
        this.removeStorage()

        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe()
        }

        let urPos = new google.maps.LatLng(this.locationTracker.myLat, this.locationTracker.myLng);
        let uLOC = new google.maps.LatLng(this.locationTracker.driver_lat, this.locationTracker.driver_lng);


        if (this.platform.is("cordova")) {
            console.log("this detiny " + this.destination);
            let latlng = {
                lat: this.locationTracker.myLat,
                lng: this.locationTracker.myLng,
            };
            this.geocoder.geocode({ location: latlng },
                (results, status) => {
                    if (status === "OK") {
                        if (results[0]) {
                            let desty = results[0].formatted_address;
                            this.dProvider.calcPrice(uLOC, urPos,
                                desty, this.notify_ID);
                        } else { }
                    } else {
                        // window.alert('Geocoderfailed due to: ' + status);
                    }
                });
        }
        let obj = {
            amount: this.data.Client_price,
            pauseCost: this.pauseCost || 0,
            payment_method: 0,
            client_name: this.name
        };
        const payme = await this.modalCtrl.create({
            component: PaymentpagePage, componentProps: obj,
        });
        await payme.present();
        await payme.onDidDismiss().then(() => {
            this.Finalize();
            this.pop.showLoader("Please Wait...");
        });
    }


    HideFunk() {
        this.canListen = true;
        this.c_dropped = true;
        this.c_picked = true;
        this.c_ended = true;
        this.c_added = true;
        this.hasTimed = true;
        this.shortMap = true;

        this.storage.set("shortMap", this.shortMap);
        //for toggline
        this.defaultMap;

        this.storage.set("canListen", this.canListen);



        this.locationTracker.isPickedUp = false;
        this.locationTracker.isDropped = false;

        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe()
        }
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_removed')
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_changed')
        this.ph.getUserAsClientInfo(this.notify_ID).off('child_added')
        this.ph.getUserAsClientInfo(this.notify_ID).off('value')
        this.locationTracker.hasCompleted = true;
        this.c_complete = true;
        this.clearConnection();
        this.clearAllNow();
        this.removeStorage()
    }

    clearAllNow() {

        this.removeStorage()
        this.hasArrived = true;
        this.locationTracker.routeNumber = 0;
        this.timeLeft = 120;
        this.hour = 1;
        this.locationTracker.ClearDetection = true;
        this.jkl = true;
        this.locationTracker.isDestination = false;
        this.canIncur = false;
        this.timeOver = false;
        this.isArrived = false;
        this.storage.set("isArrived", this.isArrived);
        this.storage.set("jkl", this.jkl);


        this.hasPooled2 = true;
        this.hasPooled = true;
        this.clientClrCheck = false;
        this.PoolClrCheck = false;
        this.canEnd = true;
        this.canEnd2 = true;
        this.isInBooking = true;
        this.hasDone = true;
        this.hasEnded = true;
        this.storage.set("hasEnded", this.hasEnded);
        this.shortMap = true; //this is for toggle on hompage
        this.storage.set("shortMap", this.shortMap);
        this.defaultMap;
        this.canShowOther = false;
        this.itsOver = false;
        this.locationTracker.driver = false;
        this.OneSignal.isInDeepSh_t = false;
        if (this.platform.is("cordova")) {
            this.locationTracker.map1.setClickable(true);
        }
        this.hasNotPicked = true;
        this.storage.set("hasNotPicked", this.hasNotPicked);

        clearTimeout(this.locationTracker.tracking_timeout);
        this.locationTracker.canTrack_ = false;
        this.locationTracker.hasTransactionEnded = false;

        this.pop.hasPicked = false;

        this.storage.set("pop.hasPicked", this.pop.hasPicked);


        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe()
        }


        this.ph.getUserProfile().once("value", (userProfileSnapshot) => {
            this.earnings = Math.floor(userProfileSnapshot.val().earnings);
        });

        this.isArrived = false;
        this.storage.set("isArrived", this.isArrived);
        this.locationTracker.hasCompleted = true;

        this.platform.ready().then(() => {

            timer(1000).subscribe(() => {

                this.StartListeningForChanges(this.notify_ID);
                this.StartTracker();

                this.locationTracker.refreshForChangesRemove();
                this.isUser = true;
                this.isPassengerCleared = true;

            });

            this.subscription = this.platform.backButton.subscribe(() => {
                // navigator["app"].exitApp();
            });

            this.subscription.unsubscribe();
            
                this.OneSignal.UpdateInfo(this.locationTracker.driver_lat,
                    this.locationTracker.driver_lng, this.ph.carType);
            
        });
    }

    hasCompletedRide(driverSnap) {
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe()
        }
        if
            (this.c_complete) {
            this.showLoadRefresh();
            this.ph.getUserProfile()
                .child("favorite").on("value", (us) => {
                    console.log(us.val()); if
                        (us.val()) if (us.val().favoriteSeek) {

                        }
                    this.ph.getUserProfile().child("favorite").off("value");
                });
            this.ph
                .getUserProfile().child("tipper").on("value", (us) => {
                    if (us.val()) if
                        (us.val().tipped != null) {
                        this.totalTipped = us.val().tipped;
                        console.log(this.totalTipped); if (this.eventProvider.historyKey != null) {
                            this.eventProvider.UpdateTip(this.totalTipped).then(() => {
                                this.ph.getUserProfile().child("tipper").remove();
                                //this.pop.presentToast('You Were Tipped.') 
                                //this.ph.getUserProfile().child('tipper').off('value');
                            });
                        }
                    }
                });
            this.ph
                    .getUserProfile().child("rater").on("value", (us) => {
                        console.log(us.val()); if (us.val()) if (us.val().rating != null) {
                            this.ph.getUserProfile().child("rater").remove();
                            //this.showMe3(us.val().rate); // this.pop.presentToast('You were Tipped')
                        } this.ph.getUserProfile().child("rater").off("value");
                    }); // this.pop.loading.dismiss(); 

            var currentdate = new Date(); var datetime =
                this.paddNumber(currentdate.getMonth() + 1, "00") + "-" +
                this.paddNumber(currentdate.getDate(), "00") + "-" +
                currentdate.getFullYear() + " @ " +
                this.paddNumber((currentdate.getHours() + 24) % 12 || 12, "00") + ":" +
                ("0" + currentdate.getMinutes()).slice(-2) + " " + (currentdate.getHours()
                    > 11 ? "PM" : "AM"); // this.showLoadRefresh() 
            this.ph
                .UpdateEarnings(driverSnap.Client_realPrice + this.totalTipped || 0)
                .then(() => {
                    let toll = driverSnap.Client_toll || [];
                    this.eventProvider
                        .createHistory(driverSnap.Client_realPrice, driverSnap.Client_username,
                            driverSnap.Client_price, datetime, driverSnap.Client_locationName,
                            driverSnap.Client_destinationName, currentdate.getDay(),
                            driverSnap.Client_Surcharges || 0, toll,
                            driverSnap.Client_OutOfStateCharge, driverSnap.Client_ID, this.totalTipped
                        ).then(() => {
                            this.router.navigate(["rate", {
                                eventId:
                                    driverSnap.Client_ID, name: driverSnap.Client_username, lat:
                                    this.locationTracker.driver_lat, lng: this.locationTracker.driver_lng, cartype:
                                    this.ph.carType, positive_Rating: driverSnap.Client_Positive_rating,
                                negative_Rating: driverSnap.Client_Negative_rating, price:
                                    driverSnap.Client_price - driverSnap.Client_DriverSurharge, time:
                                    this.dProvider.time2, distance: this.dProvider.distance,
                            },]).then(() => {
                                this.locationTracker.map1.clear().then(() => {
                                    console.log("CLEARED MAP AFTER RATING....")
                                    
                                    this.locationTracker.yellow_markersArray = [];
                                    this.locationTracker.driver_markersArray = [];
                                    this.locationTracker.client_markersArray = [];
                                    this.locationTracker.flag_markersArray = [];
                                });
                                // this.notify_ID = null;
                                this.HideFunk();
                                this.ph.getUserProfile().child("tipper").remove();
                                this.Arrined = false;
                                //this.isPiked = true;
                                this.timeOver = false;
                                //this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher)
                            });
                        });
                }); this.c_complete = false;
        }
    }

    UserChanged(driverSnap) {
        if
            (driverSnap.Client_hasPaid) {

            this.pop.hideLoader();
        } if (driverSnap.Pool_ended) {
            this.pop.presentToast("Passenger Has Cancelled Request");
        } if
            (driverSnap.Client_PickedUp && this.c_picked) {
            this.c_picked = false;
            this.pop.hasPicked = true;

            this.storage.set("pop.hasPicked", this.pop.hasPicked);

        }
    }


    UserRemoved() {
        this.showLoadRefresh();
        this.HideFunk();
         }

    async showLoadRefresh() {
        const loading = await this.loadingCtrl.create({});
        await loading.present().then(() => {
            let myTimeout = setTimeout(() => {
                clearTimeout(myTimeout); loading.dismiss();
            }, 300);
        });
    }

    NewClientFound(client_locationName, location, client_name, picture, destinationName, rate,
        ratingText, price) {
        this.name = client_name;
        this.picture = picture;
        this.location = client_locationName;
        this.destination = destinationName;
        this.rating = rate;
        this.ratingText = ratingText;
        this.ridePrice = price;
        this.isInBooking = false;
        //this.locationTracker.setMarkers(location) 

        this.storage.set("name", this.name);
        this.storage.set("destination", this.destination);

        let urPos = new google.maps.LatLng(location[0], location[1]);
        let uLOC = new google.maps.LatLng(this.locationTracker.driver_lat, this.locationTracker.driver_lng);
        // console.log(price)
        this.userLat = location[0];
        this.userLng = location[1];
        this.locationTracker.userLat = location[0];
        this.locationTracker.userLng = location[1];
        this.locationTracker.D_lat = location[0];
        this.locationTracker.D_lat = location[1];
        this.showLoadRefresh();

        this.dProvider.calcRoute(this.name, uLOC, urPos,
            this.location, false);

        this.myGcode.Reverse_Geocode(
            this.locationTracker.driver_lat, this.locationTracker.driver_lng,
            this.locationTracker.map1, false);

    }




    gotoMap() {
        if
            (this.platform.is("android"))
            console.log("MAP IN ANDROID");

        let destination = this.locationTracker.driver_lat + "," + this.locationTracker.driver_lng;
        window.open("https://www.google.com/maps/search/?api=1&query=" + destination, '_system');
        if (this.platform.is("ios"))
            console.log("MAP IN IOS");

        let destination1 = this.locationTracker.driver_lat + "," + this.locationTracker.driver_lng; window.open(
            "https://www.google.com/maps/search/?api=1&query=" + destination1, '_system');

        if (this.platform.is("mobileweb"))
            console.log("MAP IN MOBILE");


        let destination2 = this.locationTracker.driver_lat + "," +
            this.locationTracker.driver_lng; window.open(
                "https://www.google.com/maps/search/?api=1&query=" + destination2, '_system');

    }

    gotoDestination() {
        this.pop.showLoader(this.lp.translate()[0].e10);
        console.log("the result..........");
        this.geocoder.geocode({
            address:
                this.destination
        }, (results, status) => {
            if (status == "OK") {
                var position = results[0].geometry.location;
                let lat = position.lat();
                let lng = position.lng();
                console.log("This is the result..........");
                console.log("DESTINATION LAT && LNG.........." + lat, lng);

                // this.locationTracker.driver_lat = 5.614818
                // this.locationTracker.driver_lng = - 0.205874,
                this.pop.hideLoader();
                if (this.platform.is("android")) {

                    let destination = this.locationTracker.driver_lat + "," + this.locationTracker.driver_lng;
                    window.open(
                        "https://www.google.com/maps/search/?api=1&query=" + destination, '_system');
                } if
                    (this.platform.is("ios")) {
                    let destination = this.locationTracker.driver_lat + "," + this.locationTracker.driver_lng; window.open(
                        "https://www.google.com/maps/search/?api=1&query=" + destination, '_system');
                } if
                    (this.platform.is("mobileweb")) {
                    let destination = this.locationTracker.driver_lat + "," +
                        this.locationTracker.driver_lng; window.open(
                            "https://www.google.com/maps/search/?api=1&query=" + destination, '_system');
                }
            }
            else { this.pop.showPimp(this.lp.translate()[0].f1); }
        });
    }



    HideFunc() {
        this.canListen = true;
        this.c_dropped = true;
        this.c_picked = true;
        this.c_ended = true;
        this.c_added = true;
        this.c_complete = true;

        this.storage.set("canListen", this.canListen);
    }


    RejectJob() {

        this.canStart = false;
        this.storage.set("canStart", this.canStart);
        this.hasEnded = true;
        this.storage.set("hasEnded", this.hasEnded);
        this.shortMap = true; //this is for toggle on hompage
        this.storage.set("shortMap", this.shortMap);
        this.defaultMap;
        this.isPassengerCleared = false;

        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe()
        }
        this.platform.ready().then(() => {
            if (this.notify_ID)
                this.ph.getUserAsClientInfo(this.notify_ID).remove();
            timer(1200).subscribe(() => {

                this.canStart = true;
                this.jkl = true;

                this.storage.set("canStart", this.canStart);
                this.storage.set("jkl", this.jkl);

            });

            this.OneSignal.UpdateInfo(
                this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.ph.carType);
        });
        if (this.myAlert) {
            this.myAlert.dismiss();
        }
    }


    AcceptJob() {
        this.called = true;
        this.canListen = false;
        this.called_2 = true;

        this.storage.set("canListen", this.canListen);
        //this.watchPositionSubscription.clearWatch(this.mapTracker);
        this.watch.unsubscribe()
        this.dropped2 = true;
        this.done = true;
        this.connected = true;


        if (this.driverLoc != null) {


            this.locationTracker.hasTransactionEnded = true;
            this.locationTracker.canTrack_ = true;

            this.platform.ready().then(() => {
                this.platform.backButton.subscribe(() => this.pop.presentToast(this.lp.translate()[0].e4));
            });

            this.OneSignal.isInDeepSh_t = true;


            if (!this.ph.rating) {
                this.ph.rateText = "";
                this.ph.rating = 0;
            }

            if (!this.platform.is("cordova")) {
                console.log("removed now" + this.first_name, this.picture, this.notify_ID, 5.4975394, 7.5029374, this.myGcode.locationName, this.ph.plate, this.ph.seat, this.ph.carType, this.ph.rating, this.phonenumber);

                this.createUserInformation(this.first_name, this.picture, this.notify_ID, 5.4975394, 7.5029374, this.myGcode.locationName, 90, this.ph.plate, this.ph.seat, this.ph.carType, this.rating_positive, this.rating_negative, this.ph.rateText, this.phonenumber);
            } else {

                console.log("removed now"
                    + this.first_name, this.picture, this.notify_ID, this.locationTracker.driver_lat,
                    this.locationTracker.driver_lng, this.myGcode.locationName, this.ph.plate,
                    this.ph.carType, this.ph.rating, this.phonenumber);

                this.createUserInformation(this.first_name, this.picture, this.notify_ID,
                    this.locationTracker.driver_lat, this.locationTracker.driver_lng, this.myGcode.locationName, this.locationTracker.driver_bearing,
                    this.ph.plate, this.ph.seat, this.ph.carType, this.rating_positive,
                    this.rating_negative, this.ph.rateText, this.phonenumber);
            }

        }
    }



    createUserInformation(name: string,
        picture: any, id: any, lat: number, lng: number, locationName: any, driver_bearing: any, plate: any, seats: number, carType: any, positive: any, negative: any, rateText: any, number: number) {

        this.eventProvider
            .PushUserDetails(name, picture, id, lat, lng, locationName, plate,
                carType, positive, negative, rateText, number, this.notify_ID, driver_bearing).then(() => {
                    this.locationTracker.map1.clear().then(() => {
                        this.locationTracker.yellow_markersArray = [];
                        this.locationTracker.driver_markersArray = [];
                        this.locationTracker.client_markersArray = [];
                        this.locationTracker.flag_markersArray = [];

                        this.showLoadRefresh();
                        //commenting all remove out
                        this.locationTracker.hasCompleted = false;
                        this.locationTracker.setMarkers(this.notify_ID, this.passenger_Lat,
                            this.passenger_Lng);
                    });
                });
    }



    Finalize() {
        this.removeStorage()
        if (this.platform.is("cordova")) {
            this.sendPush(this.customerID, "Trip Ended");
        }
        else if (this.platform.is("desktop")) {
            this.pop.presentToast("Trip Ended");

        }
        else if (this.platform.is("mobileweb")) {
            this.pop.presentToast("Trip Ended");


        }
        if (this.locationTracker.watch_draw_poly) {

            this.locationTracker.watch_draw_poly.unsubscribe();
        }
        if (this.locationTracker.watch2) {

            this.locationTracker.watch2.unsubscribe();
        }

        if (this.watch) {

            this.watch.unsubscribe();
        }
        clearTimeout(this.locationTracker.tracking_timeout);
        this.locationTracker.canTrack_ = false;
        this.locationTracker.hasTransactionEnded = false;
        this.locationTracker.hasCompleted = true;
        this.eventProvider.ApproveDrop(true, this.notify_ID).then(() => {
            this.isPassengerCleared = false;
            this.c_dropped = false;
            this.pop.hideLoader();

            // this.locationTracker.watchPositionSubscription.clearWatch(this.locationTracker.goto_passenger_watcher



            this.ph.getUserAsClientInfo(this.notify_ID).off("child_removed");
            this.ph.getUserAsClientInfo(this.notify_ID).off("child_changed");
            this.ph.getUserAsClientInfo(this.notify_ID).off("child_added");

            this.hasCompletedRide(this.data); // this.clearDuty();
            this.locationTracker.hasTransactionEnded = false;
            this.OneSignal.isInDeepSh_t = false;
            this.c_ended = false;
            this.canEnd = false;
        });
    }



    ConfirmDrop() {
        this.Drop();
        if (this.locationTracker.watch_draw_poly) {
            this.locationTracker.watch_draw_poly.unsubscribe()
        }
        var currentdate = new Date();
        var datetime = this.paddNumber(currentdate.getMonth() + 1, "00") + "-" +
            this.paddNumber(currentdate.getDate(), "00") + "-" +
            currentdate.getFullYear() + " @ " +
            this.paddNumber((currentdate.getHours() + 24) % 12 || 12, "00") + ":" +
            ("0" + currentdate.getMinutes()).slice(-2) + " " + (currentdate.getHours()
                > 11 ? "PM" : "AM");
        this.isDrop = datetime;
        this.storage.set("isDrop", this.isDrop);

        this.removeStorage()
    }

    ConfirmPickup() {
        this.isPiked = true;
        this.storage.set("isPiked", this.isPiked);
        this.Pickup()
    }

   




    StartListeningForChanges(id) {
        console.log("<><><><App has started listening <><><><", this.canListen, id)

        if (this.canListen) {
           
                this.notify_ID = id;


                if (this.settings.current_ID) {
                    this.storage.set(`currentUserId`, this.notify_ID).then(() => {

                    });
                }

                this.eventProvider
                    .getChatList(this.notify_ID).on("child_added", (snapshot) => {
                        if
                            (this.canStart || this.canStart == null) {
                            if (snapshot.val().Client_Message) {
                                this.notification = true;
                                this.pop.presentToast("New Message From Client");
                                this.vibration.vibrate(3000);
                                this.audioPlayer.play();
                            }
                        }
                    });


                this.ph.getUserAsClientInfo(this.notify_ID).on("child_added", () => {
                    console.log("------>>> ANOTHER CLIENT ADDED --->>>.....", this.notify_ID);

                    this.ph.getUserAsClientInfo(this.notify_ID).once("value", (driverSnap) => {

                        this.bull = driverSnap.val().client;
                        this.storage.set("bull", this.bull);


                        this.customeID = driverSnap.val().client.Client_ID;
                        this.storage.set("customeID", this.customeID);

                        if (!driverSnap.val().Client_Driver_Reject) {
                            if (this.jkl) {
                                if (driverSnap.val().client.Client_username) {

                                    this.Client_Added(driverSnap.val().client, driverSnap.val().client.Client_username);
                                    this.hasEnded = false;
                                    this.storage.set("hasEnded", this.hasEnded);
                                    this.shortMap = false; //this is for toggle on hompage
                                    this.storage.set("shortMap", this.shortMap);

                                    this.myListening.unsubscribe()
                                } else {
                                    this.ph.getUserAsClientInfo(this.notify_ID).remove();
                                }
                                this.jkl = false;
                                this.storage.set("jkl", this.jkl);
                            }
                        }



                        if ((this.canStart && driverSnap.val().client.Client_location) || (this.canStart == null && driverSnap.val().client.Client_location)) {
                            this.locationTracker.D_lat = driverSnap.val().client.Client_location[0];
                            this.locationTracker.D_lat = driverSnap.val().client.Client_location[1];
                        }


                        this.ph.getUserAsClientInfo(this.notify_ID).off("value");
                    });
                });
                this.ph.getUserAsClientInfo(this.notify_ID).on("child_changed", () => {
                    this.ph.getUserAsClientInfo(this.notify_ID).once("value", (driverSnap) => {

                        if (driverSnap.val().client.Client_location != undefined) {

                            if ((this.canStart && driverSnap.val().client.Client_location[0]) || (this.canStart == null && driverSnap.val().client.Client_location)) {

                                this.data = driverSnap.val().client;
                                this.customeID = driverSnap.val().client.Client_ID;
                                this.client_Name = this.data.Client_username;
                                this.UserChanged(driverSnap.val().client);
                                this.locationTracker.D_lat = driverSnap.val().client.Client_location[0];
                                this.locationTracker.D_lat = driverSnap.val().client.Client_location[1];


                                this.newDestinationStop = this.data.Client_new_destinationName


                                this.storage.set("data", this.data);
                                this.storage.set("newDestinationStop", this.newDestinationStop);
                                this.storage.set("customeID", this.customeID);

                                this.ph.getUserAsClientInfo(this.notify_ID).off("value");


                            }
                        }
                    });
                });
                this.ph.getUserAsClientInfo(this.notify_ID).on("child_removed", () => {

                    if
                        (this.canStart || this.canStart == null) {
                        if (this.isPassengerCleared) {

                            this.UserRemoved();
                            if (this.isUser)
                                //this.pop.showPimp("Passenger Ended The Trip");
                                this.myListening.unsubscribe()
                        }
                        else {
                            if (this.myAlert) {
                                this.RejectJob();
                                this.myAlert = false;
                                // this.myAlert.dismiss();
                            }

                        }
                        this.ph.getUserAsClientInfo(this.notify_ID).off("value");
                    }

                });
                //  this.canListen = false;
                //  this.storage.set("canListen", this.canListen);

            
        }





    }






    async Client_Added(rp, f) {
        this.NewClientFound(
            rp.Client_locationName,
            rp.Client_location,
            rp.Client_username,
            rp.Client_picture,
            rp.Client_destinationName,
            rp.Client_Rating,
            rp.Client_RatingText,
            rp.Client_price);
        this.pauseTimer();
        this.rateUp = rp.Client_Positive_rating;
        this.rateDown = rp.Client_Negative_rating;
        console.log("CLIENT INFORMATION::", rp);
        console.log("PROVIDER TIME::", this.dProvider.time);
        console.log("DISTANCE::", this.dProvider.distance2);
        console.log("CHARGE::", rp.Client_price);
        console.log(rp.Client_locationName, rp.Client_destinationName);

        let obj =
        {
            info: f, loc: rp.Client_locationName, des: rp.Client_destinationName,
            charge: rp.Client_price, up: rp.Client_Positive_rating, down:
                rp.Client_Negative_rating, status: rp.Client_status, time:
                this.dProvider.time, distance: this.dProvider.distance2,
        };

        this.myAlert =
            await this.modalCtrl.create({
                component: AcceptPage, componentProps: obj,
            });

        await this.myAlert.present(); if (rp.Client_pold) {
            this.locationTracker.routeNumber = rp.Client_pold;
            console.log(rp.Client_pold);
        }
        if (this.platform.is("cordova"))
            this.vibration.vibrate(1000);
        this.audioPlayer.play();

        {
            await this.myAlert.onDidDismiss().then((data) => {

                if (data.data == 1) {
                    this.ph
                        .getUserAsClientInfo(this.notify_ID).once("value", (driverSnap) => {
                            this.driverLoc = rp.Client_location;
                            if (driverSnap.val() != null) {
                                this.AcceptJob();
                                this.canListen = false;
                                this.canStart = true;
                                this.storage.set("canStart", this.canStart);
                                this.storage.set("canListen", this.canListen);

                                this.passenger_Lat = rp.Client_location[0];
                                this.passenger_Lng = rp.Client_location[1];
                                this.rateUp = rp.Client_Positive_rating;
                                this.rateDown = rp.Client_Negative_rating;

                                this.mapSection = true;
                                this.canDO = true;
                                this.hideNews = true;
                                this.userHasPhone = true;
                                this.c_added = false;

                                this.customerPhone = rp.Client_phoneNumber;
                                this.destination = rp.Client_destinationName;
                                this.customerID = rp.Client_Notif;


                                this.storage.set("customerPhone", this.customerPhone);
                                this.storage.set("destination", this.destination);


                            } else {
                                this.pop.presentToast("You Lost the Job");
                                this.RejectJob();
                                this.canStart = false;
                                this.canListen = true;
                                this.storage.set("canStart", this.canStart);
                                this.storage.set("canListen", this.canListen);
                            }
                            this.ph.getUserAsClientInfo(this.notify_ID).off("value");
                        });
                }
                else {
                    // this.ph.Reject(this.notify_ID);
                    this.RejectJob();
                    this.canStart = false;
                    this.storage.set("canStart", this.canStart);

                    this.isUser = false;
                }
            });
            this.myAlert.present();
        }
    }




    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Share Trip',
            buttons: [{
                text: 'Share to Whatsapp',
                role: 'destructive',
                icon: 'logo-whatsapp',
                handler: () => {
                    this.whatsappShare()
                }
            }, {
                text: 'Share to Others',
                icon: 'share',
                handler: () => {
                    this.FaceShare()
                }
            }]
        });
        await actionSheet.present();
    }


    FaceShare() {

        let source: any = [this.locationTracker.driver_lat, this.locationTracker.driver_lng] // source lat,long

        let destination: any = [this.destination_lat,
        this.destination_lng] // dest lat,long

        let message =
            "Hi, i am going to " +
            destination +
            " from " + source;
        let subject = "My trip"
        let file = "https://www.google.com/maps/search/?api=1&query=" + destination;
        let link = "https://www.google.com/maps/search/?api=1&query=" + destination;
        this.share
            .share(message, subject, file, link)
            .then(() => { })
            .catch(() => { });
    }


    whatsappShare() {
        let source: any = [this.locationTracker.driver_lat, this.locationTracker.driver_lng] // source lat,long

        let destination: any = [this.destination_lat,
        this.destination_lng] // dest lat,long

        let message =
            "Hi, i am going to " +
            destination +
            "from " + source;
        let link = "https://www.google.com/maps/search/?api=1&query=" + destination;
        this.share
            .shareViaWhatsApp(message, null, link)
            .then(() => {

            })
            .catch((err) => {

            });
    }



}






