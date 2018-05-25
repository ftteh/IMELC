import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environment/environment';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HomePage,ModalContent } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { BillPage } from '../pages/bill/bill';
import { AimanPage } from '../pages/aiman/aiman';
import { IzzatPage } from '../pages/izzat/izzat';
import { JTPage } from '../pages/jt/jt';
import { Cabaran1Page } from '../pages/cabaran1/cabaran1';
import { Cabaran2Page } from '../pages/cabaran2/cabaran2';
import { NazmiPage } from '../pages/nazmi/nazmi';
import { ConnProvider } from '../providers/conn/conn';
import { UpdateProvider } from '../providers/update/update';
import { TrainingPage } from '../pages/training/training';
import { QuestionPage } from '../pages/question/question';
import { VideoPage } from '../pages/video/video';
import { WorkbookPage } from '../pages/workbook/workbook';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage,
    BillPage,
    AimanPage,
    IzzatPage,
    JTPage,
    Cabaran1Page,
    Cabaran2Page,
    NazmiPage,
    TrainingPage,
    QuestionPage,
    VideoPage,
    WorkbookPage,
    ModalContent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireStorageModule,
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage,
    BillPage,
    AimanPage,
    IzzatPage,
    JTPage,
    Cabaran1Page,
    Cabaran2Page,
    NazmiPage,
    TrainingPage,
    QuestionPage,
    VideoPage,
    WorkbookPage,
    ModalContent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnProvider,
    UpdateProvider,
  ]
})
export class AppModule {}
