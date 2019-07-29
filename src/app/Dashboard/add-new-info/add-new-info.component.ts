import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-info',
  templateUrl: './add-new-info.component.html',
  styleUrls: ['./add-new-info.component.scss']
})
export class AddNewInfoComponent implements OnInit {
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
