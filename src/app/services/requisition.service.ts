import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RequisitionService {

  constructor() { }

  formProduct: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    status: new FormControl(''),
    quantity: new FormControl('', Validators.required),
    date: new FormControl(''),
    by: new FormControl(''),
    branch: new FormControl(''),
    department: new FormControl(''),
    req: new FormControl(''),
    created_at: new FormControl(''),
    updated_at: new FormControl(''),
    comment: new FormControl(''),
  });

  initialiseFormGroup(){
    this.formProduct.setValue({
      id: '',
      code:'',
      name:'',
      status:'',
      quantity:'',
      date:'',
      by:'',
      branch:'',
      department:'',
      req:'',
      created_at:'',
      updated_at:'',
      comment:'',
    });

  }

  populateForm(product){
    this.formProduct.setValue(product);
  }
}
