import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../node_modules/primeng/api';
import { MatDialog } from '../../../node_modules/@angular/material';
import { AddArticleComponent } from './add-article/add-article.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }

  title = 'projetakip';
 
  dialogObject = { pageName: '' };
 
  constructor(private messageService: MessageService, private dialog: MatDialog) { }

  question: boolean = true;
  technical: boolean = true;
  files: boolean = true;
  others: boolean = true;
  business: boolean = true;

  businessLogic = /*null;*/[{ a: 'aaa' }];
  technicalAnalysis = /*null;*/[{ a: 'aaa' }];
  deleteButton: boolean = false;

  selectedValues: string[] = ['BusinessLogic', 'TechnicalAnalysis', 'Questions', 'Others', 'Files'];

  changeQuestion() {
    this.question ? this.question = false
      : this.question = true;
  }
  changeBusiness() {
    this.business ? this.business = false
      : this.business = true;
  }
  changeTechnical() {
    this.technical ? this.technical = false
      : this.technical = true;
  }
  changeFiles() {
    this.files ? this.files = false
      : this.files = true;
  }
  changeOthers() {
    this.others ? this.others = false
      : this.others = true;
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Are you sure delete this page?' });
  }
  onConfirm() {
    this.business = false;
    this.technical = false;
    this.files = false;
    this.question = false;
    this.deleteButton = true;
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  addArticle(page) {
    this.dialogObject.pageName = page;
    this.dialog.open(AddArticleComponent, { data:this.dialogObject })
  }


}
