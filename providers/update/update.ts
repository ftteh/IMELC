import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { OnDestroy } from "@angular/core";

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
@Injectable()
export class UpdateProvider {

  //the collection
  private itemsCollection: AngularFirestoreCollection<ItemDoc>;
  items: Observable<ItemDoc[]>;

  //the document
  public itemDoc: AngularFirestoreDocument<ItemDoc>;
  itemdoc: Observable<ItemDoc>;

  constructor(public afs: AngularFirestore) { }

  assign(s: string) {
    this.itemDoc = this.afs.doc<ItemDoc>('users/' + s);
    this.itemdoc = this.itemDoc.valueChanges();
  }

  updateBill(billNo: string, fileName: string) {

    if (billNo == "bill1") {
      this.itemDoc.update({
        "bill1": fileName
      });
      this.itemdoc = this.itemDoc.valueChanges();
    }
    else if (billNo = "bill2") {
      this.itemDoc.update({
        "bill2": fileName
      });
      this.itemdoc = this.itemDoc.valueChanges();
    }
    else {
      this.itemDoc.update({
        "bill3": fileName
      });
      this.itemdoc = this.itemDoc.valueChanges();
    }
  }


}
