
import { RouterLink, RouterModule, Router } from '@angular/router';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Http} from "@angular/http";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
bottomLabel: string;
inputUserName: string = "lampel";
inputPassword: string = "1234";
passFlag: boolean = false;
showAlert: boolean = false;
enterManegerApp = false;
items:FirebaseListObservable<any[]>;
myAngularFire:AngularFire;

 @Output() loginSucsess: EventEmitter<any> = new EventEmitter();

 constructor(private router: Router,private af:AngularFire) {
   this.items=af.database.list('/items');
   this.myAngularFire=af;
 }

  ngOnInit() {
  }

public textInput(inputText: string): void {
this.bottomLabel = inputText;
}

public checkUserNameAndPassword(userName: string, password: string) {
//try this shit 02.05.17
  let o = this.myAngularFire.database.object("/items/3");//bind to specific name
  o.set(userName);
 //this.items.push({Name:"3",Value:"1"});
// this.items.push({eyal:"1",lampel:userName});
this.items.forEach(item=>{
  console.log('Item:',item);
});

if (this.inputPassword === password && this.inputUserName === userName ) {
    this.passFlag = true;
this.showAlert = true ;
    setTimeout(function() {
       this.showAlert = false;
       console.log(this.showAlert);
    //    this.router.navigate(['/login']);
this.enterManegerApp = true;
 this.loginSucsess.emit(this.enterManegerApp);
   }.bind(this), 1500);

}else {
    this.passFlag = false;
this.showAlert = true ;
      setTimeout(function() {
       this.showAlert = false;
       console.log(this.showAlert);
   }.bind(this), 3000);
}

}





}
