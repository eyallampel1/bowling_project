import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
showLoginComponent=false;
debug=false;
  constructor() { }

  ngOnInit() {
  }

public checkIfClicked(): void {
console.debug("click maneger");
this.showLoginComponent=true;
}

public showOrNot(e):void {
    console.debug("enter Event Parent Function")
    this.debug=e;
}

}
