import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';

import { FlatmatePage } from '../pages/home/flat/flat'; 
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from '../pages/signin/signin';
import { SignUpPage } from '../pages/signup/signup';
import { DetailPage } from '../pages/home/detail/detail';
import { CreatePage } from '../pages/home/create/create';
import { SettingsPage } from '../pages/profile/settings/settings'
import { AboutUsPage } from '../pages/profile/settings/about/about';
import { BankPage } from '../pages/bank/bank';
import { PerferencePage } from '../pages/profile/settings/perference/perference';

import { NotificationPage } from '../pages/notification/notification';
import { MatchingPage } from '../pages/matching/matching';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Ionic2RatingModule } from 'ionic2-rating';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
    apiKey: "AIzaSyBSbQ9pC0t76hvQPNt1o4kDgdlyAsia8Vk",
    authDomain: "finhack17.firebaseapp.com",
    databaseURL: "https://finhack17.firebaseio.com",
    projectId: "finhack17",
    storageBucket: "finhack17.appspot.com",
    messagingSenderId: "950399401702"
};

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    HomePage,
    TabsPage,
    SignInPage,
    SignUpPage,
    DetailPage,
    CreatePage,
    SettingsPage,
    AboutUsPage,
    BankPage,
    NotificationPage,
    FlatmatePage,
    MatchingPage,
    PerferencePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ionic2RatingModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    HomePage,
    TabsPage,
    SignInPage,
    SignUpPage,
    DetailPage,
    CreatePage,
    SettingsPage,
    AboutUsPage,
    BankPage,
    NotificationPage,
    FlatmatePage,
    MatchingPage,
    PerferencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
