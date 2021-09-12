import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Limit the number of todos returned from Url without changing Url:
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit= '?_limit=5';
  constructor(private http:HttpClient) { }

  // Get todos as an array
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Delete Todos
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // Toggle Completed
  // A put request updates on the server
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);

  }

  // Limit the number of todos returned from Url:
  // todosUrl:string = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
  // constructor(private http:HttpClient) { }
  // // returns an array of todos
  // getTodos():Observable<Todo[]> {
  //   return this.http.get<Todo[]>(this.todosUrl);}
  
  //Return all the Todos from the Url:
  // todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  // constructor(private http:HttpClient) { }
  // // returns an array of todos
  // getTodos():Observable<Todo[]> {
  //   return this.http.get<Todo[]>(this.todosUrl);}
    
    
    // return [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: true
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: true
    //   }
    // ]}

}
