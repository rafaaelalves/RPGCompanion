import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../shared/models/User';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.page.html',
  styleUrls: ['./jogadores.page.scss'],
})

export class JogadoresPage implements OnInit {
  public users: User[];

  constructor(
    public navCtrl: NavController,
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

  editJogador(id?: number) {
    this.navCtrl.navigateForward(['jogador-detalhe', id ?? 0])
  }
}
