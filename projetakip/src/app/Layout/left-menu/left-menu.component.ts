import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddPageComponent } from '../../Dashboard/add-page/add-page.component';
import {SelectItem} from 'primeng/api';

interface Project {
  name: string;
}

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  projects: SelectItem[];

  selectedProject: Project[];

  items: MenuItem[];

  constructor(  private dialog:MatDialog) {
  
  }
  onCreatePage(){
    this.dialog.open(AddPageComponent);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Discussion',

        items: [
          {label:'Add New Discussion' ,icon:'pi pi-plus',command:()=>this.onCreatePage()},
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
          {label:'Add New Info' ,icon:'pi pi-plus',command:()=>this.onCreatePage()},
          {
            label: 'DailyReport',
          },
          {
            label: 'General Informations',
          }
        ]
      },
    ];

    this.projects = [
      {label:'AtmoDataZone', value:{id:0, name: 'AtmoDataZone'}},
      {label:'Trello', value:{id:1, name: 'Trello'}},
      {label:'SpaceX', value:{id:2, name: 'SpaceX'}},
      {label:'3. Hava Limanı', value:{id:3, name: '3. Hava Limanı'}},
      {label:'Akkuyu Nükleer Santrali', value:{id:4, name: 'Akkuyu Nükleer Santrali'}}
    ];
  }

}
