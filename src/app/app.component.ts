// Import the native Angular services.
import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { timer } from 'rxjs';

@Component({
selector: 'app-root',
template:
  `

  <button (click)="startTimer( '999' )">notification 1</button>
  <button (click)="startTimer( '2' )">notification 2</button>
  <button (click)="startTimer( '3' )">notification 3</button>
  `
})
export class AppComponent {

  timerInterval: any;
  changeTitle: boolean = true;

  public constructor(
    private titleService: Title) { 
  } 

  public startTimer(notificationCount: Number) {

    clearInterval(this.timerInterval);


    this.timerInterval = setInterval(() => {
      if (this.changeTitle) {
        this.changeTabTitle(`(${notificationCount}) Watermelon Dashboard`);
        this.changeTitle = false;
      } else {
        if (notificationCount == 1) {
          this.changeTabTitle(`You have ${notificationCount} new message.`)
        } else {
          this.changeTabTitle(`You have ${notificationCount} new messages.`)
        }
        this.changeTitle = true;
      }
    }, 1000)

  }

  public stopTimer() {
    clearInterval(this.timerInterval)
  }

  changeTabTitle(title:string){
    this.titleService.setTitle(title);
  }

}