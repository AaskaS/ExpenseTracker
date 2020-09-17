import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expenses:String[] = [];
  rolelist = [];
  constructor(private router: Router) { }

submit(){
  
    var expense = 
    {
        "date": (<HTMLInputElement>document.getElementById("date")).value,
        "place": (<HTMLInputElement>document.getElementById("place")).value,
        "cost":(<HTMLInputElement>document.getElementById("cost")).value,
        "category":(<HTMLInputElement>document.getElementById("category")).value,
    };
    this.rolelist.push(expense);
    console.log(this.rolelist);

    for(var i = 0; i < this.rolelist.length; i ++){
      console.log(this.rolelist[i].date);
    }

  }

delete(value:number){
  console.log(value);
  this.rolelist.splice(value, 1);
}

  ngOnInit() {
  }

  
}
