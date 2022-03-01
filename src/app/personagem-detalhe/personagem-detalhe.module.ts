import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonagemDetalhePageRoutingModule } from './personagem-detalhe-routing.module';

import { PersonagemDetalhePage } from './personagem-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonagemDetalhePageRoutingModule
  ],
  declarations: [PersonagemDetalhePage]
})
export class PersonagemDetalhePageModule {}
