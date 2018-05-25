import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ConnProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnProvider {

  ses = { 'ses': "", "type": "" };
  constructor(public storage: Storage) { }
  setSes(i: string, t: string) {
    this.storage.set('ses', i);
    this.storage.set('type', t);
  }
  getSes() {
    return this.storage.get('ses');
  }
  getType() {
    return this.storage.get('type');
  }




}
