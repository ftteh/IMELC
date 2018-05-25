import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { Camera } from '@ionic-native/camera';
import { UpdateProvider } from "../../providers/update/update"
import { ConnProvider } from "../../providers/conn/conn";
import { OnDestroy } from "@angular/core";
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';




//for update
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


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
  selector: 'page-bill',
  templateUrl: 'bill.html'
})
export class BillPage {

  getTat:boolean=false;
  get(){
    this.getTat=true;
  }
  b64toFile(dataURI) {
    // convert the data URL to a byte string
    const byteString = atob(dataURI.split(',')[1]);

    // pull out the mime type from the data URL
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // Convert to byte array
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // Create a blob that looks like a file.
    const blob = new Blob([ab], { 'type': mimeString });
    blob['lastModifiedDate'] = (new Date()).toISOString();
    blob['name'] = 'file';
    console.log(blob['name']);
    return blob;
  }

  //the camera module 
  srcImage: string;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  uploadUrl: Observable<string | null>;
  downloadUrl: Observable<string | null>;
  fileId: string;
  billNo: string;
  billDown: string;
  ses: string;
  sub: any;
  private itemsCollection: AngularFirestoreCollection<ItemDoc>;
  items: Observable<ItemDoc[]>;


  private itemDoc: AngularFirestoreDocument<ItemDoc>;
  itemdoc: Observable<ItemDoc>;


  constructor(public modalCtrl: ModalController, public alertCtrl: AlertController, public afs: AngularFirestore, public navCtrl: NavController, public conn: ConnProvider, public update: UpdateProvider, public camera: Camera, private storage: AngularFireStorage, public loadingCtrl: LoadingController) {
    conn.getSes().then((v) => {
      this.ses = v; this.itemsCollection = afs.collection<ItemDoc>('users' + this.ses);
      this.items = this.itemsCollection.valueChanges();
    });
  }

  loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });


  //the camera module
  getPicture(s: number) {
    this.camera.getPicture({
      quality: 100,
      destinationType: 0, // DATA_URL
      sourceType: s,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.srcImage = `data:image/jpeg;base64,${imageData}`;
      this.uploadCamFile(this.srcImage);
    }, (err) => {
      console.log(`ERROR -> ${JSON.stringify(err)}`);
    });
  }

  uploadFile(event) { //for input
    const file = event.target.files[0];
    const filePath = Math.random().toString(36).substring(3);
    const task = this.storage.upload('users/' + filePath, file);

    this.loading.present();
    // observe percentage changes
    task.percentageChanges().subscribe(res => {
      if (res == 100)
        this.loading.dismiss();
    });
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();

  }

  uploadCamFile(s) {
    this.loading.present();
    const filePath = Math.random().toString(36).substring(3);
    this.update.updateBill(this.billNo, filePath);   //update the filename corres user
    const ref = this.storage.ref('users/' + filePath);
    const task = ref.put(this.b64toFile(s), { customMetadata: { shitty: 'shitty' } });
    // observe percentage changes
    task.percentageChanges().subscribe(res => {
      if (res == 100)
        this.loading.dismiss();
    });
    this.uploadPercent = task.percentageChanges();
    this.uploadUrl = task.downloadURL();

  }

  downloadFile(s: string) {

    if (s == "bill1") {
      this.itemDoc = this.afs.doc<ItemDoc>('users/' + this.ses); //working 
      this.itemdoc = this.itemDoc.valueChanges();
      this.itemdoc.map(res => res)             //here
        .subscribe((res) => {
          if (res.bill1 !== "") {
            const ref = this.storage.ref('/users/' + res.bill1);
            this.downloadUrl = ref.getDownloadURL();
          }
          else {
            // let alert = this.alertCtrl.create({
            //   title: '',
            //   subTitle: "Bill doesn't exist",
            //   buttons: ['Dismiss']
            // });
            // alert.present();
          }
        });
    }
    else if (s == "bill2") {
      this.itemDoc = this.afs.doc<ItemDoc>('users/' + this.ses); //working 
      this.itemdoc = this.itemDoc.valueChanges();
      this.itemdoc.map(res => res)             //here
        .subscribe((res) => {
          if (res.bill2 !== "") {
            const ref = this.storage.ref('/users/' + res.bill2);
            this.downloadUrl = ref.getDownloadURL();
          }
          else {
            // let alert = this.alertCtrl.create({
            //   title: '',
            //   subTitle: "Bill doesn't exist",
            //   buttons: ['Dismiss']
            // });
            // alert.present();
          }
        });
    }
    else {

      this.itemDoc = this.afs.doc<ItemDoc>('users/' + this.ses); //working 
      this.itemdoc = this.itemDoc.valueChanges();
      this.itemdoc.map(res => res)             //here
        .subscribe((res) => {
          if (res.bill3 !== "") {
            const ref = this.storage.ref('/users/' + res.bill3);
            this.downloadUrl = ref.getDownloadURL();
          }
          else {
            // let alert = this.alertCtrl.create({
            //   title: '',
            //   subTitle: "Bill doesn't exist",
            //   buttons: ['Dismiss']
            // });
            // alert.present();
          }
        });
    }
  }
}





