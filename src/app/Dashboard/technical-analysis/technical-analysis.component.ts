import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { AskQuestionComponent } from '../ask-question/ask-question.component';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technical-analysis',
  templateUrl: './technical-analysis.component.html',
  styleUrls: ['./technical-analysis.component.scss'],
})
export class TechnicalAnalysisComponent implements OnInit {

  constructor(private dialog: MatDialog, private http: HttpClient) { }
  technical = [];
  person = {};



  ngOnInit() {

    this.http.get<any>("http://localhost:3000/technicalAnalysis").subscribe(data => {
      this.technical = data;
      this.http.get<any>("http://localhost:3000/person/" + this.technical[0].personId).subscribe(data => {
        this.person = data;
      });

    });


  }


  showEditPage(_page, _content) {
    this.dialog.open(EditPageComponent, {
      data: { page: _page, content: _content }
    });
  }

  askQuestion() {
    this.dialog.open(AskQuestionComponent);
  }


}

