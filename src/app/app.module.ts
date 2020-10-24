import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home.component';
import {AppRoutingModule} from './app.router';
import {SharedModule} from './shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthComponent } from './auth.component';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MapComponent} from './map.component';
import { DashboardComponent } from './dashboard.component';
import { LabsComponent } from './labs.component';
import {LabsListComponent} from './labs.list.component';
import { LabDetailComponent } from './lab-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TransactionsComponent } from './material/transactions/transactions.component';
import {AgGridModule} from 'ag-grid-angular';
import { ProductsComponent } from './material/products/products.component';
import { ProductComponent } from './material/products/product/product.component';
import { ProductListComponent } from './material/products/product-list/product-list.component';
import {JarvisService} from './services/jarvis.service';
import {ExcelService} from './services/excel.service';
import {ProductService} from './services/product.service';
import { PurchasesComponent } from './material/purchases/purchases.component';
import { SnapshotComponent } from './material/snapshot/snapshot.component';
import { RequisitionsComponent } from './material/requisitions/requisitions.component';
import { RequisitionComponent } from './material/requisitions/requisition/requisition.component';
import { RequisitionListComponent } from './material/requisitions/requisition-list/requisition-list.component';
import {RequisitionService} from './services/requisition.service';
import { SearchComponent } from './material/search/search.component';
import { CostComponent } from './material/reports/cost/cost.component';
import { AdminComponent } from './admins/admin/admin.component';
import { AdminListComponent } from './admins/admin-list/admin-list.component';
import { InitiateComponent } from './material/initiate/initiate.component';
import { PendingComponent } from './material/pending/pending.component';
import { DetailsComponent } from './material/details/details.component';
import { WarehouseComponent } from './material/warehouse/warehouse.component';
import { WarehouseApprovalComponent } from './material/warehouse-approval/warehouse-approval.component';
import { ExpReportComponent } from './material/exp-report/exp-report.component';
import { ExpendituresearchedComponent } from './material/expendituresearched/expendituresearched.component';
import { EditQuantityComponent } from './material/dialogues/edit-quantity/edit-quantity.component';
import { DashReportComponent } from './material/dash-report/dash-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    AuthComponent,
    MapComponent,
    DashboardComponent,
    LabsComponent,
    LabsListComponent,
    LabDetailComponent,
    TransactionsComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    PurchasesComponent,
    SnapshotComponent,
    RequisitionsComponent,
    RequisitionComponent,
    RequisitionListComponent,
    SearchComponent,
    CostComponent,
    AdminComponent,
    AdminListComponent,
    InitiateComponent,
    PendingComponent,
    DetailsComponent,
    WarehouseComponent,
    WarehouseApprovalComponent,
    ExpReportComponent,
    ExpendituresearchedComponent,
    EditQuantityComponent,
    DashReportComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [JarvisService, ExcelService, ProductService, RequisitionService],
  bootstrap: [AppComponent],
  entryComponents: [ProductComponent, RequisitionComponent, SearchComponent, AdminComponent, EditQuantityComponent],
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .registerFontClassAlias('fontawesome', 'fa')
      .registerFontClassAlias('mdi', 'mdi-set')
      .addSvgIcon('place_user_offline', sanitizer.bypassSecurityTrustResourceUrl('assets/placeholder-user-offline.svg'))
      .addSvgIcon('place_user_online', sanitizer.bypassSecurityTrustResourceUrl('assets/placeholder-user-online.svg'));
  }
}
