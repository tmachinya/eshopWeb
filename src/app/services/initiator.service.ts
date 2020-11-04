import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class InitiatorService {
  reqnumber: string;
  private userInfo;
  private depart;
  private bywho;
  constructor(
  ) { }

  formInitiator: FormGroup = new FormGroup({
    code: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    date: new FormControl(new Date()),
    status: new FormControl('pending'),
    name: new FormControl(''),
    by: new FormControl(localStorage.getItem('username')),
    department: new FormControl(localStorage.getItem('department')),
    req: new FormControl(localStorage.getItem('reqno')),
  });

  initialiseFormGroup(){
    this.formInitiator.setValue({
      code:'',
      quantity:'',
      date:new Date(),
      status:'pending',
      req: localStorage.getItem('reqno'),
      name:'',
      by: localStorage.getItem('username'),
      department:localStorage.getItem('department')
    });

  }
  dpt()  {
     this.userInfo = JSON.parse(localStorage.getItem('user'));
    return  this.depart = this.userInfo['department'];
  }
  by() {
    this.userInfo = JSON.parse(localStorage.getItem('user'));
   return this.bywho = this.userInfo['name'];
  }
}
