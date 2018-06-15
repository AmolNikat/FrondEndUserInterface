import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserSearchService {

  searchbaseUrl = 'https://api.github.com/search/users?q=';
  userDetailsBaseUrl = 'https://api.github.com/users/';
  userDetailsEnd = '/repos';

  constructor(private httpClient: HttpClient) { }

  getUserSearchResults(user: string) {

    if (user) {

      const fullUrl = this.searchbaseUrl + user;

      return this.httpClient.get(fullUrl);

    } else {

      return Observable.of(null);
    }

  }

getUserDetails(username: string) {

  const fullUrl = this.userDetailsBaseUrl + username + this.userDetailsEnd;

  console.log(fullUrl);

  return this.httpClient.get(fullUrl);
}

}
