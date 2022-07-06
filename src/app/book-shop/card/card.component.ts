import { Component, OnInit, Input} from '@angular/core';
import { Book } from './../../../mock-data/models';
import { DetailsComponent } from '../details/details.component';
import {MatDialog} from '@angular/material/dialog';

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
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    if("thumbnail" in this.inputcard){
      this.inputcard.thumbnail = `${this.inputcard.thumbnail}`
      this.inputcard.author.thumbnail = `${this.inputcard.author.thumbnail}`

    }
  }

  openDialog(): void {
    this.dialog.open(DetailsComponent, {
      width: '95%',
      height: '95%',
      disableClose: false,
      autoFocus: false,
      data: this.inputcard
    });
  }

}
