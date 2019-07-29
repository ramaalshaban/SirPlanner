import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from 'src/app/Layout/right-menu/Person';
import { Http } from '@angular/http';


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  availablePerson : Person[];

  selectedPerson : Person[];

  draggedPerson : Person;

  constructor(private http: HttpClient){}
 
  GrupName: string[];

  Persons = [];

  ngOnInit() {
  this.selectedPerson =[];
    this.http.get<any>("http://localhost:3000/person?projectId" + 1).subscribe(person => this.availablePerson  = person);
          
  }
  dragStart(event,person: Person){
    this.draggedPerson = person;
  }
  drop(event){
    if(this.draggedPerson){
      let draggedPersonIndex = this.findIndex(this.draggedPerson);
      this.selectedPerson = [...this.selectedPerson, this.draggedPerson];
            this.availablePerson = this.availablePerson.filter((val,i) => i!=draggedPersonIndex);
            this.draggedPerson = null;
    }
  }
  dragEnd(event) {
    this.draggedPerson = null;
}

findIndex(person: Person) {
    let index = -1;
    for(let i = 0; i < this.availablePerson.length; i++) {
        if(person.id === this.availablePerson[i].id) {
            index = i;
            break;
        }
    }
    return index;
}

}
