import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addProduct } from '../store/actions/cart.action';
import { selectCountProducts, selectTotalPrice } from '../store/selectors/cart.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  countProducts$: Observable<number> | undefined;
  totalPrice$: Observable<number> | undefined;

  constructor(
    private store: Store,
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA)  public dialogData: any
  ) { }

  ngOnInit(): void {
    this.countProducts$ = this.store.select(selectCountProducts);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }

  buyBook(){
    this.store.dispatch(addProduct(this.dialogData));
  }
}
