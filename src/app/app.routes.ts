import { Routes } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'login', component: LoginComponent },
   { path: 'menu', component: MenuComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
  })

  

export class AppRoutingModule { }