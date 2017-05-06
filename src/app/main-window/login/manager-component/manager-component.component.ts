import { Component, OnInit } from '@angular/core';
import {withIdentifier} from "codelyzer/util/astQuery";

@Component({
  selector: 'app-manager-component',
  templateUrl: './manager-component.component.html',
  styleUrls: ['./manager-component.component.css']
})
export class ManagerComponentComponent implements OnInit {
  public warningLabel:string= '';
  public player1Name:string= '';
  public player2Name:string= '';
  public player3Name:string= '';
  private game1Player1: number = 0;
  private game2Player1: number = 0;
  private game3Player1: number = 0;

  private game1Player2: number = 0;
  private game2Player2: number = 0;
  private game3Player2: number = 0;

  private game1Player3: number = 0;
  private game2Player3: number = 0;
  private game3Player3: number = 0;

  private player1Total: number = 0;


  player1Game2FocusFlag=true;

  constructor() { }

  ngOnInit() {
  }

  public setGame1Player1(inputString: string): void {

    this.game1Player1 = +inputString; ///+ sign just do staring to number conversion!!
    // debugger; //stop console and debuge
   console.log(this.game1Player1);
    // this.game1Player1 = +(<HTMLInputElement>event.target).value;
// if (this.game1Player1.toString().length > 2) {
    if (this.game1Player1 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game1Player1 = 0;
    }else if (this.game1Player1.toString().length === 3  && this.game1Player1 <= 300) {
      // player1Game2.focus;

      document.getElementById('player1Game2').focus();

    }else {
      this.warningLabel = '';
      // document.getElementById('player1Game1').style.color = '#000000' ;
    }
  }

  public setGame2Player1(inputString: string): void {

    this.game2Player1 = +inputString; ///+ sign just do staring to number conversion!!
// if (this.game1Player1.toString().length > 2) {
    if (this.game2Player1 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game2Player1 = 0;

    }else if (this.game2Player1.toString().length === 3  && this.game2Player1 <= 300) {
      document.getElementById('player1Game3').focus();

    }else {
      this.warningLabel = '';

    }
  }


  public setGame3Player1(inputString: string): void {

    this.game3Player1 = +inputString; ///+ sign just do staring to number conversion!!
// if (this.game1Player1.toString().length > 2) {
    if (this.game3Player1 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game3Player1 = 0;

    }else if (this.game3Player1.toString().length === 3  && this.game3Player1 <= 300) {
      document.getElementById('player2Game1').focus();

    }else {
      this.warningLabel = '';

    }
  }


  public setGame1Player2(inputString: string): void {

    this.game1Player2 = +inputString; ///+ sign just do staring to number conversion!!
// if (this.game1Player2.toString().length > 2) {
    if (this.game1Player2 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game1Player2 = 0;
    }else if (this.game1Player2.toString().length === 3  && this.game1Player2 <= 300) {
      document.getElementById('player2Game2').focus();
    }else {
      this.warningLabel = '';
    }
  }

  public setGame2Player2(inputString: string): void {

    this.game2Player2 = +inputString; ///+ sign just do staring to number conversion!!
// if (this.game1Player2.toString().length > 2) {
    if (this.game2Player2 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game2Player2 = 0;
    }else if (this.game2Player2.toString().length === 3  && this.game2Player2 <= 300) {
      document.getElementById('player2Game3').focus();
    }else {
      this.warningLabel = '';
    }
  }


  public setGame3Player2(inputString: string): void {

    this.game3Player2 = +inputString; ///+ sign just do staring to number conversion!!
// if (this.game1Player2.toString().length > 2) {
    if (this.game3Player2 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game3Player2 = 0;
    }else if (this.game3Player2.toString().length === 3  && this.game3Player2 <= 300) {
      document.getElementById('player3Game1').focus();
    }else {
      this.warningLabel = '';

    }
  }

  public setGame1Player3(inputString: string): void {

    this.game1Player3 = +inputString; ///+ sign just do staring to number conversion!!
// if (this.game1Player2.toString().length > 2) {
    if (this.game1Player3 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game1Player3 = 0;
    }else if (this.game1Player3.toString().length === 3  && this.game1Player3 <= 300) {
      document.getElementById('player3Game2').focus();
    }else {
      this.warningLabel = '';
    }
  }

  public setGame2Player3(inputString: string): void {

    this.game2Player3 = +inputString; ///+ sign just do staring to number conversion!!
// if (this.game1Player2.toString().length > 2) {
    if (this.game2Player3 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game2Player3 = 0;
    }else if (this.game2Player3.toString().length === 3  && this.game2Player3 <= 300) {
      document.getElementById('player3Game3').focus();
    }else {
      this.warningLabel = '';
    }
  }

  public setGame3Player3(inputString: string): void {

    this.game3Player3 = +inputString; ///+ sign just do staring to number conversion!!
// if (this.game1Player2.toString().length > 2) {
    if (this.game3Player3 > 300) {
      this.warningLabel = 'Dont input a number Greater then 300!!';
      this.game3Player3 = 0;
    }else if (this.game3Player3.toString().length === 3  && this.game3Player3 <= 300) {
  //    document.getElementById('Player2Game3').focus();
      console.log("the end");
    }else {
      this.warningLabel = '';
    }
  }

  public sum3Games(event: Event): void {

    this.player1Total = this.game1Player1 + this.game2Player1 + this.game3Player1;

  }

  public getPlayer1Score(): string {
    return '' + this.game1Player1;
  }

}




