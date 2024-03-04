import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-testing';
  counter: number = 0;

  public increment(): void {
    this.counter++;
  }
  
  public decrement(): void {
    this.counter--;
  }
}
