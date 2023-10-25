import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements ViewWillEnter{
  id: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ionViewWillEnter() {
    console.log('detail: this.route.snapshot.parent: ', this.route.snapshot.parent)
    console.log('detail: this.route.snapshot.paramMap: ', this.route.snapshot.paramMap)
    this.id = this.route.snapshot.paramMap.get('id');
    //this.nextId =  parseInt(this.id?.split("card")[1] ?? '0', 10) + 1;
  }

}
