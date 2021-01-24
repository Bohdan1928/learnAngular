import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private postsClient: HttpClient) { }

  getPostById(postId): Observable<Post>{
    return this.postsClient.get<Post>(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`);
  }
}
