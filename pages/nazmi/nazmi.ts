import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-nazmi',
  templateUrl: 'nazmi.html'
})
export class NazmiPage {

  constructor(public navCtrl: NavController,public a:AlertController) {

  }
  ab(){
    let alert = this.a.create({
      title: 'Submitted',
      buttons: ['Dismiss']
    });
    alert.present();
  }


}
