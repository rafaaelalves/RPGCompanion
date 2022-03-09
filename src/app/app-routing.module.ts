import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'jogadores',
    loadChildren: () => import('./jogadores/jogadores.module').then( m => m.JogadoresPageModule)
  },
  {
    path: 'jogador-detalhe/:id',
    loadChildren: () => import('./jogador-detalhe/jogador-detalhe.module').then( m => m.JogadorDetalhePageModule)
  },
  {
    path: 'personagens',
    loadChildren: () => import('./personagens/personagens.module').then( m => m.PersonagensPageModule)
  },
  {
    path: 'personagem-detalhe/:id',
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
