import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { ImportacionesComponent } from './pages/importaciones/importaciones.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component:DashboardComponent},
  {path:'iniciar-sesion', component:LoginComponent},
  {path:'ventas', component:VentasComponent},
  {path:'importaciones', component:ImportacionesComponent},
  {path:'productos', component:ProductosComponent},
  {path:'usuario', component:UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
