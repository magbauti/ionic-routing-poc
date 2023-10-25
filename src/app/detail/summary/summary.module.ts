import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SummaryComponent} from "./summary.component";
import {SummaryRoutingModule} from "./summary-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SummaryRoutingModule
  ],
  declarations: [SummaryComponent]
})
export class SummaryModule {}
