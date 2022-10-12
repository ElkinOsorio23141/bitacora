import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathMap } from 'src/app/@core/enums/path-map.enum';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }
  //#region Eventos
  clickEvent() {
    console.log('entro');
    this.router.navigate([`/${PathMap.Menu}`]);
  }
  //#endRegion

}
