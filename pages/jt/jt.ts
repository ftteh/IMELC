import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cabaran1Page } from '../cabaran1/cabaran1';
import { Cabaran2Page } from '../cabaran2/cabaran2';

@Component({
  selector: 'page-jt',
  templateUrl: 'jt.html'
})
export class JTPage{
cabaran1Page=Cabaran1Page;
cabaran2Page=Cabaran2Page;
  constructor(public navCtrl: NavController) {
  }

}

