import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor() { }

  business: string;
  technical: string;

  ngOnInit() {
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    //this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
