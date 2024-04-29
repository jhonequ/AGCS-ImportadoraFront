import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = '';

@Injectable({
  providedIn: 'root'
})

export class DatosVentaService {

  baseUrl = 'http://localhost:8080/api/proyectoAGCS';

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  crearDato(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  actualizarDato(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

  eliminarDato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }


  /**
    datosVenta: string[] = ['a', 'b', 'c'];

  guardar(datosVenta: string){
      this.datosVenta.push(datosVenta);
  }
  /**/
  
}

