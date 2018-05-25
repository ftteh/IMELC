import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public a:AlertController) {
  }
  ab(){
    let alert = this.a.create({
      title: 'Submitted',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

}
