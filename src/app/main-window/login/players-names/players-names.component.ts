import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-players-names',
  templateUrl: './players-names.component.html',
  styleUrls: ['./players-names.component.css']
})



export class PlayersNamesComponent implements OnInit {
items:FirebaseListObservable<any[]>;//this is our database we can retrive items from her
teams:FirebaseListObservable<any[]>;//this is our database we can retrive items from her
myAngularFire: AngularFire;


 Players = [
    {teamNumber: 0, playerName : 'dummy'}
];

index: number = 0;
playersNames:string[];
playerTeamNumbers: number[];
  constructor(private af:AngularFire) {
    this.teams=af.database.list('/teams');
    this.items=af.database.list('/items');

   this.myAngularFire = af;
    this.Players.splice(0); // remove dummy
  }




  ngOnInit() {
  }

public addPlayer(name: string) {
  this.index += 1;

// this.items.push({name:name,teamNumber:this.index});
 let o = this.myAngularFire.database.object("/teams/"+this.index);//bind to specific name
  // o.set(name);//push to firebase
o.set({PlayerName: name, TeamNumber: this.index});//push to firebase

  this.Players.push({teamNumber: this.index , playerName: name} );
// 
// this.playersNames.push(name);
// this.playerTeamNumbers.push(this.index);


}

public log() {
  console.log("mouse is hovering!@");
}

}
