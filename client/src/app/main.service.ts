import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainService {

  constructor(private _http: HttpClient) { }

  login(user, cb) {
    this._http.post('/login', user).subscribe( (res) => {
      cb(res);
    });
  }

  checkSession(cb) {
    this._http.get('/checkSession').subscribe( (res) => {
    cb(res);
    });
  }

  createPoll(poll, cb) {
    this._http.post('/createPoll', poll).subscribe( (res) => {
      cb(res);
    });
  }

  getAllPolls(cb) {
    this._http.get('/getAllPolls').subscribe( (res) => {
      cb(res);
    });
  }

  deletePoll(pollId, cb) {
    this._http.delete('/deletePoll/' + pollId).subscribe( (res) => {
      cb(res);
    });
  }

  getOnePoll(pollId, cb) {
    this._http.get('/getOnePoll/' + pollId).subscribe( (res) => {
      cb(res);
    });
  }

  voteForOption(pollObj, cb) {
    this._http.post('/voteForOption', pollObj).subscribe( (res) => {
      cb(res);
    });
  }

}
