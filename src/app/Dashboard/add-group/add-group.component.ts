import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  constructor(private http: HttpClient) { }

  GrupName: string[];

  Persons = [];

  ngOnInit() {
    this.http.get<any>("http://localhost:3000/person?projectId" + 1 /*Burası dinamik olmalı*/).subscribe(data => {
      this.Persons = data;
    });
  }

}
