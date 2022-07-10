import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book-shop/mock-data/models';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../book-shop/details/details.component';
import { Store } from '@ngrx/store';
import { clearCart } from '../book-shop/store/actions/cart.action';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice } from '../book-shop/store/selectors/cart.selector';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public items: Book[] = [{
    id:0,
    title: 'TEST',
    description: 'TEST',
    price: 0,
    thumbnail: 'assets/img/no-pic.jpg',
    currency: '€',
    amount: 1,
    author: {
      firstName: 'TEST',
      lastName: 'TEST',
      thumbnail:  'assets/img/no-photo.jpg',
    }
  }];

  totalItem = 5;
  showCart = (this.totalItem)? true: false;
  countProducts$: Observable<number> | undefined;
  totalPrice$: Observable<number> | undefined;

  constructor(
    private dialog: MatDialog, 
    private store: Store) { }

  ngOnInit(): void {
    this.countProducts$ = this.store.select(selectCountProducts);
    this.totalPrice$ = this.store.select(selectTotalPrice)
  }

  openDialog(item:Book): void {
    this.dialog.open(DetailsComponent, {
      width: '95%',
      height: '95%',
      disableClose: false,
      autoFocus: false,
      data: item
    });
  }

  removeAll(){
    this.store.dispatch(clearCart())
  }

}
