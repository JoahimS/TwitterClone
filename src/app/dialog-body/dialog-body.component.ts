import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UtilsService } from '../utils.service';
import { MessageService } from '../message-service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>, private data: UtilsService, private messageService: MessageService) {}
  tweetText: string;

  ngOnInit() {}

  send() {
    console.log(this.tweetText);
    this.messageService.sendMessage(this.tweetText);
  }



  close() {
    this.dialogRef.close();
    this.dialogRef.close('Thanks for using me!');
  }
}
