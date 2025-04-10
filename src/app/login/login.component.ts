import { Component, inject } from '@angular/core';
import { AuthService } from '../Services/authservice';
import { LoginUsuarioDto } from '../Dtos/login-usuario.dto';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Agrega cualquier módulo necesario aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService = inject(AuthService); // Usa inject para obtener AuthService
  private router = inject(Router);
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor() {}

  login(): void {
    const loginData: LoginUsuarioDto = { 
      nombre: this.username, // Assuming 'nombre' corresponds to 'username'
      contrasenia: this.password // Assuming 'contrasenia' corresponds to 'password'
    };
    this.authService.login(loginData).subscribe(
      (response) => {
        console.log('Login exitoso:', response);
            localStorage.setItem('token', response); // Guardar el token
            this.router.navigate(['/menu']); // Redirigir al menú
        },
        (error) => {
          console.error('Error de inicio de sesión:', error); // Manejar el error
          this.errorMessage = 'Credenciales inválidas';
          // Verificar si el error tiene un código específico
          if (error.status === 400) { // Por ejemplo, 401 para credenciales inválidas
            Swal.fire({
                title: '¡Error!',
                text: 'Credenciales inválidas. Por favor, inténtalo de nuevo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else {
            // Manejar otros tipos de errores
            Swal.fire({
                title: '¡Error!',
                text: 'Ocurrió un error inesperado. Intenta nuevamente más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
      }
    );
  }
}
