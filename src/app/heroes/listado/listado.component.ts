import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroeBorrado: string = '';
  heroes: string[] = [
    'Spider Man',
    'Iron Man',
    'Hulk',
    'Thor',
    'Capitana Marvel',
  ];

  BorrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
