import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogadorDetalhePage } from './jogador-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: JogadorDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogadorDetalhePageRoutingModule {}
