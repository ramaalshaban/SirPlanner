import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  constructor() { }
  
  GrupName: string[];

  ngOnInit() {
  }

}
