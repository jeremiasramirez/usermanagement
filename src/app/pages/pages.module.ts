import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StartappComponent } from './startapp/startapp.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    HomeComponent,
    StartappComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [
    CommonModule,
    HomeComponent,
    StartappComponent,
    MatFormFieldModule,
    BrowserModule
  
  ]
})
export class PagesModule { }
