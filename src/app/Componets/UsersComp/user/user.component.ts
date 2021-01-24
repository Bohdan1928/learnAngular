import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/user';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  @Output()
  emitterPost = new EventEmitter();
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  takeEmitterPost(user: number): void{
    this.postService.getPostById(user).subscribe(value => this.emitterPost.emit(value));
  }

}
