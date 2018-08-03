import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { ListItemComponent } from './list-item/list-item.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColorChangeComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
