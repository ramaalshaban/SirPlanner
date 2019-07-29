import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Discussion } from '../Models/Discussion';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { catchError, tap } from '../../../node_modules/rxjs/operators';
import { Project } from '../Models/Projects';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  proje: Project;
  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/discussion?projectId=" + 1//this.proje.id
  getDiscussion(): Observable<Discussion[]> {
    return this.http.get<Discussion[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage)
  }
}
