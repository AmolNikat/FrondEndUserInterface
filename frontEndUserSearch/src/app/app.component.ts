import { Component } from '@angular/core';
import { dropDownList } from '../Constants/dropDown';
import { SortOrderType } from '../enums/sortOrderType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  dropDownOptions = dropDownList;
  currentSortOrder = SortOrderType.NASC;

  constructor() {

  }

  sortOptionChanged(event: any) {

    console.log(event.target.value);

  }


}
