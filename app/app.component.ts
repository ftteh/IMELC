import { Component, ViewChild } from '@angular/core'; import { Platform } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BillPage } from '../pages/bill/bill';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { AimanPage } from '../pages/aiman/aiman';
import { IzzatPage } from '../pages/izzat/izzat';
import { Cabaran1Page } from '../pages/cabaran1/cabaran1';
import { Cabaran2Page } from '../pages/cabaran2/cabaran2';
import { NazmiPage } from '../pages/nazmi/nazmi';

import { ConnProvider } from '../providers/conn/conn';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = MainPage;
  ses;
  pages: Array<{ title: string, component: any }>;

  constructor(public conn:ConnProvider,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    conn.getSes().then((v)=>{this.ses=v;});
    this.pages = [
      { title: 'Main', component: MainPage },
      { title: 'Access Material', component: HomePage },
      { title: 'Bill', component: BillPage },
      // { title: 'Login', component: LoginPage },
      // { title: 'Challenge 1', component: Cabaran1Page },
      // { title: 'Challenge 2', component: Cabaran2Page },
      // { title: 'Challenge 3', component: AimanPage },
      // { title: 'Challenge 4', component: NazmiPage },
      // { title: 'JT', component: JTPage },
      { title: 'Feedback', component: IzzatPage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

