import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { EditPageComponent } from '../edit-page/edit-page.component';
import { AskQuestionComponent } from '../ask-question/ask-question.component';

@Component({
  selector: 'app-business-logic',
  templateUrl: './business-logic.component.html',
  styleUrls: ['./business-logic.component.scss']
})
export class BusinessLogicComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  userName="İbrahim Doğruer";
  con="The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for ";  
  type="Business Logic"
  ngOnInit() {
  }
  files = [
    {
      UserName:this.userName, content:this.con, type: this.type, baslik: 'İşlem Mantığı', sayfa: 'Technical'
    }
  ];

  showEditPage(){
    this.dialog.open(EditPageComponent);
  }
  askQuestion(){
    this.dialog.open(AskQuestionComponent);
  }
  
}
