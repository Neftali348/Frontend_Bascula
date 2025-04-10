import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menuItems = [
    { label: 'Cuentas', route: '/cafetito/cuentas' },
    { label: 'Pesajes', route: '/cafetito/pesajes' },
    { label: 'Transportes', route: '/cafetito/transportes' },
    { label: 'Transportistas', route: '/cafetito/transportistas' },
    { label: 'Agricultores', route: '/cafetito/agricultores' }
  ];
}
