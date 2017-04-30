
import { RouterLink, RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
bottomLabel: string;
inputUserName: string = "lampel";
inputPassword: string = "1234";
passFlag: boolean = false;
showAlert: boolean = false;




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
       this.router.navigate(['/page2']);
   }.bind(this), 3000);

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
