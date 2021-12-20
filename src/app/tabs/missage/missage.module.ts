import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissagePageRoutingModule } from './missage-routing.module';

import { MissagePage } from './missage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissagePageRoutingModule
  ],
  declarations: [MissagePage]
})
export class MissagePageModule {}
