import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import {NavController, AlertController, Platform} from 'ionic-angular';
declare var navigator: any;
declare var Connection: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public pl:Platform,public ac: AlertController) {
this.checkNetwork();
  }
  checkNetwork() {
    this.pl.ready().then(() => {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
        let alert = this.ac.create({
            title: "Connection Status",
            subTitle: states[networkState],
            buttons: ["OK"]
        });
        alert.present();
    });
}
}
