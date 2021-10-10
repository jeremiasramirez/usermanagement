import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTES } from './routes/route.app';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PagesModule, ROUTES, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
