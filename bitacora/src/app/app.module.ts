import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { CasosComponent } from './Casos/casos/casos.component';
import { ClientesComponent } from './Clientes/clientes/clientes.component';
import { EmpleadosComponent } from './Empleados/empleados/empleados.component';
import { MenuComponent } from './Menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CasosComponent,
    ClientesComponent,
    EmpleadosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
