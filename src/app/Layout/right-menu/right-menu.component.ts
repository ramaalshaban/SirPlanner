import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPageComponent } from '../../Dashboard/add-page/add-page.component';
import { AddGroupComponent } from '../../Dashboard/add-group/add-group.component';
import { AddPersonComponent } from '../../Dashboard/add-person/add-person.component';
import { HttpClient } from '@angular/common/http';
import { Person } from '../../Models/Person';
import { Group } from '../../Models/Group';
import { GroupService } from '../../Services/group.service';
import { PersonService } from '../../Services/person.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private groupService:GroupService,
              private personService:PersonService) { }

  items: MenuItem | MenuItem[];
  persons: Person[];
  groups : Group[];

  onCreatePerson() {
    this.dialog.open(AddPersonComponent);
  }

  onCreateGroup() {
    this.dialog.open(AddGroupComponent);
  }
  
  //kişileri çekip menu item'a ekliyoruz
  getPerson(){
      this.personService.getPerson().subscribe(data=>{
        this.persons = data;
        this.persons.map(person => {
          this.items[0].items.push({ label: person.name, value: person.id })
        })
        this.items[0].items.push({ label: 'Add Person', icon: 'pi pi-plus', command: () => this.onCreatePerson() });
      })
  }

  //grupları çekip menu item'a ekliyoruz
  getGroup(){
    this.groupService.getGroup().subscribe(data=>{
      this.groups = data;
      this.groups.map(group => {
        this.items[1].items.push({ label: group.groupName, value: group.id })
      })
      this.items[1].items.push({ label: 'Add Group', icon: 'pi pi-plus', command: () => this.onCreateGroup() });
    })
  }

  ngOnInit() {

    this.getPerson();
    this.getGroup();


    //menu items
    this.items = [
      {
        label: 'Persons',
        items: []
      },
      {
        label: 'Groups',
        items: []
      }
    ];
  }



}
