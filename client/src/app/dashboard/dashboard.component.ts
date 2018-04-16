import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { AppRoutingModule } from './../app-routing.module';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Pipe, PipeTransform} from '@angular/core';
import {SearchPipe} from './../pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;
  allPolls: Array<Object>;
  search: SearchPipe;
  searchText: String;
  constructor(private _mainService: MainService, private _router: Router, private _route: ActivatedRoute) {
    this.user = {name: null};
    this.allPolls = [];
  }

  ngOnInit() {
    this.checkSession();
    this.getAllPolls();
  }

  checkSession() {
    this._mainService.checkSession( (res) => {
    if (res['message'] !== 'Success') {
        this._router.navigate(['/']);
    } else {
        this.user = res['user'];
    }});
  }

  getAllPolls() {
    this._mainService.getAllPolls( (res) => {
      if (res['message'] !== 'Success') {
    } else {
        this.allPolls = res['data'];
    }});
  }

  deletePoll(pollId) {
    // console.log('IN COMPONENT DELETEPOLL - START');
    this._mainService.deletePoll(pollId, (res) => {
      if (res['message'] !== 'Success') {
        // console.log('IN COMPONENT DELETEPOLL - END - !SUCCESS');
      } else {
        // console.log('IN COMPONENT DELETEPOLL - END - SUCCESS');
        this.allPolls = res['data'];
      }});
  }

}
