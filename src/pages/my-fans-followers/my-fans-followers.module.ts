import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFansFollowersPage } from './my-fans-followers';

@NgModule({
  declarations: [
    MyFansFollowersPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFansFollowersPage),
  ],
})
export class MyFansFollowersPageModule {}
