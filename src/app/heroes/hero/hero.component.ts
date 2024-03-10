import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "ironman";
  public age: number = 45;

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescrption(): string{

    return `${this.name} - ${this.age}`;
  }

  getChangeNameHero(): void{
    this.name = "Spiderman";

    //throw "metodo no implementado" para cuando no se termina un metodo
  }

  getChangeAge(): void{
    this.age = 25;
  }

  resetForm(): void{
    this.name = "Ironman";
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }






}
