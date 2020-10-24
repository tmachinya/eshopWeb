import {Component, OnInit, ViewChild} from '@angular/core';
import {JarvisService} from "../../services/jarvis.service";
import {AgGridNg2} from "ag-grid-angular";
import {ExcelService} from "../../services/excel.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-dash-report',
  templateUrl: './dash-report.component.html',
  styleUrls: ['./dash-report.component.css']
})
export class DashReportComponent implements OnInit {
  @ViewChild('logGrid') logGrid: AgGridNg2;
  private gridApi;
  private gridColumnApi;
  private dhata:any;
  columnDefs;
  sortingOrder;
  searchValue;

  constructor(
    private  Jarvis: JarvisService,
    private excel: ExcelService
  )
  {
    this.columnDefs = [
      {
        headerName: "Requisition Number",
        field:"req",
        width:150,
        sortingOrder: ["asc","desc"],
        rowDrag: true
      },
      {
        headerName: "Item Code",
        field:"code",
        width:150,
        sortingOrder: ["asc","desc"],
        rowDrag: true,
        checkboxSelection: true
      },
      {
        headerName: "Item Name",
        field:"name",
        width:150,
        sortingOrder: ["asc","desc"],
        rowDrag: true
      },
      {
        headerName: "Date Created",
        field:"created_at",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Last Updated",
        field:"updated_at",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Quantity",
        field:"quantity",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Status",
        field:"status",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "By",
        field:"by",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Comment",
        field:"comment",
        width:150,
        sortingOrder: ["asc","desc"]
      },
    ];
    this.sortingOrder = ["desc","asc",null]
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const depart = localStorage.getItem('department');
    const obj = {
      department: depart
    }
    this.Jarvis.dashboardReport(obj).subscribe(
      data =>{
        params.api.setRowData(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  quickSearch(){
    this.gridApi.setQuickFilter(this.searchValue);
  }

  getSelectedRows(){
    const selectedNodes = this.logGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => 'code:'+node.code + ' ' + 'supplier:'+node.supplier).join(', ');
    alert(`Selected Records are : ${selectedDataStringPresentation}`);
  }

  exportAsXLSX():void {
    this.excel.exportAsExcelFile(this.dhata, 'Departmental Report');
  }

  ngOnInit() {
    // this.Jarvis.dashboardReport().subscribe(
    //   data =>{
    //     this.dhata = data as string [];
    //   }
    // )
  }

}
