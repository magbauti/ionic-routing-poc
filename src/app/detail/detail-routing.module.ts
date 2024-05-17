import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetailComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'summary',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('./summary/summary.module').then(
                    (m) => m.SummaryModule
                  ),
              },
            ],
          },
          {
            path: 'hardware',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('./hardware/hardware.module').then(
                    (m) => m.HardwareModule
                  ),
              },
            ],
          },
          {
            path: '**',
            redirectTo: 'summary',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {}
