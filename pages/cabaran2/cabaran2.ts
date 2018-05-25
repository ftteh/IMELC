import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import {BillPage} from  '../bill/bill';

/**
 * Generated class for the Cabaran2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cabaran2',
  templateUrl: 'cabaran2.html',
})
export class Cabaran2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public a:AlertController) {
  }
  ab(){
    let alert = this.a.create({
      title: 'Submitted',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  go() {
    this.navCtrl.push(BillPage, {
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Cabaran2Page');
  }

}
