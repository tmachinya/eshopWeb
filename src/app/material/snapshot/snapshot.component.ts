import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {
  title = 'Snapshot of all sales for the week';
  LineChart: any;

  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart(
      'lineChart',{
        type: 'line',
        data:{
          labels:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"],
          datasets:[{
            label: 'Sales in thousands',
            data: [9,7,3,5,2,10,15,16,14,19,12,2],
            fill:false,
            lineTension:0.2,
            borderColor: "green",
            borderWidth: 1
          }]
        },
        options:{
          title: {
            text: "Inventory Levels",
            display:true,
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }
            ]
          }
        }

      }
    )
  }

}
