import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { OrderListComponent } from './admin/orders/order-list/order-list.component';
import { OrderItemComponent } from './admin/orders/order-list/order-item/order-item.component';
import { OrderDetailComponent } from './admin/orders/order-detail/order-detail.component';
import { OrderEditComponent } from './admin/orders/order-edit/order-edit.component';
import { OrderService } from "./admin/orders/order.service";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    OrdersComponent,
    OrderListComponent,
    OrderItemComponent,
    OrderDetailComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule,HttpModule,AppRoutingModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
