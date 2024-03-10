import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="reset()">reset</button>
  `
})

export class CounterComponent  {
  public counter: number =  10



  public increaseBy(value: number): void{
    this.counter += value;
  }

  public reset():void{
     this.counter = 10;
  }

}
