import { Injectable } from '@angular/core';
import { Project } from '../Models/Projects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
 

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/project"
  getProject():Observable<Project[]> {
    return this.http.get<Project[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
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
