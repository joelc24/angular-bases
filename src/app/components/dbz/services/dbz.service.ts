import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Array<Personaje> = [
    {
      nombre:  'Goku',
      poder: 15_000
    },
    {
      nombre:  'Vegeta',
      poder: 7_500
    },
  ]

  
  public get personajes() : Personaje[] {
    return [...this._personajes]
  }
  

  constructor() {
    
  }

  agregarPersonaje( personaje: Personaje ){
    this._personajes.push(personaje)
  }

  
}
