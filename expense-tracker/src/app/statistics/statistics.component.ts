import { Component, OnInit } from '@angular/core';
import { getInstanceByDom, connect } from 'echarts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public options = {
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Food', 'Grocery', 'Health', 'Household', 'Transportation', 'Personal', 'Electronics', 'Misc']
    },
    series : [
      {
        name: 'Number of Requests by Request Type',
        type: 'pie',
        radius : '75%',
        center: ['50%', '60%'],
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
    ]
  };

  constructor() {}
  ngOnInit(){

  }

  ngAfterViewInit() {
    setTimeout(() => {
      const chartElement1 = document.getElementById('chart1');
      //const chartElement2 = document.getElementById('chart2');
      const chart1 = getInstanceByDom(chartElement1);
      //const chart2 = getInstanceByDom(chartElement2);
      //connect([chart1, chart2]);
    });
  }
}

/*

data: [10, 52, 200, 334, 390, 330, 220, 150],

*/