/*
import { Injectable } from '@angular/core';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { Other } from '../Models/Other';
import { catchError, tap } from '../../../node_modules/rxjs/operators';
import { HttpErrorResponse, HttpClient } from '../../../node_modules/@angular/common/http';
import { Project } from '../Models/Projects';

@Injectable({
  providedIn: 'root'
})
export class OtherService {
 
  proje: Project;
  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/other?projectId="+1//this.proje.id
  getOther():Observable<Other[]>{
    return this.http.get<Other[]>(this.path).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message;
    }else{
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage)
  }
  
}
*/