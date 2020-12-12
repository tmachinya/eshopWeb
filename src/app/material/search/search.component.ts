import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {JarvisService} from "../../services/jarvis.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categories: string [];
  departments: string [];
  products: string [];

  constructor(
  public service: SearchService,
  private router: Router,
  private Jarvis: JarvisService,
  ) { }

  ngOnInit() {
    this.Jarvis.allCategories().subscribe(
      data =>{
        this.categories = data as string [];
      }
    )
    this.Jarvis.allDepartments().subscribe(
      data =>{
        this.departments = data as string [];
      }
    )
    this.Jarvis.allProducts().subscribe(
      data => {
        this.products = data as string [];
      }
    )
  }

  onSubmit()
  {
    let data: any = this.service.formSearch.value
    if(this.service.formSearch.value.category=='everything'){
      this.router.navigate(['/dashboard/master'], {queryParams: {data: JSON.stringify(data)}, skipLocationChange: true})
    }
    else{
      this.router.navigate(['/dashboard/cost'], {queryParams: {data: JSON.stringify(data)}, skipLocationChange: true})
      this.service.formSearch.reset();
    }
  }

}
