import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { BankPage } from '../bank/bank';
import { MatchingPage } from '../matching/matching';
import { NotificationPage } from '../notification/notification';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BankPage;
  tab3Root = MatchingPage;
  tab4Root = NotificationPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
