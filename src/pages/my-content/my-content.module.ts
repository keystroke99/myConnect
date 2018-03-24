import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyContentPage } from './my-content';

@NgModule({
  declarations: [
    MyContentPage,
  ],
  imports: [
    IonicPageModule.forChild(MyContentPage),
  ],
})
export class MyContentPageModule {}
