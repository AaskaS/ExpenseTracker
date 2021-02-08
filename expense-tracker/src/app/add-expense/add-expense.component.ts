import { Component, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import {Expense} from "../expense";
import {Message} from "../message";
import {ExpenseService} from "../expense.service";
import {MessageService} from "../message.service";
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
  
})
export class AddExpenseComponent implements OnInit {
  expenses: String[] = [];
  rolelist = [];
  arr = [];

  transaction: Expense;

  //expense: Array<Expense>=[];
  expense: Array<Expense> = [];
 
  ///arr = 
  
  testvar: string;
  

  form = new FormGroup({
    date: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required),
    place: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });
  // userName = new FormControl('', Validators.required);

  constructor(private router: Router,private expenseService: ExpenseService,
    private messageService: MessageService, private ref: ChangeDetectorRef) {
     
      

     }

     ngOnInit() {
      this.getAll();
     // console.log(this.expense);
      this.transaction = new Expense();
     
     
      
    }

    ngOnDestroy(){
      
    }

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
   
    console.log(value)

    
    this.expenseService.deleteExpense(value).pipe()
      .subscribe((message: Message) => {
        console.log(message);
        //this.getAll();
        this.ngOnInit();
      
        
      }, (error) => {
        console.log("error");
      }
      
      
      
      );
    
    

    //this.rolelist.splice(value, 1);
  }

  getAll() {
    this.expenseService.getAll()
                  .subscribe((message: Message) => {
                    console.log(message.expense);
                    this.expense = message.expense;
                    this.arr = this.expense;
                  }
                  , (error) => {
                    console.log("error");
                  });

 


  }
  



  save(){
    this.transaction.date = this.form.get("date").value;
    this.transaction.place = this.form.get("place").value;    
    this.transaction.category = this.form.get("category").value;
    this.transaction.cost = this.form.get("cost").value;
    //this.arr.push(this.transaction);
    this.expenseService.createExpense(this.transaction)
    .subscribe((message:Message) =>{
      console.log(message);
      let tran = message.expense[0];
      let msg = "Success-> Post: "
        +"<ul>"
          +"<li>id: " + tran.id + "</li>"
          +"<li>date: " + tran.date + "</li>"
          +"<li>place: " + tran.place + "</li>"
          +"<li>category: " + tran.category + "</li>"
          +"<li>cost: " + tran.cost + "</li>"
        this.messageService.add(msg);
        this.ngOnInit();
       
        
    }, error => {
      console.log(error);
      let msg = "Success-> Post: "
      this.messageService.add(msg);

    });

}

  reset(){
    this.transaction = new Expense();
  }

  onSubmit(){
    this.save();
    this.reset();
    this.form = new FormGroup({
      date: new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required),
      place: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
   
  }



}
