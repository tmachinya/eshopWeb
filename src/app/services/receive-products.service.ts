import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ReceiveProductsService {
  constructor() { }
  formReceipt: FormGroup = new FormGroup({
    code: new FormControl(''),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    date: new FormControl(''),
  });

  initialiseFormGroup(){
    this.formReceipt.setValue({
      code:'',
      price:'',
      quantity:'',
      date:'',
    });

  }
}
