import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JarvisService} from "../../services/jarvis.service";
import {ExcelService} from "../../services/excel.service";

@Component({
  selector: 'app-exp-report',
  templateUrl: './exp-report.component.html',
  styleUrls: ['./exp-report.component.css']
})
export class ExpReportComponent implements OnInit {
  infor: any
  costs: string [];
  count: any;
  var1: number=0.0
  var3: number=0.0

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private Jarvis: JarvisService,
    private excel: ExcelService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
        this.infor = JSON.parse(params.data)
        this.Jarvis.master(this.infor).subscribe(
          data => {
            this.costs = data as string [];
            console.log(this.costs)
            this.count= this.costs.length;
            this.costs.forEach(
              (key:any, val:any)=>{
                const price = key['price'];
                const quantity = key['quantity'];
                const  figint= parseFloat(price);
                const  figint1= parseFloat(quantity);
                this.var1 = this.var1+(figint*figint1)
              }
            )
          }
        )
      }
    )
  }

  calculation() {
    this.excel.exportAsExcelFile(this.costs, 'Department Costs');
  }
}
