import { Component, OnInit, Input } from '@angular/core';
import { UserSearchService } from '../../services/user-search.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  @Input() userlist: any;
  @Input() totalCount: any;

  toggle = true;
  userDetails: any;

  constructor(private userSearchService: UserSearchService) { }

  ngOnInit() {
  }

  fetchUserDetails(username: string) {
    this.toggle = !this.toggle;


    this.userSearchService.getUserDetails(username).subscribe(result => {

      this.userDetails = result;
      console.log(result);

    });

  }

  removeUserDetails() {

    this.toggle = !this.toggle;
    this.userDetails = null;
  }

}
