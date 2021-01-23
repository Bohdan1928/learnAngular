import { Component, OnInit } from '@angular/core';
import {Posts} from '../../models/posts';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[];

  chosenOne: Posts;
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
      this
        .postService
        .getAllPosts()
        .subscribe(value => this.posts = value);
  }

  getBubblePost(post): void{
    this.chosenOne = post;
  }
}
