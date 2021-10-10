import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StartappComponent } from './startapp/startapp.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
// import { ServiceApp } from '../services/service.app';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    HomeComponent,
    StartappComponent,
   
    // ServiceApp
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    // ServicesModule
    MatProgressBarModule
  ],
  exports: [
    CommonModule,
    HomeComponent,
    StartappComponent,
    MatFormFieldModule,
    BrowserModule,
    MatProgressSpinnerModule,
    // ServicesModule,
    MatProgressBarModule
  
  ]
})
export class PagesModule { }
