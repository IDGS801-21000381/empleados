import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _empleados: IEmpleado[] = [];
  private localStorageKey = 'empleados'; // Definir la clave para localStorage

  constructor() {
    this._empleados = JSON.parse(localStorage.getItem(this.localStorageKey)!) || [];
  }

  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado) {
    this.empleados.push(empleado);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this._empleados));
  }

  eliminarEmpleado(index: number): void {
    const empleados = this.empleados;
    if (index >= 0 && index < empleados.length) {
      empleados.splice(index, 1);
      localStorage.setItem(this.localStorageKey, JSON.stringify(empleados));
    }
  }
}
