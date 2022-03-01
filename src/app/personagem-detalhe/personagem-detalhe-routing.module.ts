import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonagemDetalhePage } from './personagem-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: PersonagemDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonagemDetalhePageRoutingModule {}
