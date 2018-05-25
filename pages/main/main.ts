import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage {




  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {


  }

  //open the modal
  openModal() {
    let modal = this.modalCtrl.create(ModalContent);
    modal.present();
  }

}

//start the modal
@Component({
  template: `
  <ion-header>
  <ion-toolbar>
    <ion-title>
     Login page
    </ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-item>Please login</ion-item>
  
<button ion-button (click)="goBack()">
Go back
<ion-icon name="star" ></ion-icon>
</button>

</ion-content>
  `
})

export class ModalContent {
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  goBack() {
    this.navCtrl.pop();
  }
}
