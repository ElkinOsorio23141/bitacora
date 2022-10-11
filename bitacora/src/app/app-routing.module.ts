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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
