import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyProfilePage,
    MyPreferencesPage,
    MyCelebritiesPage,
    MySchedulePage,
    MyTransactionsPage,
    MyCartPage,
    SettingsPage,
    MyContentPage,
    MyFansFollowersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyProfilePage,
    MyPreferencesPage,
    MyCelebritiesPage,
    MySchedulePage,
    MyTransactionsPage,
    MyCartPage,
    SettingsPage,
    MyContentPage,
    MyFansFollowersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
