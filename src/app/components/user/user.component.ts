import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  @Output()
  bubbleUpUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getUpUser(user: User): void{
    this.bubbleUpUser.emit(user);
  }

}
