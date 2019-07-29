import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MatDialog} from '@angular/material/dialog';
import { AddPageComponent } from '../../Dashboard/add-page/add-page.component';
import {SelectItem} from 'primeng/api';
import { AddNewInfoComponent } from '../../Dashboard/add-new-info/add-new-info.component';
import { AddNewDiscussionComponent } from '../../Dashboard/add-new-discussion/add-new-discussion.component';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app/Layout/left-menu/Projects';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  items: MenuItem[];
  projects:Project[];
  constructor(private dialog:MatDialog, private http:HttpClient) {

  }
  onCreatePage(){
    this.dialog.open(AddPageComponent);
  }
  onCreateOther(){
    this.dialog.open(AddNewInfoComponent);
  }
  onCreateDiscussion(){
    this.dialog.open(AddNewDiscussionComponent);
  }

  ngOnInit() {
    this.http.get<Project[]>("http://localhost:3000/project").subscribe(data=>{
      this.projects = data;
        console.log(this.projects)
    }) 
  
 
    this.items = [
      {
        label: 'Discussion',

        items: [
          {label:'Add New Discussion' ,icon:'pi pi-plus',command:()=>this.onCreateDiscussion()},
          {
            label: 'Time out Periot ',
          },
          {
            label: 'Productivity',
          }
        ]
      },
      {
        label: 'Pages',

        items: [
          {label:'Add New Page' ,icon:'pi pi-plus',command:()=>this.onCreatePage()},
          { label: 'MDE-BDE'},
          { label: 'Maintanence'},
          { label: 'Prod Datas'},
          { label: 'Prod Datas Details'},
          { label: 'Reports'}
        ]
      },
      {
        label: 'Others',

        items: [
          {label:'Add New Info' ,icon:'pi pi-plus',command:()=>this.onCreateOther()},
          {
            label: 'DailyReport',
          },
          {
            label: 'General Informations',
          }
        ]
      },
    ];

    
  }

}
