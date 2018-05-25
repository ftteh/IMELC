import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

/**
 * Generated class for the TrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }


  p() {
    let toast = this.toastCtrl.create({
      message: 'Downloaded successfully',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
  }

}
