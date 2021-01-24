import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../models/user';
import {Post} from '../../../models/post';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User[];

  chosenOne: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this
      .usersService
      .getAllUsers()
      .subscribe(value => this.user = value);
  }
  getPost(post: Post): void{
    this.chosenOne = post;
  }

}
