import { Component, EventEmitter, Output } from '@angular/core';

import { DbzService } from '../services/dbz.service';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    if (this.nuevo.nombre.trim().length == 0) {return;}
    
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo )

    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }

  constructor(private dbzService: DbzService) {}
}

