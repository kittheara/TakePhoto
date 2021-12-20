import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
      {
        path: 'missage',
        loadChildren: () => import('./../tabs/missage/missage.module').then( m => m.MissagePageModule)
      },
      {
        path: 'take-photo',
        loadChildren: () => import('./../tabs/take-photo/take-photo.module').then( m => m.TakePhotoPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./../tabs/map/map.module').then( m => m.MapPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
