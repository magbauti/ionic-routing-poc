import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss'],
})
export class HardwareComponent  implements ViewWillEnter {
  id: string | null = '';
  nextId: number = 0;
  constructor(private route: ActivatedRoute) { }

  ionViewWillEnter() {
    console.log('hardware: this.route.snapshot.parent: ', this.route.snapshot.parent)
    console.log('hardware: this.route.snapshot.paramMap: ', this.route.snapshot.paramMap)

    this.id = this.route.snapshot.paramMap.get('id');
    this.nextId =  parseInt(this.id?.split("card")[1] ?? '0', 10) + 1;
  }

}
