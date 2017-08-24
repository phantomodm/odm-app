import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";


import { AdminComponent } from "./admin/admin.component";
import { OrderDetailComponent } from "./admin/orders/order-detail/order-detail.component";
import { OrderEditComponent } from "./admin/orders/order-edit/order-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo:'/admin', pathMatch: 'full' },
    {path: 'admin', component: AdminComponent, children:[
        {path: '', component:AdminComponent},        
        {path: 'new', component:OrderEditComponent},
        {path: ':id', component:OrderDetailComponent},
        {path: ':id/edit', component:OrderEditComponent}       
    ] }/* ,
    {path: 'shopping-list', component: ShoppingListComponent }, */
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}