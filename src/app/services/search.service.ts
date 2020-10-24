import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  formSearch: FormGroup = new FormGroup({
    department: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
  });

  initialiseFormGroup(){
    this.formSearch.setValue({
      department:'',
      category:'',
      start:'',
      end:'',
    });

  }
}
