import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaListaPage } from './pagina-lista.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaListaPageRoutingModule {}
