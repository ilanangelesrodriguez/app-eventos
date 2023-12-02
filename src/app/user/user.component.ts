import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from '../games/games.component';
import { CommentsComponent } from '../comments/comments.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent, CommentsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  username = 'Ilan';
  isLoggedIn = false;  // <- Esto esta funcionando como un estado
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    console.log(`Hola ${this.username}`);
  }

}
