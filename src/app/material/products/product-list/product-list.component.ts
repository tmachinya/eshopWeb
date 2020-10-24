import {Component, OnInit, ViewChild} from '@angular/core';
import {JarvisService} from '../../../services/jarvis.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ProductService} from '../../../services/product.service';
import {ExcelService} from '../../../services/excel.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {HttpErrorResponse} from '@angular/common/http';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product_detail: string [];
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['code', 'name', 'description','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(
    private Jarvis:JarvisService,
    private dialog: MatDialog,
    private service: ProductService,
    private excel: ExcelService
  ) { }

  ngOnInit() {
    this.Jarvis.allProducts().subscribe(
      data =>{
        this.product_detail = data as string[];
        this.listData = new MatTableDataSource(this.product_detail);
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
    this.dialog.open(ProductComponent, dialogConfig);
  }

  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.dialog.open(ProductComponent, dialogConfig);
  }

  onDelete(id) {
    if (confirm('Are you sure you want to delete?')) {
      this.Jarvis.deleteProduct(id).subscribe();
      // this.notification.warn('! Deleted successfully');
    }
  }

  exportAsXLSX() {
    this.Jarvis.allProducts().subscribe(
      data => {
        this.product_detail = data as string [];
        this.excel.exportAsExcelFile(this.product_detail, 'Product_Detail');
      }
    );

  }



}
