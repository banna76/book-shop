import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book-shop/mock-data/models';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../book-shop/details/details.component';
import { Store } from '@ngrx/store';
import { clearCart, removeProduct, addProduct } from '../book-shop/store/actions/cart.action';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice, ProductGroup, selectGroupedCartEntries } from '../book-shop/store/selectors/cart.selector';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  showCart:boolean = false;
  countProducts$: Observable<number> | undefined;
  totalPrice$: Observable<number> | undefined;
  cartItems$: Observable<ProductGroup[]> | undefined;
  constructor(
    private dialog: MatDialog, 
    private store: Store) { }

  ngOnInit(): void {
    this.countProducts$ = this.store.select(selectCountProducts);
    this.totalPrice$ = this.store.select(selectTotalPrice);
    this.cartItems$  = this.store.select(selectGroupedCartEntries);
    this.totalPrice$.subscribe( (res)=> {
      if(res > 0){
        this.showCart = true;
      }
    })
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
    this.showCart = false;
    this.store.dispatch(clearCart());
  }

  more(item: ProductGroup){
    this.store.dispatch(addProduct(item.product));
  }

  less(item: ProductGroup){
    this.store.dispatch(removeProduct(item.product));
    if(this.totalPrice$){
      this.totalPrice$.subscribe( (res)=> {
        if(res > 0){
          this.showCart = true;
        }else{
          this.showCart = false;
        }
      })
    }
  }
}
