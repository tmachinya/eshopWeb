import {Component, Inject, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {JarvisService} from "../../services/jarvis.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  roles: string [];
  zita:''
  marole:''
  id:''
  form: FormGroup;
  constructor(
    public adminService: AdminService,
    private Champion: JarvisService,
    public dialogRef: MatDialogRef<AdminComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    })
    // console.log(data)
    this.zita = data.name
    this.id = data.id
    this.marole = data.roles.split(',')
  }



  ngOnInit() {
    this.Champion.allRoles().subscribe(
      role =>{
        this.roles = role as string [];
        // console.log(this.roles)
      }
    )
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    // console.log(this.form.value.checkArray)
    var obj =
      {
        roles: this.form.value.checkArray,
        munhu: this.id
      }

    this.Champion.updateRoles(obj).subscribe(
      data =>{
        var infor = data as string [];
        console.log(infor)
      }
    )
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit()
  {
    console.log(this.form)
  }
  checkRole(value)
  {
    return this.marole.includes(value)
  }

}
