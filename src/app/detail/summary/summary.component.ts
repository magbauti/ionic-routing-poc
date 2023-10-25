import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ViewWillEnter} from "@ionic/angular";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent  implements ViewWillEnter {
  id: string | null = '';
  constructor(private route: ActivatedRoute) { }

  ionViewWillEnter() {
    console.log('summary: this.route.snapshot.parent.parent.parent.paramMap: ', this.route.snapshot.parent?.parent?.parent?.paramMap)
    console.log('summary: this.route.snapshot.paramMap: ', this.route.snapshot.paramMap)
    this.id = this.route.snapshot.parent?.parent?.parent?.paramMap.get('id') ?? '';//this.route.snapshot.paramMap.get('id');
  }

}
