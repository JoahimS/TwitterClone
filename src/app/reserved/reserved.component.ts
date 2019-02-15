import { Component, OnInit, Inject} from '@angular/core';
import { UtilsService } from '../utils.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatDialog} from '@angular/material';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { DialogBodyTweetComponent } from '../dialog-body-tweet/dialog-body-tweet.component';
import { MessageService } from '../message-service';
import { Login } from '../models/login.model';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Store} from '@ngxs/store';


@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})


export class ReservedComponent implements OnInit {

  tweets: object;
  tweet: object;
  tweetCreated: object;
  tweetUpdated: object;
  tweetDeleted: object;
  getForm: FormGroup;
  createForm: FormGroup;
  updateForm: FormGroup;
  deleteForm: FormGroup;
  newTweet: string;
  messages: any[] = [];
  subscription: Subscription;
  logins$: Observable<Login>;



  constructor( private data: UtilsService, private formBuilder: FormBuilder, private dialog: MatDialog,
               private messageService: MessageService, private store: Store) {
    this.logins$ = this.store.select(state => {
      console.log('vediamo in login$', state);
      return state.login.logins;
    });
    // this.logins$.forEach(login => {console.log('username ' + login.username); } );
    // subscribe to home component messages
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        console.log('Received following message: ' + message);
        this.createTweet2(message, 1);
        this.getTweets();
      } else {
        // clear messages when empty message received
        // this.messages = [];
      }
    });
               }
  ngOnInit() {
    const token: string = localStorage.getItem('token');
    this.getForm = this.formBuilder.group({
      id: ['']
    });
    this.createForm = this.formBuilder.group({
      text: [''],
      userId: ['']
    });
    this.updateForm = this.formBuilder.group({
      idToUpdate: [''],
      textToUpdate: [''],
      userIdToUpdate: ['']
    });
    this.deleteForm = this.formBuilder.group({
      idToDelete: ['']
    });

    this.getTweets();
  }

  getTweets() {
    this.data.getTweets().subscribe(data => {
      this.tweets = data;
      console.log('successful GET request!');
      console.log(this.tweets);
    });
  }

  getTweet() {
    const id: string = this.getForm.controls.id.value;
    console.log('id = ' + id);
    this.data.getTweet(id).subscribe(data => {
      this.tweet = data;
      console.log('successful GET request!');
      console.log(this.tweet);
    });
  }

  createTweet() {
    const text: string = this.createForm.controls.text.value;
    const userId: string = this.createForm.controls.userId.value;

    const tweet = {
      text: text,
      userId: userId
    };
    this.data.createTweet(tweet).subscribe(data => {
      this.tweetCreated = data;
      console.log('successful POST request!');
      console.log(this.tweetCreated);
    });

   }


   clickDetectedFromGrandChild(event) {
     console.log('Click detected from grandchild! id: '  + event[0] + ', text: ' + event[1]);
     this.openDialogTweet(event);

   }


   createTweet2(tweetText, userId) {

    const tweet = {
      text: tweetText,
      userId: userId
    };
    this.data.createTweet(tweet).subscribe(data => {
      this.tweetCreated = data;
      console.log('successful POST request!');
      console.log(this.tweetCreated);
    });

   }

  updateTweet() {

    const idToUpdate: string = this.updateForm.controls.idToUpdate.value;
    const textToUpdate: string = this.updateForm.controls.textToUpdate.value;
    const userIdToUpdate: string = this.updateForm.controls.userIdToUpdate.value;

    const tweet = {
      text: textToUpdate,
      userId: userIdToUpdate
    };
    this.data.updateTweet(idToUpdate, tweet).subscribe(data => {
      this.tweetUpdated = data;
      console.log('successful PUT request!');
      console.log(this.tweetUpdated);
    });

  }

  deleteTweet() {
    const idToDelete: string = this.deleteForm.controls.idToDelete.value;
    this.data.deleteTweet(idToDelete).subscribe(data => {
      console.log('successful GET request (for delete)!');
    });
  }


  openDialog() {
    // const    
    
       
    
    
    
        
    
    
    
    ogConfig = new MatDialogConfig();
    // dialogConfig.data = 'some data';
    const dialogRef = this.dialog.open(DialogBodyComponent);
    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
    });
  }

  openDialogTweet(tweet) {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.data = 'some data';
    console.log('Trying to send: ' + tweet);
    const dialogRefTweet = this.dialog.open(DialogBodyTweetComponent, {data: tweet});
    dialogRefTweet.afterClosed().subscribe(value => {
      console.log(`Tweet dialog opened!`);
    });
  }


}
