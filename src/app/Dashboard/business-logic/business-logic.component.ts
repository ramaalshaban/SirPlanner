import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-business-logic',
  templateUrl: './business-logic.component.html',
  styleUrls: ['./business-logic.component.scss']
})
export class BusinessLogicComponent implements OnInit {

  business = [];
  person = {};
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>("http://localhost:3000/bussinessLogic").subscribe(data => {
      this.business = data;
      this.http.get<any>("http://localhost:3000/person/" + this.business[0].personId).subscribe(data => {
        this.person = data;
      });

    });

  }

  showEditPage(_page, _content) {
    this.dialog.open(EditPageComponent, {
      data: {page: _page, content: _content}
    });
  }
  askQuestion() {
    this.dialog.open(AskQuestionComponent);
  }

}
