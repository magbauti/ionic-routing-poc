import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssetsComponent} from "./assets.component";

const routes: Routes = [
  {
    path: '',
    component: AssetsComponent,
  },
  // {
  //   path: 'detail/:id',
  //   loadChildren: () =>
  //     import('../../detail/detail.module').then((m) => m.DetailPageModule),
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule {}
