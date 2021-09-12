import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];
  
  // Constructor is used to import services
  constructor(private todoService:TodoService) { }

  ngOnInit() {

    // Asyncronous
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
    ;

    // this.todos = this.todoService.getTodos();

    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: false
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: false
    //   }
    // ]
  }

  deleteTodo(todo:Todo) {
    // console.log('todo has been deleted');
    
    //Delete from UI:
    this.todos = this.todos.filter(t => t.id !== todo.id);

    //Delete from Server:
    this.todoService.deleteTodo(todo).subscribe();

  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
