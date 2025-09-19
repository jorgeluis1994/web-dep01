import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/components/login/login";
import { Register } from "./login/components/register/register";

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'we-forms-mag';

   openedSection: number | null = 1; // Abre el login por defecto

  // Puedes añadir métodos si quieres manejar validaciones
  login() {
    alert('Login ejecutado');
  }

  register() {
    alert('Registro ejecutado');
  }
}
