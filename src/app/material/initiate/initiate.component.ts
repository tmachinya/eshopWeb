import {Component, OnDestroy, OnInit} from '@angular/core';
import {InitiatorService} from "../../services/initiator.service";
import {JarvisService} from "../../services/jarvis.service";
import {Router} from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: 'app-initiate',
  templateUrl: './initiate.component.html',
  styleUrls: ['./initiate.component.css']
})
export class InitiateComponent implements OnInit {
  products: string [];
  reqnumber: string;
  nani: string;
  depart:string;
  constructor(
    public service: InitiatorService,
    public Jarvis: JarvisService,
    private router: Router,
  ) { }

  ngOnInit() {
    const requisitionno = 'req'+new Date().toJSON()
    this.reqnumber = requisitionno;
    this.nani = this.service.by();
    this.depart = this.service.dpt();
    localStorage.setItem('reqno',requisitionno);
    this.Jarvis.allProducts().subscribe(
      data =>{
        this.products = data as string[];
      }
    )

  }

  onSubmit()
  {
    this.Jarvis.addRequisition(_.omit(this.service.formInitiator.value,['id'])).subscribe(
      res =>{
        this.Jarvis.refreshpendingRequisition()
      }
    );
    this.router.navigate(['/dashboard/initiate/1'])
    // this.onClear()
  }
  onClear() {
    // this.service.formInitiator.reset();
    this.service.initialiseFormGroup();
    // this.dialogRef.close();
  }
  view()
  {
    this.router.navigate(['/dashboard/initiate/1'])
  }

}
