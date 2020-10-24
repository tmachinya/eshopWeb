import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor() { }
  formAdmin: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    division: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required),
  });

  initialiseFormGroup() {
    this.formAdmin.setValue({
      id: '',
      name: '',
      email: '',
      division: '',
      department: '',
      roles:'',
    });

  }

  populateForm(user) {
    this.formAdmin.setValue(user);
  }
}
