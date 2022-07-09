import { Component, OnInit, Input } from '@angular/core';
import { Book } from './../../../mock-data/models';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';


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
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    if("thumbnail" in this.inputpanel){
      this.inputpanel.thumbnail = `${this.inputpanel.thumbnail}`
      this.inputpanel.author.thumbnail = `${this.inputpanel.author.thumbnail}`
    }
  }

  openDialog(): void {
    this.dialog.open(DetailsComponent, {
      width: '95%',
      height: '95%',
      disableClose: false,
      autoFocus: false,
      data: this.inputpanel
    });
  }
}
