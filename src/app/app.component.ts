import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts} from './book-shop/store/selectors/cart.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-shop';
  showCart:boolean = false;
  countProducts$: Observable<number> | undefined;
  constructor(
    private store: Store,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,){
    this.registerIcons();
    this.countProducts$ = this.store.select(selectCountProducts);
  }

  registerIcons() {
    const icons = [
      'cart',
      'book',
      'shopping'
    ];

    icons.forEach(i => {
      this.matIconRegistry.addSvgIcon(
        i,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/svg/${i}.svg`
        )
      );
    });
  }
}
