import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddPageComponent } from '../../Dashboard/add-page/add-page.component';
import { AddGroupComponent } from '../../Dashboard/add-group/add-group.component';
import { AddPersonComponent } from '../../Dashboard/add-person/add-person.component';
import { HttpClient } from '@angular/common/http';
import { Person } from './Person';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  items: MenuItem[];
  persons: Person[];
  groups = []

  onCreatePerson() {
    this.dialog.open(AddPersonComponent);
  }

  onCreateGroup() {
    this.dialog.open(AddGroupComponent);
  }
  ngOnInit() {

    this.http.get<Person[]>("http://localhost:3000/person").subscribe(data => {
      this.persons = data;

      this.http.get<any>("http://localhost:3000/group").subscribe(data => {
        this.groups = data;

        this.items = [{

          label: 'Persons',
          items: [
            { label: this.persons[0].name },
            { label: this.persons[1].name },
            { label: this.persons[2].name },
            { label: 'Add Person', icon: 'pi pi-plus', command: () => this.onCreatePerson() }
          ]
        },
        {
          label: 'Groups',
          items: [
            { label: this.groups[0].groupName },
            { label: this.groups[1].groupName },
            { label: 'Add Group', icon: 'pi pi-plus', command: () => this.onCreateGroup() }
          ]
        }];

      });
    });
  }



}
