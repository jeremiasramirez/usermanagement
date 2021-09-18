import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StartappComponent } from './startapp/startapp.component';



@NgModule({
  declarations: [
    HomeComponent,
    StartappComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HomeComponent,
    StartappComponent
  ]
})
export class PagesModule { }
