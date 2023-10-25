import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AdvisoriesComponent} from "./advisories.component";
import {AdvisoriesRoutingModule} from "./advisories-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AdvisoriesRoutingModule
  ],
  declarations: [AdvisoriesComponent]
})
export class AdvisoriesModule {}
