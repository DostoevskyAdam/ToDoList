import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

// Set Dynamic Classes
setClasses() {
  let classes = {
    todo: true,
    'is-complete': this.todo.completed
  }
  return classes;
}

onToggle(todo: any){
  // console.log('toggle');

  // Toggle in UI
  todo.completed = !todo.completed;

  // Toggle on Server
  this.todoService.toggleCompleted(todo).subscribe((todo: any) => console.log(todo));
}

onDelete(todo: any){
  // console.log('delete');

  this.deleteTodo.emit(todo);
}
}
