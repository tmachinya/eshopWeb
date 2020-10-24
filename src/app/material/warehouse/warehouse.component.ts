import {Component, OnInit, ViewChild} from '@angular/core';
import {JarvisService} from "../../services/jarvis.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RequisitionService} from "../../services/requisition.service";
import {ExcelService} from "../../services/excel.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {RequisitionComponent} from "../requisitions/requisition/requisition.component";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['../products/product-list/product-list.component.css']
})
export class WarehouseComponent implements OnInit {
  warehouse: string [];
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
    this.Jarvis.getWarehouse().subscribe(
      data =>{
        this.warehouse = data as string[];
        this.listData = new MatTableDataSource(this.warehouse);
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
  }

  onEdit(row) {
    const req = row.req
    const data = {
      "req": req
    }
    console.log(data)
    this.Jarvis.getDetails(data).subscribe(
      info =>{
        this.router.navigate(['/dashboard/warehouse'], {queryParams: {data: JSON.stringify(info)}, skipLocationChange: true})
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
        this.warehouse = data as string [];
        this.excel.exportAsExcelFile(this.warehouse, 'Requisitions');
      }
    );

  }

}
