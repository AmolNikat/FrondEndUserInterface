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
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  dropDownOptions = dropDownList;
  currentSortOrder = SortOrderType.NASC;

  userSearchResults: any = [];
  totalCount: number;

  searchControl: FormControl = new FormControl();

  constructor(private userSearchService: UserSearchService) { }


  ngOnInit() {

    this.searchControl.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((value: string) =>
      this.userSearchService.getUserSearchResults(value)))
    .subscribe(result => {

        if (result) {
          this.totalCount = result.total_count;
          this.userSearchResults = result.items;
          console.log(result);
        } else {
          this.totalCount = 0;
          this.userSearchResults = null;
        }
    });

  }

  sortOptionChanged(event: any) {

    console.log(event.target.value);

    if (event.target.value === SortOrderType.NDSC.toString()) {
      console.log('sorting dsc name');

      this.userSearchResults.sort((a: any, b: any) => {

        const c = a['login'].toLowerCase();
        const d = b['login'].toLowerCase();
        if ( c < d) {

          return 1;

        } else if (c > d) {
          return -1;
        } else {
          return 0;
        }


      });
      
    }

  }

  searchUser(user: string) {

    this.userSearchService.getUserSearchResults(user).subscribe(data => {

      this.userSearchResults = data;

      console.log('data', data);


    });
  }

}
