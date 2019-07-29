import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddPageComponent } from '../../Dashboard/add-page/add-page.component';
import { AddGroupComponent } from '../../Dashboard/add-group/add-group.component';
import { AddPersonComponent } from '../../Dashboard/add-person/add-person.component';


@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  items: MenuItem[];

  onCreatePerson(){
    this.dialog.open(AddPersonComponent);
  }

  onCreateGroup(){
    this.dialog.open(AddGroupComponent);
  }
  ngOnInit() {
    this.items = [{
      
      label: 'Persons',
      items: [
  
          {label:'İbrahim Doğruer'},
          {label:'Abdullah Özkılıç'},
          {label:'Ebubekir Rüzgar'},
          {label:'Add Person', icon:'pi pi-plus',command:()=>this.onCreatePerson()}
      ]
  },
  {
      label: 'Groups',
      items: [
          {label: 'Kırk Haramiler'},
          {label: 'Red Phoenix'},
          {label:'Add Group', icon:'pi pi-plus',command:()=>this.onCreateGroup()}

      ]
  }];
  }

}
