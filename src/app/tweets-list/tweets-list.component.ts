import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Tweet from '../model/Tweet';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

   @Input() tweetsList: Tweet[];
   @Output() eventGrandChild: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  clickDetectedFromChild(event) {

    console.log('click detected from child! id: ' + event[0] + ', text: ' + event[1]);
    this.eventGrandChild.next(event);

  }

}
