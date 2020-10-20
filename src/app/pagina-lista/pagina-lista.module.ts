import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaListaPageRoutingModule } from './pagina-lista-routing.module';

import { PaginaListaPage } from './pagina-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaListaPageRoutingModule
  ],
  declarations: [PaginaListaPage]
})
export class PaginaListaPageModule {}
