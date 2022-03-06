import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-jogador-detalhe',
  templateUrl: './jogador-detalhe.page.html',
  styleUrls: ['./jogador-detalhe.page.scss'],
})
export class JogadorDetalhePage implements OnInit {
  routerParams: Params;
  userForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    public formBuilder: FormBuilder
  ) { 
    this.activatedRoute.params.subscribe(params => this.routerParams = params);
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

    if (this.routerParams.id) {
      this.getJogador(this.routerParams.id);
    }

    console.log(this.userForm.value);
  }

  getJogador(id?: number) {
    this.httpClient.get("../../assets/items_json/jogadores.json").subscribe((response: User[]) => {
      this.userForm.patchValue(response.filter(item => item.id == id)[0]);
      console.log(this.userForm.value)
    });
  }

  save() {
    console.log(this.userForm.value)
    this.router.navigate(['jogadores']);
  }
}
