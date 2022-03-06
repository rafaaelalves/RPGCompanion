import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogadorDetalhePageRoutingModule } from './jogador-detalhe-routing.module';

import { JogadorDetalhePage } from './jogador-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JogadorDetalhePageRoutingModule
  ],
  declarations: [JogadorDetalhePage]
})
export class JogadorDetalhePageModule {}
