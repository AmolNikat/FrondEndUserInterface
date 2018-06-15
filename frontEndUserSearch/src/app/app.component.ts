import { Component, OnInit } from '@angular/core';
import { dropDownList } from './Constants/dropDown';
import { SortOrderType } from './enums/sortOrderType';
import { UserSearchService } from './services/user-search.service';
import { FormControl } from '@angular/forms';


import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

 // import 'rxjs/add/operator/debounceTime';
 import 'rxjs/add/operator/distinctUntilChanged';
 import 'rxjs/add/operator/switchMap';
// import 'rxjs/Observable';

import 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  dropDownOptions = dropDownList;
  currentSortOrder = SortOrderType.NASC;

  userSearchResults: any = [];

  searchControl: FormControl = new FormControl();

  constructor(private userSearchService: UserSearchService) { }


  ngOnInit() {

    this.searchControl.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged())
    .subscribe(value => {
      this.userSearchService.getUserSearchResults(value).subscribe(result => {

        this.userSearchResults = result;
        console.log('data', this.userSearchResults);
    });

    });

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
