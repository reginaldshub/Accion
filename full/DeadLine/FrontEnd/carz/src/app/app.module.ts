import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import{MatToolbarModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule
,MatButtonModule,MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, } from "@angular/material";
  import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule
  } from '@angular/material';
  
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent},
  { path: 'edit', component: EditComponent},
  { path: 'edit/:_id', component: EditComponent},
  { path: '', redirectTo:'home', pathMatch : 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    EditComponent
  ],
  imports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatSliderModule,
    NgxPaginationModule,
    MatTooltipModule,
    MatRadioModule,
    FilterPipeModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule
    ,MatButtonModule,MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
