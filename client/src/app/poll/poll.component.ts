import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MainService } from './../main.service';
import { AppRoutingModule } from './../app-routing.module';
import { ActivatedRoute, Params, Router } from '@angular/router';

// To integrate charts.js, used the following resources:
// https://www.youtube.com/watch?v=RTzi5DS7On4
// https://stackoverflow.com/questions/41280857/chart-js-failed-to-create-chart-cant-acquire-context-from-the-given-item
import { Chart } from 'chart.js';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  user: Object;
  poll: Object;
  chart: Chart;
  constructor(private _mainService: MainService, private _router: Router, private _route: ActivatedRoute, private elementRef: ElementRef) {
    this.user = {_id: null, name: null, pollsAuthored: [], pollsVotedIn: []};
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
    this._route.params.subscribe((params: Params) =>
      this.getOnePoll(params['id'])
    );
    this.checkSession();
  }

  createChart() {
    const count01 = this.poll['option01_voters'].length;
    const count02 = this.poll['option02_voters'].length;
    const count03 = this.poll['option03_voters'].length;
    const count04 = this.poll['option04_voters'].length;
    const label01 = this.poll['option01_opt'];
    const label02 = this.poll['option02_opt'];
    const label03 = this.poll['option03_opt'];
    const label04 = this.poll['option04_opt'];

    const data = {
      datasets: [ { data: [count01, count02, count03, count04],
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
                } ],
      labels: [ label01, label02, label03, label04 ]
    };

    const ctx = this.elementRef.nativeElement.querySelector('#chartCanvas');
    const option = {
      animation: { duration: 2000 },
      responsive: false,
      maintainAspectRatio: false
    };

    if ( this.chart ) { this.chart.destroy(); }
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: option
    });

    console.log(this.chart);
  }

  getOnePoll(pollId) {
    this._mainService.getOnePoll( pollId, (res) => {
      if (res['message'] !== 'Success') {
      } else {
        this.poll = res['data'];
        this.createChart();
      }
    });
  }

  voteForOption(pollId, optNum) {
    this._mainService.voteForOption({pollId: pollId, optNum: optNum}, (res) => {
      if (res['message'] !== 'Success') {
        // do nothing.
      } else {
        this.poll = res['data'];
        this.createChart();
      }
    });
  }

  checkSession() {
    this._mainService.checkSession( (res) => {
    if (res['message'] !== 'Success') {
        this._router.navigate(['/']);
    } else {
        this.user = res['user'];
    }});
  }

  userVotedInPoll() {
    let userVoted = false;
    if (this.poll['option01_voters'].indexOf(this.user['_id']) === -1 &&
    this.poll['option02_voters'].indexOf(this.user['_id']) === -1 &&
    this.poll['option03_voters'].indexOf(this.user['_id']) === -1 &&
    this.poll['option04_voters'].indexOf(this.user['_id']) === -1 ) {
      userVoted = false;
    } else {
      userVoted = true;
    }
    return userVoted;
  }

}
