import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCelebritiesPage } from './my-celebrities';

@NgModule({
  declarations: [
    MyCelebritiesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCelebritiesPage),
  ],
})
export class MyCelebritiesPageModule {}
