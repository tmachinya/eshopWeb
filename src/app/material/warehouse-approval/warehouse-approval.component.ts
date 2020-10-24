import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JarvisService} from "../../services/jarvis.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RequisitionComponent} from "../requisitions/requisition/requisition.component";
import {RequisitionService} from "../../services/requisition.service";

@Component({
  selector: 'app-warehouse-approval',
  templateUrl: './warehouse-approval.component.html',
  styleUrls: ['./warehouse-approval.component.css']
})
export class WarehouseApprovalComponent implements OnInit {
  infor: any
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public service: RequisitionService,
    private Champion: JarvisService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
        this.infor = JSON.parse(params.data)
      }
    )
  }


  warehouse(){
    this.Champion.approveWarehouse(this.infor).subscribe(
      data =>{
        window.location.reload()
      }
    )
  }

  edit(u: any) {
    this.service.populateForm(u);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(RequisitionComponent, dialogConfig);
  }
}
