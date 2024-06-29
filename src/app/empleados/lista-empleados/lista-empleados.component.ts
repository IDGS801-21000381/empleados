import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleados';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  constructor(private empleadosService: EmpleadosService) { }

  // Método getter para obtener la lista de empleados desde el servicio
  get empleados(): IEmpleado[] {
    return this.empleadosService.empleados;
  }

  // Método para eliminar un empleado por índice
  eliminarEmpleado(index: number): void {
    this.empleadosService.eliminarEmpleado(index);
  }
}
