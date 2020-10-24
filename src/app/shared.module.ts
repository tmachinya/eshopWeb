import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatNativeDateModule,


} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ApolloModule} from 'apollo-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {Ng2Webstorage} from 'ngx-webstorage';
import {MessageComponent} from './message.component';
import {NotFoundComponent} from './notfound.component';
import {CommonModule} from '@angular/common';
import {VirtualScrollerModule} from 'ngx-virtual-scroller';
import {LoaderComponent} from './loader.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';


const components = [
  MessageComponent,
  NotFoundComponent,
  LoaderComponent
];


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRippleModule,
    MatTabsModule,
    HttpClientModule,
    MatGridListModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    Ng2Webstorage,
    VirtualScrollerModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatNativeDateModule,

  ],
  declarations: [
    ...components
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatChipsModule,
    MatRippleModule,
    MatTabsModule,
    HttpClientModule,
    MatGridListModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    Ng2Webstorage,
    VirtualScrollerModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatNativeDateModule,
    ...components
  ],
  entryComponents: []
})
export class SharedModule {}
