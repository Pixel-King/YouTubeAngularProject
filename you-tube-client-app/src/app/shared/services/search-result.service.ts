import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  private searchResultSubject = new BehaviorSubject<String[] | null>(null);

  setSearchResult(result: String[]) {
    this.searchResultSubject.next(result);
  }

  getSearchResult():BehaviorSubject<String[] | null> {
    return this.searchResultSubject;
  }
}
