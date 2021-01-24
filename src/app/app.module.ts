import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './Componets/UsersComp/users/users.component';
import { UserComponent } from './Componets/UsersComp/user/user.component';
import {PostsComponent} from './Componets/PostsComp/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
