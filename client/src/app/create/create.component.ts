import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { AppRoutingModule } from './../app-routing.module';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user: Object;
  poll: Object;
  constructor(private _mainService: MainService, private _router: Router, private _route: ActivatedRoute) {
    this.user = { _id: null, name: null };
    this.poll = { author: {_id: null, name: null },
                  question: '',
                  option01_opt: '',
                  option02_opt: '',
                  option03_opt: '',
                  option04_opt: '',
                  option01_voters: [],
                  option02_voters: [],
                  option03_voters: [],
                  option04_voters: []
    };
  }

  ngOnInit() {
    this.checkSession();
    // this._route.params.subscribe((params: Params) => console.log('create.component.ts params[id]', params['id']));
  }

  checkSession() {
    this._mainService.checkSession( (res) => {
    if (res['message'] !== 'Success') {
        this._router.navigate(['/']);
    } else {
        this.user = res['user'];
    }});
  }

  createPoll() {
    this.poll['author'] = this.user;
    this._mainService.createPoll( this.poll, (res) => {
      if ( res['message'] !== 'Success' ) {
      } else {
        this._router.navigate(['dashboard']);
      }
    });
  }


}
