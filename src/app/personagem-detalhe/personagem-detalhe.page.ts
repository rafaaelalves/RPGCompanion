import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Character } from '../shared/models/Character';

@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.page.html',
  styleUrls: ['./personagem-detalhe.page.scss'],
})
export class PersonagemDetalhePage implements OnInit {
  routerParams: Params;
  characterForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public formBuilder: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(params => this.routerParams = params);
  }

  ngOnInit() {
    this.characterForm = this.formBuilder.group({
      name: ['', Validators.required]
    }); 

    if (this.routerParams.id) {
      this.getCharacter(this.routerParams.id);
    }
  }

  getCharacter(id?: number) {
    this.httpClient.get("../assets/items_json/personagens.json").subscribe((response:Character[]) => {
      this.characterForm.patchValue(response.filter(item => item.id == id)[0]);
      console.log(this.characterForm.value);
    });
  }

  save() {
    console.log(this.characterForm.value)
    this.router.navigate(['personagens']);
  }
}