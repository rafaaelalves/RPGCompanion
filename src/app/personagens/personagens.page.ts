import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from '../shared/models/Character';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage implements OnInit {
  public characters: Character[];

  constructor(
    public navCtrl: NavController,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.httpClient.get("../../assets/items_json/personagens.json").subscribe((response:Character[]) => {
      this.characters = response;
      console.log(this.characters)
    });
  }

  deleteCharacter(id:number) {
    this.characters = this.characters.filter(item => item.id !=id);
  }

  editCharacter(path?: number) {
    this.navCtrl.navigateForward(['personagem-detalhe', path ?? 0]);
  }
}
