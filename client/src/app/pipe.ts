import { Pipe, PipeTransform } from '@angular/core';
import { PollComponent } from './poll/poll.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public checkQuestionOrAuthorIncludeTerm(poll, term) {
    let includesTerm = false;
    if (poll['question'].toLowerCase().includes(term)) {
      includesTerm = true;
    }
    if (poll['author']['name'].toLowerCase().includes(term)) {
      includesTerm = true;
    }
    return includesTerm;
  }

  public transform(allPolls: Array<Object>, term: string) {
    if (!term) {return allPolls; }
    term = term.toLowerCase();
    return allPolls.filter(poll => this.checkQuestionOrAuthorIncludeTerm(poll, term));
  }
}
