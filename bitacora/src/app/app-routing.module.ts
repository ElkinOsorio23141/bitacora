import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathMap } from './@core/enums/path-map.enum';

const routes: Routes = [
  {
    path: PathMap.Login,
    loadChildren: () =>
      import('./Login/login.module').then((m) => m.LoginModule),
  },
  {
    path: PathMap.Menu,
    loadChildren: () => import('./Menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: PathMap.Empleados,
    loadChildren:()=> import('./Empleados/empleados.module').then((m)=> m.EmpleadosModule),
  },
  {
    path: PathMap.Clientes,
    loadChildren: () => import('./Clientes/clientes.module'). then((m) => m.ClientesModule),
  },
  {
    path:PathMap.Casos,
    loadChildren: ()=> import('./Casos/casos.module').then((m)=> m.CasosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
