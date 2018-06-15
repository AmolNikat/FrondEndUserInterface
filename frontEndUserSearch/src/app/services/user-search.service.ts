import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserSearchService {

  searchbaseUrl = 'https://api.github.com/search/users?q=';

  constructor(private httpClient: HttpClient) { }

  getUserSearchResults(user: string) {

    if (user) {

      const fullUrl = this.searchbaseUrl + user;

      return this.httpClient.get(fullUrl);

    } else {

      return Observable.of(null);
    }

  }

}
