import { Injectable, Injector } from "@angular/core";
import { Platform } from "@ionic/angular";
declare var google;

@Injectable({
  providedIn: "root",
})
export class GeocoderService {
  public locationName: any;
  public lat: any;
  public lng: any;
  // tslint:disable-next-line: new-parens
  public geocoder: any = new google.maps.Geocoder();
  b;

  constructor(protected injector: Injector, public platform: Platform) { }

  Geocode(address) {
    // tslint:disable-next-line: object-literal-shorthand
    this.geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        const position = results[0].geometry.location;
        this.lat = position.lat();
        this.lng = position.lng();
      } else {
      }
    });
  }

  Reverse_Geocode(lat, lng, map, driverMode) {
    const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
    this.geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          this.locationName = results[0].formatted_address;
          console.log("Locaton comin this geocoder" + this.locationName);
        } else {
        }
      } else {
      }
    });
  }
}
