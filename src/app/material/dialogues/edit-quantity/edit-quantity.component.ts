import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {JarvisService} from "../../../services/jarvis.service";
import {RequisitionService} from "../../../services/requisition.service";

@Component({
  selector: 'app-edit-quantity',
  templateUrl: './edit-quantity.component.html',
  styleUrls: ['../../products/product/product.component.css']
})
export class EditQuantityComponent implements OnInit {

  constructor(
    private Jarvis: JarvisService,
    public service: RequisitionService,
    public dialogRef: MatDialogRef<EditQuantityComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.onClose()
  }

  onClose() {
    this.dialogRef.close();
  }

}
