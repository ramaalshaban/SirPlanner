import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { Group } from '../Models/Group';
import { tap, catchError } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/group?projectId="+1//projectId
  getGroup():Observable<Group[]>{
    return this.http.get<Group[]>(this.path).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
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
