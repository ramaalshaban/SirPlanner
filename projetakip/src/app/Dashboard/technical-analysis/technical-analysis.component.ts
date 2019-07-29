import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { AskQuestionComponent } from '../ask-question/ask-question.component';

@Component({
  selector: 'app-technical-analysis',
  templateUrl: './technical-analysis.component.html',
  styleUrls: ['./technical-analysis.component.scss']
})
export class TechnicalAnalysisComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  userName = "Abdullah Özkılıç";

  type = "Technical Analysis"
  con = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for ";

  ngOnInit() {
  }

  files = [
    {
      UserName: this.userName, content: this.con, kullaniciAdi: 'Abdullah', type: this.type, baslik: 'İşlem Mantığı', sayfa: 'Technical'
    },

  ]

  showEditPage(){
    this.dialog.open(EditPageComponent);
  }

  askQuestion() {
    this.dialog.open(AskQuestionComponent);
  }
}

