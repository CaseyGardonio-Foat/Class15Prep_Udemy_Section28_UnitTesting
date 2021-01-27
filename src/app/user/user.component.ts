import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  data: string;

  constructor(private UserService: UserService, private DataService: DataService) { }

  ngOnInit(): void {
    this.user = this.UserService.user;
    this.DataService.getDetails().then((data: string) => this.data = data);
  }
}
