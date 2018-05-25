import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-izzat',
  templateUrl: 'izzat.html'
})
export class IzzatPage {

  constructor(public a: AlertController) {
  }
  ab(){
    let alert = this.a.create({
      title: 'Submitted',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
