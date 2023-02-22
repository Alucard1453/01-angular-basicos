import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor( private dbzService: DbzService ){}

  // personajes: Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre: 'Vegueta',
  //     poder: 7500
  //   }
  // ];

  // nuevo: Personaje = {
  //   nombre: 'Maestro Roshi',
  //   poder: 1000
  // }

  // agregarNuevoPersonaje( event: Personaje){
  //   this.personajes.push(event);
  // }

  // constructor(private dbzService:DbzService){}
  
}
