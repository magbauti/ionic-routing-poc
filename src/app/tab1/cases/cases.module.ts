import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CasesComponent} from "./cases.component";
import {CasesRoutingModule} from "./cases-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CasesRoutingModule
  ],
  declarations: [CasesComponent]
})
export class CasesModule {}
