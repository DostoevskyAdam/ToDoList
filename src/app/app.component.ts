import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = '';
    constructor(){
      
    }
  // name:string = 'Jimmy';

  // constructor() {
  //   console.log(123);
  //   this.name = 't';
  //   this.changeName('Johnny')
  // }

  // changeName(name:string):void {
  //   this.name = name;
  // }
}
