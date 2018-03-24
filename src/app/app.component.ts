import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyPreferencesPage } from '../pages/my-preferences/my-preferences';
import { MyCelebritiesPage } from '../pages/my-celebrities/my-celebrities';
import { MySchedulePage } from '../pages/my-schedule/my-schedule';
import { MyTransactionsPage } from '../pages/my-transactions/my-transactions';
import { MyCartPage } from '../pages/my-cart/my-cart';
import { SettingsPage } from '../pages/settings/settings';
import { MyContentPage } from '../pages/my-content/my-content';
import { MyFansFollowersPage } from '../pages/my-fans-followers/my-fans-followers';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Profile', component: MyProfilePage },
      { title: 'My Preferences', component: MyPreferencesPage },
      { title: 'My Celebrities', component: MyCelebritiesPage },
      { title: 'My Schedules', component: MySchedulePage },
      { title: 'My Transactions', component: MyTransactionsPage },
      { title: 'My Cart', component: MyCartPage },
      { title: 'My Content', component: MyContentPage },
      { title: 'My Fans & Followers', component: MyFansFollowersPage },
      { title: 'Settings', component: SettingsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
