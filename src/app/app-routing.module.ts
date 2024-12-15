import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FoodPageComponent } from './interested-list/interested-list.component';
import { CartPageComponent } from './event-details/event-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' }, // Default route redirects to signup
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent }, // Define signup route
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
