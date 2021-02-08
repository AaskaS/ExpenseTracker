import { Component, OnInit } from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';
import {Expense} from "../expense";
import {Message} from "../message";
import {ExpenseService} from "../expense.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  expense: Array<Expense> = [];
 // arr= this.getAll();
  arr: Expense[];
  temp = new Map<string, number>();


  public options = {
    tooltip : {
      formatter: "{b} : ${c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Electronics','Food', 'Grocery', 'Health', 'Household', 'Misc', 'Personal','Transportation',   ]
    },
    series : [
      /*
{
        //name: 'Number of Requests by Request Type',
        type: 'pie',
        radius : '90%',
       // center: ['50%', '60%'],
        data:[
          {value:335, name:'Food'},
          {value:310, name:'Grocery'},
          {value:234, name:'Health'},
          {value:135, name:'Household'},
          {value:1548, name:'Transportation'},
          {value:456, name:'Personal'},
          {value:520, name:'Electronics'},
          {value:670, name:'Misc'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
      */
    ]
  };

  constructor(private expenseService: ExpenseService,
    private messageService: MessageService) {
      

    }
  ngOnInit(){
    this.getAll();
   // this.getTotal();
    //this.getTotal("Food");
  }

  ngAfterViewInit(){
    
 }

 getAll() {
  this.expenseService.getAll()
                
                .subscribe((message: Message) => {
                  console.log(message.expense);
                  this.expense = message.expense 
                 // this.arr = message.expense;
                  
                  
                }
                , (error) => {
                  console.log("error");
                },
                () => {
                  console.log("DONE")
                  this.getTotal()
                }
                
                );
 

  


}

getTotal(){
  val: {};
  for(var i = 0; i < this.expense.length; i++){
    var cat = this.expense[i].category;
    var num = Number(this.expense[i].cost);
    if(this.temp.get(cat) == undefined ){
      this.temp.set(cat, num );
    }
    else{
      this.temp.set(cat, this.temp.get(cat) + num);
    }
  }

  console.log(this.temp);
 
  this.options.series.push({
    //name: 'Number of Requests by Request Type',
    type: 'pie',
    radius : '90%',
   // center: ['50%', '60%'],
    data:[
      {value:this.temp.get("Electronics").toFixed(2), name:'Electronics'},
      {value:this.temp.get("Food").toFixed(2), name:'Food'},
      {value:this.temp.get("Grocery").toFixed(2), name:'Grocery'},
      {value:this.temp.get("Health").toFixed(2), name:'Health'},
      {value:this.temp.get("Household").toFixed(2), name:'Household'},
      {value:this.temp.get("Misc").toFixed(2), name:'Misc'},
      {value:this.temp.get("Personal").toFixed(2), name:'Personal'},
      {value:this.temp.get("Transportation").toFixed(2), name:'Transportation'}
      
      
      
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  })
}



}

/*

data: [10, 52, 200, 334, 390, 330, 220, 150],

*/