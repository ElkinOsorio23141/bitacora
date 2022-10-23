import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathMap } from 'src/app/@core/enums/path-map.enum';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  clickEvent() {
    console.log('entro');
    this.router.navigate([`/${PathMap.Menu}`]);
  }

}
