import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AssetsComponent} from "./assets.component";
import {AssetsRoutingModule} from "./assets-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AssetsRoutingModule
  ],
  declarations: [AssetsComponent]
})
export class AssetsModule {}
