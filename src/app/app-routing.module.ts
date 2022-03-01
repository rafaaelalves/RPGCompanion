import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jogadores',
    pathMatch: 'full'
  },
  {
    path: 'jogadores',
    loadChildren: () => import('./jogadores/jogadores.module').then( m => m.JogadoresPageModule)
  },
  {
    path: 'personagens',
    loadChildren: () => import('./personagens/personagens.module').then( m => m.PersonagensPageModule)
  },
  {
    path: 'jogador-detalhe/:id',
    loadChildren: () => import('./jogador-detalhe/jogador-detalhe.module').then( m => m.JogadorDetalhePageModule)
  },  {
    path: 'personagem-detalhe',
    loadChildren: () => import('./personagem-detalhe/personagem-detalhe.module').then( m => m.PersonagemDetalhePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
