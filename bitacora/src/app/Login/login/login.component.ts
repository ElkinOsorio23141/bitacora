import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathMap } from 'src/app/@core/enums/path-map.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  //#region Eventos
  clickEvent() {
    console.log('entro');
    this.router.navigate([`/${PathMap.Menu}`]);
  }
  //#endRegion
  
}
