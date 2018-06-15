import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  @Input() userlist: any;
  @Input() totalCount: any;

  toggle = true;

  constructor() { }

  ngOnInit() {
  }

  toggleButton() {

    this.toggle = !this.toggle;
  }

}
