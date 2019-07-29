import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { Person } from '../Models/Person';
import { tap, catchError } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/person?projectId="+1//projeid
  getPerson():Observable<Person[]>{
    return this.http.get<Person[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
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
