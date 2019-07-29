import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  answer: string;

  question = 'Paylaşılan dokümanda UI tasarımlarının uygun teknolojiler incelemelerin   işlem başlatılmasını talep ediyorum.';

  ngOnInit() {
  }

}
