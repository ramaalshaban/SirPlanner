import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//primeng
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import {CheckboxModule} from 'primeng/checkbox';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {EditorModule} from 'primeng/editor';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';
import {ChipsModule} from 'primeng/chips';
import {DragDropModule} from 'primeng/dragdrop';
import {TableModule} from 'primeng/table';




//angular material
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule
} from '@angular/material';

//components
import { BusinessLogicComponent } from './Dashboard/business-logic/business-logic.component';
import { TechnicalAnalysisComponent } from './Dashboard/technical-analysis/technical-analysis.component';
import { ActiveQuestionsComponent } from './Dashboard/active-questions/active-questions.component';
import { UploadFileComponent } from './Dashboard/upload-file/upload-file.component';
import { HeaderComponent } from './Layout/header/header.component';
import { LeftMenuComponent } from './Layout/left-menu/left-menu.component';
import { RightMenuComponent } from './Layout/right-menu/right-menu.component';
import { AddPageComponent } from './Dashboard/add-page/add-page.component';
import { AddPersonComponent } from './Dashboard/add-person/add-person.component';
import { AddGroupComponent } from './Dashboard/add-group/add-group.component';
import { AddProjectComponent } from './Dashboard/add-project/add-project.component';
import { EditPageComponent } from './Dashboard/edit-page/edit-page.component';
import { AskQuestionComponent } from './Dashboard/ask-question/ask-question.component';
import { AnswerComponent } from './Dashboard/answer/answer.component';
import { AddNewInfoComponent } from './Dashboard/add-new-info/add-new-info.component';
import { AddNewDiscussionComponent } from './Dashboard/add-new-discussion/add-new-discussion.component';
import { AddArticleComponent } from './Dashboard/add-article/add-article.component';
import{DashboardComponent} from './Dashboard/dashboard.component'
import {LayoutComponent} from './Layout/layout.component'

@NgModule({
  declarations: [
    AppComponent,
    BusinessLogicComponent,
    TechnicalAnalysisComponent,
    ActiveQuestionsComponent,
    UploadFileComponent,
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
    AddPageComponent,
    AddPersonComponent,
    AddGroupComponent,
    AddProjectComponent,
    EditPageComponent,
    AskQuestionComponent,
    AnswerComponent,
    AddNewInfoComponent,
    AddNewDiscussionComponent,
    AddArticleComponent,
    DashboardComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule, 
    
    
    //angular material
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,

    //primeng
    AccordionModule,
    PanelMenuModule,
    ToolbarModule,
    MenuModule,    
    CardModule,
    ButtonModule,
    DialogModule,
    CheckboxModule,
    SplitButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    EditorModule,
    FileUploadModule,
    ToastModule,
    ChipsModule,
    DragDropModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddPageComponent,
    AddGroupComponent,
    AddPersonComponent,
    AddProjectComponent,
    EditPageComponent,
    AskQuestionComponent,
    AnswerComponent,
    AddNewInfoComponent,
    AddNewDiscussionComponent,
    AddArticleComponent
  ]
})
export class AppModule { }
