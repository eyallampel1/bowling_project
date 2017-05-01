import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
showLoginComponent=false;
  constructor() { }

  ngOnInit() {
  }

public checkIfClicked(): void {
console.debug("click maneger");
this.showLoginComponent=true;
}

}
