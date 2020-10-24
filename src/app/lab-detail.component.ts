import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Lab, SAMPLE_DATA} from './labs.list.component';

@Component({
  selector: 'app-lab-detail',
  templateUrl: './lab-detail.component.html',
  styleUrls: ['./lab-detail.component.css']
})
export class LabDetailComponent implements OnInit {

  loading: boolean;
  lab: Lab = {};
  currentId: number;

  constructor(private router: Router, private route: ActivatedRoute) { }


  private refresh(): void {

    for (let i = 0; i < SAMPLE_DATA.length; i++) {
      if (SAMPLE_DATA[i].id == this.currentId) { this.lab = SAMPLE_DATA[i]; break; }
    }

  }


  ngOnInit(): void {

    // Get currently selected project id
    this.route.params.subscribe(params => {

      if (params && params.id) {

        this.currentId = params.id;
        this.refresh();

      }

    });

  }

}
