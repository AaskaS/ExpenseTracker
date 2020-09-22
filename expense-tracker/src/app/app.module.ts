import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    WelcomeComponent,
    StatisticsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


