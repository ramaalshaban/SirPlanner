import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessLogicComponent } from './Dashboard/business-logic/business-logic.component';
import { ActiveQuestionsComponent } from './Dashboard/active-questions/active-questions.component';
import { TechnicalAnalysisComponent } from './Dashboard/technical-analysis/technical-analysis.component';
import { UploadFileComponent } from './Dashboard/upload-file/upload-file.component';


const routes: Routes = [
  {path:'' ,component:BusinessLogicComponent, pathMatch:'full'},
  {path:'business-logic' , component:BusinessLogicComponent},
  {path:'active-question' , component:ActiveQuestionsComponent},  
  {path:'technical-analysis' , component:TechnicalAnalysisComponent},
  {path:'upload-file' , component:UploadFileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
