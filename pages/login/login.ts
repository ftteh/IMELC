import { Component } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MainPage } from '../main/main';
import { ConnProvider } from '../../providers/conn/conn';
import { OnDestroy } from "@angular/core";
import {UpdateProvider} from "../../providers/update/update"


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
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  id: string;
  pass: string;
  ses: any = {};

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
  sub;

  docRef: string = "";
  newType: string = "";

  private itemsCollection: AngularFirestoreCollection<ItemDoc>;
  items: Observable<ItemDoc[]>;


  //the document
  public itemDoc: AngularFirestoreDocument<ItemDoc>;
  itemdoc: Observable<ItemDoc>;

  //the collection
  constructor(public update:UpdateProvider,public afs: AngularFirestore, public navCtrl: NavController, public alertCtrl: AlertController, public conn: ConnProvider) {
  }

  login(i: string, p: string) {
    this.itemsCollection = this.afs.collection<ItemDoc>('users', ref => ref.where('id', '==', i).where('pass', '==', p));
    this.items = this.itemsCollection.valueChanges();
    this.sub=this.items.map(res => res)
      .subscribe((res) => {

        if (res.length != 0) {
          this.conn.setSes(res[0].id, res[0].type);
          this.itemDoc = this.afs.doc<ItemDoc>('users/' + res[0].id);
          this.itemdoc = this.itemDoc.valueChanges();
          this.navCtrl.push(MainPage);
          this.update.assign(res[0].id);
          
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Login failed',
            subTitle: 'Credential incorrect!!!',
            buttons: ['Dismiss']
          });
          alert.present();
        }
      });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

