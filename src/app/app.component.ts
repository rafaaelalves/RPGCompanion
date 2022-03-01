import { Component } from '@angular/core';
import { User } from './shared/models/User';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public user = {
    name: "Rafa",
    email: "rafa@ionic.com"
  } as User;

  public appPages = [
    { title: 'Novo Jogador', url: '/jogador-detalhe/0', icon: 'paper-plane' },
    { title: 'Jogadores', url: '/jogadores', icon: 'paper-plane' },
    { title: 'Personagens', url: '/personagens', icon: 'paper-plane' }
  ];

  constructor() {}
}
