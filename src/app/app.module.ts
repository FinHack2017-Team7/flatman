import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';

import { FavouritesPage } from '../pages/favourites/favourites';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from '../pages/signin/signin';
import { SignUpPage } from '../pages/signup/signup';
import { DetailPage } from '../pages/home/detail/detail';
import { CreatePage } from '../pages/home/create/create';
import { SettingsPage } from '../pages/profile/settings/settings'
import { AboutUsPage } from '../pages/profile/settings/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Ionic2RatingModule } from 'ionic2-rating';

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
    FavouritesPage,
    ProfilePage,
    HomePage,
    TabsPage,
    SignInPage,
    SignUpPage,
    DetailPage,
    CreatePage,
    SettingsPage,
    AboutUsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    FavouritesPage,
    HomePage,
    TabsPage,
    SignInPage,
    SignUpPage,
    DetailPage,
    CreatePage,
    SettingsPage,
    AboutUsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
