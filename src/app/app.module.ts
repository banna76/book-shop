import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { ShoppingCartComponent } from './book-shop/shopping-cart/shopping-cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './book-shop/store/reducers/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    StoreModule.forRoot({cartEntries: cartReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Book Store',
      maxAge: 10 // number of states to retain
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
