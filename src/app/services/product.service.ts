import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  formProduct: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  initialiseFormGroup(){
    this.formProduct.setValue({
      id: '',
      code:'',
      name:'',
      description:'',
    });

  }

  populateForm(product){
    this.formProduct.setValue(product);
  }
}
