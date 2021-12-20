import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissagePage } from './missage.page';

const routes: Routes = [
  {
    path: '',
    component: MissagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissagePageRoutingModule {}
