import { Component, OnInit } from '@angular/core';
import { dropDownList } from './Constants/dropDown';
import { SortOrderType } from './enums/sortOrderType';
import { UserSearchService } from './services/user-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  dropDownOptions = dropDownList;
  currentSortOrder = SortOrderType.NASC;

  userSearchResults: any;

  constructor(private userSearchService: UserSearchService) {

  }

  ngOnInit() {

    this.searchUser('amol');
  }

  sortOptionChanged(event: any) {

    console.log(event.target.value);

  }

  searchUser(user: string) {

    this.userSearchService.getUserSearchResults(user).subscribe(data => {

      this.userSearchResults = data;

      console.log('data', data);
      

    });
  }

}
