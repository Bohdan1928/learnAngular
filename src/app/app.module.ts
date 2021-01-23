import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './Components/posts/posts.component';
import { PostComponent } from './Components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
