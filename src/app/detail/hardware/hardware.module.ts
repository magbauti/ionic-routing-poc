import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HardwareRoutingModule} from "./hardware-routing.module";
import {HardwareComponent} from "./hardware.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HardwareRoutingModule
  ],
  declarations: [HardwareComponent]
})
export class HardwareModule {}
