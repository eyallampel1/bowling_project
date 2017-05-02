import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
showLoginComponent=false;
showManeger=false;
  clickDropDownFlag=false;
  constructor() { }

  ngOnInit() {
  }

public checkIfClicked(): void {
console.debug("click maneger");
this.showLoginComponent=true;
}

public showManegerdisbleLogin(event:boolean):void {
    console.log("Event emitted from child to Parent Function");
    this.showManeger=event;
    this.showLoginComponent=false;

}

}
