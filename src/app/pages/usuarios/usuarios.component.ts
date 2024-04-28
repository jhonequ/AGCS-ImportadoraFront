import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  constructor(private formBuild: FormBuilder) { }

  formUsuarios = this.formBuild.group({
    'nombreCompleto': ['', Validators.required],
    'fechaNacimiento': ['', Validators.required],
    'tipoDoc': ['', Validators.required],
    'nit': ['', Validators.required],
    'password': ['', Validators.required],
    'direccion': ['', Validators.required],
    'correo': ['', [Validators.required, Validators.email]],
    'telefono': ['', Validators.required],
    'rol': ['', Validators.required]
  });

  crearUsuario() {
    console.log(this.formUsuarios.value);
  }

  get codigoVenta() {
    return this.formUsuarios.get('nombreCompleto') as FormControl;
  }

  get producto() {
    return this.formUsuarios.get('fechaNacimiento') as FormControl;
  }

  get telefono() {
    return this.formUsuarios.get('tipoDoc') as FormControl;
  }

  get estadoProducto() {
    return this.formUsuarios.get('nit') as FormControl;
  }

  get unidadesDisp() {
    return this.formUsuarios.get('password') as FormControl;
  }

  get comprador() {
    return this.formUsuarios.get('direccion') as FormControl;
  }

  get correo() {
    return this.formUsuarios.get('correo') as FormControl;
  }

  get direccionEntrega() {
    return this.formUsuarios.get('telefono') as FormControl;
  }

  get fechaRecepcion() {
    return this.formUsuarios.get('rol') as FormControl;
  }

}
