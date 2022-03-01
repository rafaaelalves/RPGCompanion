import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../shared/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.page.html',
  styleUrls: ['./jogadores.page.scss'],
})
export class JogadoresPage implements OnInit {
  public users: User[];

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.getJogadores();
  }


  getJogadores() {
    this.httpClient.get("../../assets/items_json/jogadores.json").subscribe((response: User[]) => {
      this.users = response;

      console.log(this.users)
    });
  }

  deleteJogador(id: number) {
    this.users = this.users.filter(item => item.id != id);

    console.log(this.users)
  }

  editJogador(path?: number) {
    this.router.navigate(['jogador-detalhe', path ?? 0]);
  }
}
