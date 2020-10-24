import { Component, OnInit } from '@angular/core';
import {JarvisService} from '../../../services/jarvis.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ProductService} from '../../../services/product.service';
import {MatDialogRef} from '@angular/material/dialog';
import * as _ from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: string [];

  constructor(
    private Jarvis: JarvisService,
    public service: ProductService,
    public dialogRef: MatDialogRef<ProductComponent>
  ) {

  }

  ngOnInit() {
    this.Jarvis.allProducts().subscribe(
      data => {
        this.products = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    )
  }

  onSubmit()
  {
    console.log(this.service.formProduct.value);
    if(!this.service.formProduct.get('id').value)
    {
      this.Jarvis.addProduct(_.omit(this.service.formProduct.value,['id'])).subscribe();
      this.service.formProduct.reset();
    } else{
      this.Jarvis.updateProduct(this.service.formProduct.value).subscribe();
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
