import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { PathMap } from 'src/app/@core/enums/path-map.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
//#region Funciones
clickEmpleados(){
console.log("Empleados.");
this.router.navigate([`/Empleados`])
}
clickClientes(){
  console.log("Clientes.");
  this.router.navigate([`/Clientes`])

}
clickCasos(){
  console.log("Casos.");
  this.router.navigate([`/Casos`])

}
clickCerrarSesion(){
  console.log("Cerrar sesion.");
  this.router.navigate([`${PathMap.Login}`])

}

//#endregion
}
