import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DetailComponent} from "./detail.component";
import {DetailRoutingModule} from "./detail-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetailRoutingModule
  ],
  declarations: [DetailComponent]
})
export class DetailPageModule {}
