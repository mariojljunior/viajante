import { Component, inject } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  menuAberto = false;

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

}
