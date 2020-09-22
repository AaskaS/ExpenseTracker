import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expenses: String[] = [];
  rolelist = [];


  form = new FormGroup({
    date: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required),
    place: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });
  // userName = new FormControl('', Validators.required);

  constructor(private router: Router) { }

  submit() {

    console.log(formatDate(new Date(), 'yyyy-MM-dd', 'en'));

    var expense =
    {
      "date": this.form.get("date").value,
      "place": this.form.get("place").value,
      "cost": this.form.get("cost").value,
      "category": this.form.get("category").value,
    };
    this.rolelist.push(expense);
    console.log(this.rolelist);

    for (var i = 0; i < this.rolelist.length; i++) {
      console.log(this.rolelist[i].date);
    }

  }

  delete(value: number) {
    console.log(value);
    this.rolelist.splice(value, 1);
  }

  ngOnInit() {
  }


}
