import {Component, OnInit, ViewChild} from '@angular/core';
import {JarvisService} from '../../services/jarvis.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AgGridNg2} from 'ag-grid-angular';
import {ExcelService} from '../../services/excel.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
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
        headerName: "Item Description",
        field:"description",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "Transaction",
        field:"transaction",
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
        headerName: "Transaction Date",
        field:"transaction_date",
        width:150,
        sortingOrder: ["asc","desc"]
      },
      {
        headerName: "By",
        field:"by",
        width:150,
        sortingOrder: ["asc","desc"]
      },
    ];
    this.sortingOrder = ["desc","asc",null]
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.Jarvis.allTransactions().subscribe(
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
    this.excel.exportAsExcelFile(this.dhata, 'Transactions');
  }

  ngOnInit() {
    this.Jarvis.allTransactions().subscribe(
      data =>{
        this.dhata = data as string [];
      }
    )
  }

}
