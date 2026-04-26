import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para o [class]
import { RouterLink } from '@angular/router'; // Importante para navegação interna

@Component({
  selector: 'app-home',
  standalone: true, // Garanta que está como standalone
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}