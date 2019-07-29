import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-discussion',
  templateUrl: './add-new-discussion.component.html',
  styleUrls: ['./add-new-discussion.component.scss']
})
export class AddNewDiscussionComponent implements OnInit {
  uploadedFiles: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  content:string;  
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
