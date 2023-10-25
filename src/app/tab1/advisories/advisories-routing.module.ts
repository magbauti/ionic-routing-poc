import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdvisoriesComponent} from "./advisories.component";

const routes: Routes = [
  {
    path: '',
    component: AdvisoriesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisoriesRoutingModule {}
