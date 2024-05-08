import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'assets',
        loadChildren: () =>
          import('./assets/assets.module').then((m) => m.AssetsModule),
      },
      {
        path: 'advisories',
        loadChildren: () =>
          import('./advisories/advisories.module').then(
            (m) => m.AdvisoriesModule
          ),
      },
      {
        path: 'cases',
        loadChildren: () =>
          import('./cases/cases.module').then((m) => m.CasesModule),
      },
      {
        path: '',
        redirectTo: 'assets',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('../detail/detail.module').then((m) => m.DetailPageModule),
  },
  {
    path: '**',
    redirectTo: 'tab1/assets',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
