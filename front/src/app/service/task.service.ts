import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {Task} from "../models/Task";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import {HeaderComponent} from "../navigation/header/header.component";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.httpClient.get<Task[]>('http://127.0.0.1:8000/api/task')
      .pipe(catchError(this.handleError));
  }

  saveTask(title):Observable<Task>{
    return this.httpClient.post<Task>('http://127.0.0.1:8000/api/task',{"title":title})
      .pipe(catchError(this.handleError));
  }
  deleteTask(id):Observable<any>{
    return this.httpClient.delete<any>('http://127.0.0.1:8000/api/task/'+id)
      .pipe(catchError(this.handleError));
  }

  updateTask(title,id):Observable<Task>{
    return this.httpClient.put<Task>('http://127.0.0.1:8000/api/task/'+id,{"title":title})
      .pipe(catchError(this.handleError))
      }

  completeTask(completed,id):Observable<Task>{
    return this.httpClient.post<Task>('http://127.0.0.1:8000/api/task/uc/'+id,{"completed":completed})
      .pipe(catchError(this.handleError))
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }




}
