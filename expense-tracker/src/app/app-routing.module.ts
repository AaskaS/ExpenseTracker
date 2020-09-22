import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'add-expense', component: AddExpenseComponent},
  { path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
