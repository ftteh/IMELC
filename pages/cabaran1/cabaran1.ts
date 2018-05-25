import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import {ElementRef, HostListener, OnInit} from '@angular/core';

/**
 * Generated class for the Cabaran1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cabaran1',
  templateUrl: 'cabaran1.html',
})
export class Cabaran1Page {
  showIt="";
  constructor(public navCtrl: NavController, public navParams: NavParams,public a:AlertController) {
  }

  showd(){
    this.showIt="12.993"
  }
  ab(){
    let alert = this.a.create({
      title: 'Submitted',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cabaran1Page');
  }

}
export class AutosizeDirective implements OnInit {


  constructor(public element:ElementRef) {
  }

  ngOnInit():void {
    setTimeout(() => this.adjust(), 0);
  }


  adjust():void {
    let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.height = 'auto';
    if (textArea.scrollHeight < 100) {
      textArea.style.height = textArea.scrollHeight + "px";
      textArea.style.overflowY = 'hidden';
    } else {
      textArea.style.height = "100px";
      textArea.style.overflowY = 'auto';
    }

  }
}