import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {JarvisService} from '../../../services/jarvis.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ExcelService} from '../../../services/excel.service';
import {HttpErrorResponse} from '@angular/common/http';
import {RequisitionService} from '../../../services/requisition.service';
import {RequisitionComponent} from '../requisition/requisition.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-requisition-list',
  templateUrl: './requisition-list.component.html',
  styleUrls: ['../../products/product-list/product-list.component.css']
})
export class RequisitionListComponent implements OnInit {
  request: string [];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['req','count','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(
    private Jarvis:JarvisService,
    private dialog: MatDialog,
    private service: RequisitionService,
    private excel: ExcelService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.Jarvis.getWaiting().subscribe(
      data =>{
        this.request = data as string[];
        this.listData = new MatTableDataSource(this.request);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    )
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initialiseFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(RequisitionComponent, dialogConfig);
  }

  onEdit(row) {
    const req = row.req
    const data = {
      "req": req
    }
    console.log(data)
    this.Jarvis.getDetails(data).subscribe(
      info =>{
        this.router.navigate(['/dashboard/details'], {queryParams: {data: JSON.stringify(info)}, skipLocationChange: true})
      }
    )
  }

  onDelete(id) {
    if (confirm('Are you sure you want to delete?')) {
      this.Jarvis.deleteRequisition(id).subscribe();
      // this.notification.warn('! Deleted successfully');
    }
  }

  exportAsXLSX() {
    this.Jarvis.allRequisitions().subscribe(
      data => {
        this.request = data as string [];
        this.excel.exportAsExcelFile(this.request, 'Requisitions');
      }
    );

  }

}
