import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { PostToActiveChatComponent } from './components/post-to-active-chat/post-to-active-chat.component';
import { PostComponent } from './components/post/post.component';
import { MessageService } from './services/message.service'
import { CreateMessageService } from './services/create-message.service'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {LogInService } from './services/log-in.service'
import { from } from 'rxjs/observable/from';
import { WelcomeUserComponent } from './components/welcome-user/welcome-user.component';
import {HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ActiveChatComponent,
    ActiveUsersComponent,
    PostToActiveChatComponent,
    PostComponent,
    LoginComponent,
    WelcomeUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [MessageService,CreateMessageService,LogInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
