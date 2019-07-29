import { Component, OnInit } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';
import { MatDialog } from '@angular/material';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-active-questions',
  templateUrl: './active-questions.component.html',
  styleUrls: ['./active-questions.component.scss']
})
export class ActiveQuestionsComponent implements OnInit {

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  business = [];
  question = [];
  person = [];
  technical = [];
  techquest = [];

  ngOnInit() {

    this.http.get<any>("http://localhost:3000/bussinessLogic").subscribe(data => {
      this.business = data;
      this.question = this.business[0].questions


      this.http.get<any>("http://localhost:3000/person/" + this.question[0].personId).subscribe(data => {
        this.person = data;
      });

    });
    
    this.http.get<any>("http://localhost:3000/technicalAnalysis").subscribe(data => {
      this.technical = data;
      this.techquest = this.technical[0].questions


      this.http.get<any>("http://localhost:3000/person/" + this.techquest[0].personId).subscribe(data => {
        this.person = data;
      });
    });



  }

  answerPage(_questionId, _questionType) {
    this.dialog.open(AnswerComponent, {
      data: { questionId: _questionId, questionType: _questionType }
    });
  }
  showEditPage(_page, _content) {
    this.dialog.open(EditPageComponent, {
      data: { page: _page, content: _content }
    });
  }
}
