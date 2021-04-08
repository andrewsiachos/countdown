import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(){}
  days: number = 90;
  hours: number = 23;
  minutes: number = 55;
  seconds: number = 41;

  handleInterval:any;

  ngOnInit(){
    this.handleInterval = setInterval(()=>{this.tick()}, 1000);
  }



  tick(){
    this.seconds--;

    if(this.seconds < 0){
      this.seconds = 59;
      this.minutes--;
    }

    if(this.minutes < 0){
      this.minutes = 59;
      this.hours--;
    }

    if(this.hours < 0){
      this.hours = 24;
      this.days--;
    }
    if(this.days < 0 ){
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }
}
