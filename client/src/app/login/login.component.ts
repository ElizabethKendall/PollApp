import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { AppRoutingModule } from './../app-routing.module';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Object;
  constructor(private _mainService: MainService, private _router: Router, private _route: ActivatedRoute) {
    this.user = {name: null};
  }

  ngOnInit() {
    // this._route.params.subscribe((params: Params) => console.log('login.component.ts params[id]', params['id']));
  }

  login() {
    this._mainService.login(this.user, (res) => {
        if (res['message'] === 'Success') {
        this._router.navigate(['dashboard']);
        }
  }); }
}
