import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-jogador-detalhe',
  templateUrl: './jogador-detalhe.page.html',
  styleUrls: ['./jogador-detalhe.page.scss'],
})
export class JogadorDetalhePage implements OnInit {
  routerParams: Params;
  public user: User;

  constructor(
    private router: ActivatedRoute,
    private httpClient: HttpClient
  ) { 
    this.router.params.subscribe(params => this.routerParams = params);
  }

  // jogadorForm = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl()
  // });

  ngOnInit() {
    if (this.routerParams.id) {
      this.getJogador(this.routerParams.id);
    }
  }

  getJogador(id?: number) {
    this.httpClient.get("../../assets/items_json/jogadores.json").subscribe((response: User[]) => {
      this.user = response.filter(item => item.id == id)[0];

      console.log(this.user)
    });
  }
}
