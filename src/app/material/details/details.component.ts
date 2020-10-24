import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JarvisService} from "../../services/jarvis.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProductComponent} from "../products/product/product.component";
import {EditQuantityComponent} from "../dialogues/edit-quantity/edit-quantity.component";
import {RequisitionService} from "../../services/requisition.service";
import {RequisitionComponent} from "../requisitions/requisition/requisition.component";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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

  hod(){
    this.Champion.approveReqs(this.infor).subscribe(
      data =>{
       window.location.reload()
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
