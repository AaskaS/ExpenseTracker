import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/signin', pathMatch: 'full'},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'add-expense', component: AddExpenseComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
