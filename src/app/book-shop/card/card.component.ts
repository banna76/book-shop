import { Component, OnInit, Input} from '@angular/core';
import { Book } from './../../../mock-data/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() inputcard: Book = {
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
    if("thumbnail" in this.inputcard){
      this.inputcard.thumbnail = `${this.inputcard.thumbnail}`
      this.inputcard.author.thumbnail = `${this.inputcard.author.thumbnail}`

    }
  }

}
