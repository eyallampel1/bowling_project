
import { RouterLink, RouterModule, Router } from '@angular/router';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
bottomLabel: string;
inputUserName: string = "lampel";
inputPassword: string = "1234";
passFlag: boolean = false;
showAlert: boolean = false;
enterManegerApp = false;


 @Output() loginSucsess: EventEmitter<any> = new EventEmitter();

 constructor(private router: Router) { }

  ngOnInit() {
  }

public textInput(inputText: string): void {
this.bottomLabel = inputText;
}

public checkUserNameAndPassword(userName: string, password: string) {

if (this.inputPassword === password && this.inputUserName === userName ) {
    this.passFlag = true;
this.showAlert = true ;
    setTimeout(function() {
       this.showAlert = false;
       console.log(this.showAlert);
    //    this.router.navigate(['/page2']);
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
