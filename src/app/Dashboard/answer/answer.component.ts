import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  constructor(private http:HttpClient,public dialogRef: MatDialogRef<AnswerComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogObject: any) { }

  answer: string;
  
  business = [];
  technical = [];
  selectedQuestion = {};

  ngOnInit() {
    if (this.dialogObject.questionType == 'Technical Analysis') {
      this.http.get<any>("http://localhost:3000/technicalAnalysis").subscribe(data => {
        this.technical = data;
        this.selectedQuestion = this.technical[0].questions.find(x => x.id == this.dialogObject.questionId);
        console.log(this.selectedQuestion, this.technical, this.dialogObject)
      })      
    }
    else if (this.dialogObject.questionType == 'Business Logic') {
      this.http.get<any>("http://localhost:3000/bussinessLogic").subscribe(data => {
        this.business = data;
        this.selectedQuestion = this.business[0].questions.find(x => x.id == this.dialogObject.questionId);
        console.log(this.selectedQuestion, this.technical, this.dialogObject)
      })      
    }    
  }

}
