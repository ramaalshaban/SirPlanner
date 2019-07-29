import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetakip';
  
  question:boolean = true;
  technical:boolean = true;
  files:boolean = true;
  others:boolean = true;
  business:boolean = true;

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
}
