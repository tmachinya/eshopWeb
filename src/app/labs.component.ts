import {Component, OnInit, ViewChild} from '@angular/core';
import {Lab, LabsListComponent} from './labs.list.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  @ViewChild('labs') labsListComponent: LabsListComponent;

  private currentId: number;

  labSelected(lab: Lab) {
    if (lab) { this.router.navigate(['./dashboard/labs', lab.id]); }
  }

  constructor(private router: Router, private route: ActivatedRoute) {

    const ref = this.route.firstChild &&
    this.route.firstChild.params.subscribe((params) => params && this.getParamId(params.id));

  }


  private getParamId(id: number) {

    this.currentId = id;

    const ref = id &&
    this.labsListComponent &&
    this.labsListComponent.setCurrentId(id);

  }


  ngOnInit(): void {
    this.getParamId(this.currentId);
  }

}
