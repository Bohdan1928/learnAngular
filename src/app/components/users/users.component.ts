import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  chosenOne: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser()
      .subscribe(value => this.users = value);
  }
  getBubbleUser(user: User): void{
    console.log(user);
    this.chosenOne = user;
  }

}
