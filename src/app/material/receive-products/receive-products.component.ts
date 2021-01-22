import {Component, Inject, OnInit} from '@angular/core';
import {JarvisService} from "../../services/jarvis.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ReceiveProductsService} from "../../services/receive-products.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-receive-products',
  templateUrl: './receive-products.component.html',
  styleUrls: ['../products/product/product.component.css']
})
export class ReceiveProductsComponent implements OnInit {
  product: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private Jarvis: JarvisService,
    public service: ReceiveProductsService,
    public dialogRef: MatDialogRef<ReceiveProductsComponent>
  ) {
    this.product = data.code;
  }

  ngOnInit() {

  }

  onSubmit()
  {
    this.service.formReceipt.value.code= this.product;
    const date = new Date();
    this.service.formReceipt.value.date = date.toDateString();
    this.Jarvis.addPurchase(this.service.formReceipt.value).subscribe(
      data=>{
        console.log(data)
      }
    )
    window.location.reload()
  }

  onClear() {
    this.service.formReceipt.reset();
    this.service.initialiseFormGroup();
    this.dialogRef.close();
  }

  onClose() {
    this.service.formReceipt.reset();
    this.service.initialiseFormGroup();
    this.dialogRef.close();
  }

}
