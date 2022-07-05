import { Component, OnInit, Input } from '@angular/core';
import { Book } from './../../../mock-data/models';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() inputpanel: Book = {
    title: 'TEST',
    description: 'TEST',
    price: 0,
    thumbnail: 'no-pic.jpg',
    currency: '€',
    author: {
      firstName: 'TEST',
      lastName: 'TEST',
      thumbnail:  'no-photo.jpg',
    }
  }
  constructor() { }

  ngOnInit(): void {
    if("thumbnail" in this.inputpanel){
      this.inputpanel.thumbnail = `${this.inputpanel.thumbnail}`
      this.inputpanel.author.thumbnail = `${this.inputpanel.author.thumbnail}`
    }
  }

}
