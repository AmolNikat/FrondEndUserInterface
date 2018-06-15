import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class UserSearchService {

  constructor(private httpClient: HttpClient) { }

  getUserSearchResults(user: string = 'amol') {

    return this.httpClient.get('https://api.github.com/search/users?q=amol');

  }

}
