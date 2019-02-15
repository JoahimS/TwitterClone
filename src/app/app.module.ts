import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservedComponent } from './reserved/reserved.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { TweetsListComponent } from './tweets-list/tweets-list.component';
import { TweetComponent } from './tweet/tweet.component';
import { DialogBodyTweetComponent } from './dialog-body-tweet/dialog-body-tweet.component';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

// ----------------------------------------------------------------

import {NgxsModule} from '@ngxs/store';
import {LoginState} from './state/login.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    ReservedComponent,
    DialogBodyComponent,
    TweetsListComponent,
    TweetComponent,
    DialogBodyTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxsModule.forRoot([
      LoginState
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent, DialogBodyTweetComponent]
})
export class AppModule { }
