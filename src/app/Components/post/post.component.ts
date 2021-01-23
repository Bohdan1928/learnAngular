import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Posts} from '../../models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Posts;
  @Output()
  bubbleUpPosts = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getUpPosts(post: Posts): void{
    this.bubbleUpPosts.emit(post);
  }

}
