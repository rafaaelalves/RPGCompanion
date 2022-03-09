import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonagemDetalhePageRoutingModule } from './personagem-detalhe-routing.module';

import { PersonagemDetalhePage } from './personagem-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PersonagemDetalhePageRoutingModule
  ],
  declarations: [PersonagemDetalhePage]
})
export class PersonagemDetalhePageModule {}
