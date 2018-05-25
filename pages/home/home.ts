import { Component, Inject, Injectable } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

import { ConnProvider } from '../../providers/conn/conn';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { LoginPage } from '../../pages/login/login';
import { BillPage } from '../../pages/bill/bill';
import { Storage } from '@ionic/storage';
import { UpdateProvider } from "../../providers/update/update"
import { MainPage } from '../main/main';
import { TrainingPage } from '../training/training';
import { QuestionPage } from '../question/question';
import { VideoPage } from '../video/video';
import { WorkbookPage } from '../workbook/workbook';


export interface ItemDoc {
  id: string,
  lastAccess: Date,
  logged: boolean,
  pass: string,
  type: string,
  bill1: string,
  bill2: string,
  bill3: string
} //for the doc

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  billNo: string;
  fileName: string;

  idoc = {
    id: "",
    lastAccess: "",
    logged: "",
    pass: "",
    type: "",
    bill1: "",
    bill2: "",
    bill3: ""
  }

  docRef: string = "";
  newType: string = "";
  sess: string = "";

  private itemsCollection: AngularFirestoreCollection<ItemDoc>;
  items: Observable<ItemDoc[]>;


  //the document
  private itemDoc: AngularFirestoreDocument<ItemDoc>;
  itemdoc: Observable<ItemDoc>;

  //the collection
  constructor(public update: UpdateProvider, public afs: AngularFirestore, public modalCtrl: ModalController, public navCtrl: NavController, public conn: ConnProvider, public storage: Storage) {
    this.itemsCollection = afs.collection<ItemDoc>('users');
    this.items = this.itemsCollection.valueChanges();

    this.storage.get('ses').then((val) => {     //test for logged
      if (val == null)
      this.navCtrl.push(LoginPage, {
      });
      else {
        this.update.assign(val);
      }
    });
  }
  //navigation login
  goVideo() {
    this.navCtrl.push(VideoPage, {
    });
  }

  goQuestion() {
    this.navCtrl.push(QuestionPage, {
    });
  }

  goTraining() {
    this.navCtrl.push(TrainingPage, {
    });
  }

  goWorkbook() {
    this.navCtrl.push(WorkbookPage, {
    });
  }



  // getSes(){
  //   this.conn.getSes();
  // }

  //open the modal
  openModal() {
    let modal = this.modalCtrl.create(ModalContent);
    modal.present();
  }

  getDoc(s: string) {

    this.itemDoc = this.afs.doc<ItemDoc>('users/' + s);
    this.itemdoc = this.itemDoc.valueChanges();
    this.itemdoc.map(res => res)             //here
      .subscribe((res) => console.log(res));
  }

  addItem(item: ItemDoc) {
    this.itemsCollection.add(item);
  }
  updateBill(billNo: string, fileName: string) {
    this.update.updateBill(billNo,fileName);
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
