import { Component, OnInit } from '@angular/core';
import {JarvisService} from '../../../services/jarvis.service';
import {RequisitionService} from '../../../services/requisition.service';
import {MatDialogRef} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import * as _ from 'lodash';
import {TokenService} from "../../../services/token.service";

@Component({
  selector: 'app-requisition',
  templateUrl: './requisition.component.html',
  styleUrls: ['../../products/product/product.component.css']
})
export class RequisitionComponent implements OnInit {
  requisitions: string [];
  branches: string [];
  departments: string [];
  codes: string[];
  mashefu: boolean;
  kuchitoro: boolean;

  constructor(
    private Jarvis: JarvisService,
    public service: RequisitionService,
    private Token: TokenService,
    public dialogRef: MatDialogRef<RequisitionComponent>
  ) {

  }

  ngOnInit() {
    this.Jarvis.allRequisitions().subscribe(
      data => {
        this.requisitions = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    this.Jarvis.allBranches().subscribe(
      data =>{
        this.branches = data as string [];
      }
    )

    this.Jarvis.allDepartments().subscribe(
      data =>{
        this.departments = data as string [];
      }
    )

    this.Jarvis.allProducts().subscribe(
      data => {
        this.codes = data as string [];
      }
    )
    const roles = this.Token.getRoles()
    this.mashefu = roles.includes("hod");
    this.kuchitoro = roles.includes("warehouse");

  }

  onSubmit()
  {
    console.log(this.service.formProduct.value);
    if(!this.service.formProduct.get('id').value)
    {
      this.Jarvis.addRequisition(_.omit(this.service.formProduct.value,['id'])).subscribe();
      this.service.formProduct.reset();
    } else{
      this.Jarvis.updateRequisition(this.service.formProduct.value).subscribe();
    }

    this.onClose();
  }

  onClear() {
    this.service.formProduct.reset();
    this.service.initialiseFormGroup();
    this.dialogRef.close();
  }

  onClose() {
    this.service.formProduct.reset();
    this.service.initialiseFormGroup();
    this.dialogRef.close();
  }

}
