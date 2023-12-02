import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  username = 'Ilan';
  isLoggedIn = false;  // <- Esto esta funcionando como un estado

  greet() {
    confirm(`Hola ${this.username}`);
  }
}
