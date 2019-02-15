import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Tweet from '../model/Tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;
  @Output() eventChild: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickDetected(event) {
    console.log('click detected from tweet id: ' + this.tweet.id + ', text: ' + this.tweet.text);
    this.eventChild.next([ this.tweet.id, this.tweet.text]);
  }

}
