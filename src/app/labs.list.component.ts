import {
  Component,
  EventEmitter, OnInit,
  Output
} from '@angular/core';
import {ChangeEvent} from 'ngx-virtual-scroller';
import {from, Observable} from 'rxjs';
import {JarvisService} from './services/jarvis.service';
import {MatDialog} from "@angular/material/dialog";
import {SearchComponent} from "./material/search/search.component";


export interface Lab {
  id ?: number;
  name ?: string;
  description ?: string;
}

export const SAMPLE_DATA = [
  {
    id: 1,
    name: 'Product Details',
    description: 'products, their codes and details...'},
  {
    id: 2,
    name: 'Transactions',
    description: 'these are all sales transactions'},
  {
    id: 3,
    name: 'Stock Level',
    description: 'stock, quantity of items in our stock...'},
  {
    id: 4,
    name: 'Requisitions Approval',
    description: 'Requests, these are the requests made by the branches...'},
  {
    id: 5,
    name: 'Warehouse Approval',
    description: 'Warehouse, these are items awaiting approvals'},
];

@Component({
 selector: 'app-labs-list',
 templateUrl: './labs.list.component.html',
 styleUrls: ['./labs.list.component.css']
})
export class LabsListComponent implements OnInit {

  private limit = 50;
  transacts: any;

  @Output() onItemSelected = new EventEmitter<Lab>();

  currentId: number;
  buffer: Lab[] = [];
  loading: boolean;
  searchText: string;

  constructor(
    private Jarvis: JarvisService,
    private dialog: MatDialog
  ) {
  }

  onListChange(event: ChangeEvent) {

    if (event.end !== this.buffer.length) {
      return;
    }

    this.loading = true;
    this.fetchNextChunk(this.buffer.length, this.limit)
      .subscribe(chunk => {
        this.buffer.push(chunk);
        this.loading = false;
      }, err => console.log(err), () => this.loading = false);

  }


  fetchNextChunk(fromIndex: number, limit: number): Observable<Lab> {

    return from(SAMPLE_DATA);

  }


  selectItem(item: any) {

    this.currentId = item.id;
    this.onItemSelected.emit(item);

  }


  isSelected(item: Lab): boolean {

    return this.currentId && this.currentId == item.id;

  }


  public refresh(): void {

    this.loading = true;
    this.buffer = [];

    this.fetchNextChunk(0, this.limit)
      .subscribe(
        {
          next: response => this.buffer.push(response),
          error: err => this.loading = false,
          complete: () => this.loading = false
        }
      );

  }


  public setCurrentId(id: number): void {

    this.currentId = id;

  }


  ngOnInit(): void {
    this.Jarvis.allTransactions().subscribe(
      data =>{
        this.transacts = data as string [];
        // console.log(this.transacts);
      }
    )
    this.refresh();
  }

  onSearch()
  {
    this.dialog.open(SearchComponent);
  }

}
