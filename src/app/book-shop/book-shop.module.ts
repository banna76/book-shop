import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import { BookShopRoutingModule } from './book-shop-routing.module';
import { CardComponent } from './card/card.component';
import { PanelComponent } from './panel/panel.component';
import { DetailsComponent } from './details/details.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    PanelComponent,
    DetailsComponent
  ],
  providers: [],
  imports: [
    ApolloModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    BookShopRoutingModule
  ]
})
export class BookShopModule { }
