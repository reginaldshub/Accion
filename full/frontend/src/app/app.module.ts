import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { LandingComponent } from './landing/landing.component'; 

const routes: Routes=[
  {path:'list',component:ListComponent},
  {path:'searchresults',component:SearchresultsComponent},
  {path:'',component:CreateComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    SearchresultsComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes), NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
