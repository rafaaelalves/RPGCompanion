import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../shared/models/User';
import { ActivatedRoute, Params } from '@angular/router';
import { IonRouterOutlet, NavController } from "@ionic/angular";


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
    @Optional() private routerOutlet: IonRouterOutlet,
    private navCtrl: NavController,
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

  goBack() {
    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
      this.navCtrl.setDirection("back");
      this.routerOutlet.pop();
    } else {
      this.navCtrl.navigateBack("/home");
    }
  }

  getJogador(id?: number) {
    this.httpClient.get("../../assets/items_json/jogadores.json").subscribe((response: User[]) => {
      this.userForm.patchValue(response.filter(item => item.id == id)[0]);
      console.log(this.userForm.value)
    });
  }

  save() {
    console.log(this.userForm.value)
    this.goBack();
  }
}
