import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lat: number = 0;
  long: number = 0;
  time:number = 0;

  constructor() { }
  async getGPS() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.long = coordinates.coords.longitude;
    this.time = coordinates.timestamp;
    console.log('Current position:', coordinates);
  }

  async openBrowser() {
    await Browser.open({ url: 'http://capacitorjs.com/' });
  };
}
