import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CasesComponent} from "./cases.component";

const routes: Routes = [
  {
    path: '',
    component: CasesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule {}
