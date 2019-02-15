import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-body-tweet',
  templateUrl: './dialog-body-tweet.component.html',
  styleUrls: ['./dialog-body-tweet.component.css']
})
export class DialogBodyTweetComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogBodyTweetComponent>, @Inject(MAT_DIALOG_DATA) public tweet: any) {}


  ngOnInit() {
  }


  close() {
    this.dialogRef.close();
    this.dialogRef.close('Thanks for using me!');
  }
}
