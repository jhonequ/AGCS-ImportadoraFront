import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {

  constructor(private formBuild: FormBuilder) { }

  formVentas = this.formBuild.group({
    'codigoVenta': ['', Validators.required],
    'producto': ['', Validators.required],
    'telefono': ['', Validators.required],
    'estadoProducto': ['', Validators.required],
    'unidadesDisp': ['', Validators.required],
    'comprador': ['', Validators.required],
    'correo': ['', [Validators.required, Validators.email]],
    'direccionEntrega': ['', Validators.required],
    'fechaRecepcion': ['', Validators.required]
  });

  crearVenta() {
    console.log(this.formVentas.value);
  }

  get codigoVenta() {
    return this.formVentas.get('codigoVenta') as FormControl;
  }

  get producto() {
    return this.formVentas.get('producto') as FormControl;
  }

  get telefono() {
    return this.formVentas.get('telefono') as FormControl;
  }

  get estadoProducto() {
    return this.formVentas.get('estadoProducto') as FormControl;
  }

  get unidadesDisp() {
    return this.formVentas.get('unidadesDisp') as FormControl;
  }

  get comprador() {
    return this.formVentas.get('comprador') as FormControl;
  }

  get correo() {
    return this.formVentas.get('correo') as FormControl;
  }

  get direccionEntrega() {
    return this.formVentas.get('direccionEntrega') as FormControl;
  }

  get fechaRecepcion() {
    return this.formVentas.get('fechaRecepcion') as FormControl;
  }





}