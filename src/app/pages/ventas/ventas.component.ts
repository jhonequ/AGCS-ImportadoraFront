import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DatosVentaService } from './datos-venta.service';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})

export class VentasComponent implements OnInit {

  datos: any[] = [];
  formVentas: FormGroup;

  constructor(private formBuild: FormBuilder, public datosVentaService: DatosVentaService) {
    this.formVentas = this.formBuild.group({
      codigoVenta: ['', Validators.required],
      producto: ['', Validators.required],
      telefono: ['', Validators.required],
      estadoProducto: ['', Validators.required],
      unidadesDisp: ['', Validators.required],
      comprador: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      direccionEntrega: ['', Validators.required],
      fechaRecepcion: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(): void {
    console.log("Hola!!!");
    this.datosVentaService.obtenerDatos().subscribe(
      datos => this.datos = datos,
      error => console.error(error)
    );
  }

  enviarFormulario(): void {
    if(this.formVentas.valid){
      const datosFormulario = this.formVentas.value;
      this.datosVentaService.crearDato(datosFormulario).subscribe(
        response => {
          console.log(response);
          this.obtenerDatos();
          this.formVentas.reset();
        },
        error => console.error(error)
      )
    }
  }

  actualizarDato(id: number): void {
    if(this.formVentas.valid){
      const datosFormulario = this.formVentas.value;
      this.datosVentaService.actualizarDato(id, datosFormulario).subscribe(
        response => {
          console.log(response);
          this.obtenerDatos();
          this.formVentas.reset();
        },
        error => console.error(error)
      );
    }
  }

  eliminarDato(id: number): void {
    this.datosVentaService.eliminarDato(id).subscribe(
      response => {
        console.log(response);
        this.obtenerDatos();
      },
      error => console.error(error)
    );
  }
}