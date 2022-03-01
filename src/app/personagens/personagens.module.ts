import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonagensPageRoutingModule } from './personagens-routing.module';

import { PersonagensPage } from './personagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonagensPageRoutingModule
  ],
  declarations: [PersonagensPage]
})
export class PersonagensPageModule {}
