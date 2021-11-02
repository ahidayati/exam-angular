import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {StoreComponent} from "./store/store.component";
import {AccountIndexComponent} from "./account-index/account-index.component";
import {AccountFormComponent} from "./account-form/account-form.component";
import {StoreDetailComponent} from "./store-detail/store-detail.component";

const routes: Routes = [
  {path:'navbar', component: NavbarComponent},
  {path:'', component: StoreComponent},
  {path:'account-index', component: AccountIndexComponent},
  {path:'account-form', component: AccountFormComponent},
  {path:'games-detail/:gamesId', component: StoreDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
