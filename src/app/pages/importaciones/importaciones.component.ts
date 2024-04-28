import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-importaciones',
  templateUrl: './importaciones.component.html',
  styleUrl: './importaciones.component.css'
})
export class ImportacionesComponent {

  constructor(private formBuild: FormBuilder) { }

  formImportaciones = this.formBuild.group({
    'idUsuario': ['', Validators.required],
    'idProducto': ['', Validators.required],
    'idVenta': ['', Validators.required],
    'estado': ['', Validators.required],
    'fecha': ['', Validators.required],
    'cantidad': ['', Validators.required]
  });

  crearImportacion() {
    console.log(this.formImportaciones.value);
  }

  get idUsuario() {
    return this.formImportaciones.get('idUsuario') as FormControl;
  }

  get idProducto() {
    return this.formImportaciones.get('idProducto') as FormControl;
  }

  get idVenta() {
    return this.formImportaciones.get('idVenta') as FormControl;
  }
  
  get estado() {
    return this.formImportaciones.get('estado') as FormControl;
  }

  get fecha() {
    return this.formImportaciones.get('fecha') as FormControl;
  }

  get cantidad() {
    return this.formImportaciones.get('cantidad') as FormControl;
  }
  

}
