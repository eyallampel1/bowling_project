import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { loginComponent } from './main-window/login/login.component';
import { ManagerComponentComponent } from './main-window/login/manager-component/manager-component.component';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from './../environments/firebase.config';
import { PlayersNamesComponent } from './main-window/login/players-names/players-names.component';


const appRoutes: Routes = [
  { path: 'login', component: loginComponent },
  {path: '', component: MainWindowComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    loginComponent,
    ManagerComponentComponent,
    PlayersNamesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
