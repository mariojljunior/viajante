import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para o [class]
import { RouterLink } from '@angular/router'; // Importante para navegação interna
import { DefaultLoginLayout } from '../default-login-layout/default-login-layout';

@Component({
  selector: 'app-home',
  standalone: true, // Garanta que está como standalone
  imports: [CommonModule, RouterLink, DefaultLoginLayout],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}