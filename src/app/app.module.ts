import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { Page2Component } from './main-window/page2/page2.component';





const appRoutes: Routes = [
  { path: 'page2', component: Page2Component },
  {path: '', component: MainWindowComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
