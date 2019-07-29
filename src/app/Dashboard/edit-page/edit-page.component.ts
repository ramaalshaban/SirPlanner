import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private http:HttpClient) { }

  userId = 1;       // Bu bilgi cookie den gelecek.
  
  user = {};
  department:string; 

  ngOnInit() {
    this.http.get<any>("http://localhost:3000/person/" + this.userId).subscribe(data => {
      this.user = data;
    })
    this.http.get<any>("http://localhost:3000/department/"+this.user[0].departmentId).subscribe(data => {
      this.department = data.departmenName;
    })
  }
  
  
}
