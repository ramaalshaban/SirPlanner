import { Component, OnInit } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { EditPageComponent } from '../edit-page/edit-page.component';

@Component({
  selector: 'app-active-questions',
  templateUrl: './active-questions.component.html',
  styleUrls: ['./active-questions.component.scss']
})
export class ActiveQuestionsComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  questions= [
    {question: 'Paylaşılan dokümanda UI tasarımlarının uygun teknolojiler incelemelerin   işlem başlatılmasını talep ediyorum.',username:'Abdullah Özkılıç',type:'Techinal Analysis'},
    {question: 'Paylaşılan dokümanda UI    seçilmediğini gözlemlemekteyim. Gerekli incelemelerin yapılması için işlem  talep ediyorum.',username:'İbrahim Doğruer',type:'Bussines Logic'},
  ]

  answerPage() {
    this.dialog.open(AnswerComponent);
  }
  showEditPage() {
    this.dialog.open(EditPageComponent);
  }
}
