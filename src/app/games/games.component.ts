import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      @for (game of games; track game.id) {
        <li>{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  games = [
    {
      id: 1,
      name: 'Super Mario Bros'
    },
    {
      id: 2,
      name: 'The Legend of Zelda'
    },
    {
      id: 3,
      name: 'Metroid'
    }
  ];
}
