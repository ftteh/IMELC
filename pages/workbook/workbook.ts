import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cabaran1Page } from '../cabaran1/cabaran1';
import { Cabaran2Page } from '../cabaran2/cabaran2';
import { NazmiPage } from '../nazmi/nazmi';
import { AimanPage } from '../aiman/aiman';

/**
 * Generated class for the WorkbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-workbook',
  templateUrl: 'workbook.html',
})
export class WorkbookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  goC1() {
    this.navCtrl.push(Cabaran1Page, {
    });
  }
  
  goC2() {
    this.navCtrl.push(Cabaran2Page, {
    });
  }
  
  goC3() {
    this.navCtrl.push(AimanPage, {
    });
  }
  
  goC4() {
    this.navCtrl.push(NazmiPage, {
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkbookPage');
  }

}
