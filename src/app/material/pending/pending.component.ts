import { Component, OnInit } from '@angular/core';
import {JarvisService} from "../../services/jarvis.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  selectedRowIds: Set<number> = new Set<number>();

  allRows: any[] = [
    {id: 1, req:'',quantity:'',name:'',code:'',status:''},
  ];
  datas: any []= [
    {id: 1, req:'',quantity:'',name:'',code:'',status:''},
  ];
  requests: string [];
  selectedId: string;
  constructor(
    public Champion:JarvisService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.Champion.refreshpendingRequisition();
  }

  onRowClick(id: number) {
    if(this.selectedRowIds.has(id)) {
      this.selectedRowIds.delete(id);
    }
    else {
      this.selectedRowIds.add(id);
    }
  }

  rowIsSelected(id: number) {
    return this.selectedRowIds.has(id);
  }

  getSelectedRows(){
    return this.Champion.list.filter(x => this.selectedRowIds.has(x.id));
  }

  onLogClick() {
    this.requests =  this.getSelectedRows();
    this.Champion.awaiting(this.requests).subscribe(
      data =>{
        this.Champion.refreshpendingRequisition();
      }
    )
    localStorage.removeItem('reqno');
    window.location.reload();
    // this.router.navigate(['/dashboard/details'], {queryParams: {data: JSON.stringify(this.requests)}, skipLocationChange: true})

  }

  delete(id) {
    if (confirm('Are you sure you want to delete?')) {
      this.Champion.deleteRequisition(id).subscribe();
    }
  }
}
