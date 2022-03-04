import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from '../shared/models/Character';

@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.page.html',
  styleUrls: ['./personagem-detalhe.page.scss'],
})
export class PersonagemDetalhePage implements OnInit {
  routerParams: Params;
  public character: Character

  characterForm = new FormGroup({
    name: new FormControl('', Validators.required)
  }); 

  constructor(
    private router: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.router.params.subscribe(params => this.routerParams = params);
  }

  

  ngOnInit() {
    if (this.routerParams.id){
      this.getCharacter(this.routerParams.id);
    }

    console.log(this.characterForm.value);
  }

  getCharacter(id?: number){
    this.httpClient.get("../assets/items_json/personagens.json").subscribe((response:Character[]) => {
      this.character = response.filter(item => item.id == id)[0];
    })
  }
}