import {
 NgModule
} from '@angular/core';
import {
 RouterModule,
 Routes
} from '@angular/router';
import {LandingComponent} from './landing.component';
import {NotFoundComponent} from './notfound.component';
import {HomeComponent} from './home.component';
import {LabsComponent} from './labs.component';
import {LabDetailComponent} from './lab-detail.component';
import {TransactionsComponent} from './material/transactions/transactions.component';
import {ProductListComponent} from './material/products/product-list/product-list.component';
import {CostComponent} from "./material/reports/cost/cost.component";
import {AdminListComponent} from "./admins/admin-list/admin-list.component";
import {InitiateComponent} from "./material/initiate/initiate.component";
import {PendingComponent} from "./material/pending/pending.component";
import {DetailsComponent} from "./material/details/details.component";
import {WarehouseApprovalComponent} from "./material/warehouse-approval/warehouse-approval.component";
import {SearchComponent} from "./material/search/search.component";
import {ExpendituresearchedComponent} from "./material/expendituresearched/expendituresearched.component";
import {DashReportComponent} from "./material/dash-report/dash-report.component";


const appRoutes: Routes = [

 { path: '', component: LandingComponent, pathMatch: 'full' },
 { path: 'dashboard', component: HomeComponent,
   children: [
     { path: '', component: DashReportComponent },
     { path: 'transactions', component: TransactionsComponent },
     { path: 'product', component: ProductListComponent },
     { path: 'cost', component: CostComponent },
     { path: 'administration', component: AdminListComponent },
     { path: 'details', component: DetailsComponent },
     { path: 'warehouse', component: WarehouseApprovalComponent },
     { path: 'initiate', component: InitiateComponent,
       children: [
         { path: ':id', component: PendingComponent },
       ],
     },
     { path: 'search', component: SearchComponent,
       children: [
         { path: ':id', component: ExpendituresearchedComponent },
       ],
     },
     { path: 'labs', component: LabsComponent,
       children: [
         { path: ':id', component: LabDetailComponent },
       ] },
     { path: '**', component: NotFoundComponent }
   ]
 },
 { path: '**', component: NotFoundComponent }
];

@NgModule({
 imports: [
 RouterModule.forRoot( appRoutes, { enableTracing: true , useHash: true})
 ],
 exports: [
  RouterModule
]
})
export class AppRoutingModule {}
