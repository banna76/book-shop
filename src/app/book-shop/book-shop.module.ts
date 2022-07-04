import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import { BookShopRoutingModule } from './book-shop-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  providers: [],
  imports: [
    ApolloModule,
    CommonModule,
    BookShopRoutingModule
  ]
})
export class BookShopModule { }
