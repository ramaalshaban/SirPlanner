import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Page } from '../Models/Page';

@Injectable({
  providedIn: 'root'
})
export class PageService {


  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/page?projectId="+1
  getPage(): Observable<Page[]> {
    return this.http.get<Page[]>(this.path).pipe(
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
