import { Injectable } from '@angular/core';
import {Posts} from '../models/posts';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Posts[]>{
    return this
      .httpClient
      .get<Posts[]>( 'https://jsonplaceholder.typicode.com/posts');
  }
}
