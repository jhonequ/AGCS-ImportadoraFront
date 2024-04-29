import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent {

  constructor(private formBuild: FormBuilder) { }

  formProductos = this.formBuild.group({
    'idProducto': ['', Validators.required],
    'idCliente': ['', Validators.required],
    'nombreProducto': ['', Validators.required],
    'fotoProducto': ['', Validators.required],
    'precio': ['', Validators.required],
    'fechaCompra': ['', Validators.required],
    'estadoProducto': ['', [Validators.required]]
  });

  crearProducto() {
    console.log(this.formProductos.value);
  }

  get idProducto() {
    return this.formProductos.get('idProducto') as FormControl;
  }

  get idCliente() {
    return this.formProductos.get('idCliente') as FormControl;
  }

  get nombreProducto() {
    return this.formProductos.get('nombreProducto') as FormControl;
  }

  get precio() {
    return this.formProductos.get('precio') as FormControl;
  }

  get fechaCompra() {
    return this.formProductos.get('fechaCompra') as FormControl;
  }

  get estadoProducto() {
    return this.formProductos.get('estadoProducto') as FormControl;
  }

}
