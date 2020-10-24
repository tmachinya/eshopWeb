import {Component, OnInit, ViewChild} from '@angular/core';
import {JarvisService} from "../../services/jarvis.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ExcelService} from "../../services/excel.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AdminComponent} from "../admin/admin.component";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  users: string []
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name','email', 'department', 'division','roles','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  constructor(
    private Champion: JarvisService,
    private dialog: MatDialog,
    private service: AdminService,
    private excel: ExcelService
  ) { }

  ngOnInit() {
    this.Champion.allUsers().subscribe(
      data => {
        this.users = data as string []
        this.listData = new MatTableDataSource(this.users);
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
    this.dialog.open(AdminComponent, dialogConfig);
  }

  onEdit(row) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = row;
    this.dialog.open(AdminComponent, dialogConfig);
  }

  exportAsXLSX() {
    this.Champion.allUsers().subscribe(
      data => {
        this.users = data as string [];
        this.excel.exportAsExcelFile(this.users, 'Users');
      }
    );

  }



}
