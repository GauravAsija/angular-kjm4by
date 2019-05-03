import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component implements OnInit {

  todos = [
    {id: 1, taskName: "Hello 1", isCompleted: false},
    {id: 2, taskName: "Hello 2", isCompleted: true}
  ];

  title = '';
  expanded = true;
  classAdd = false;
  isCompleted = false;



  constructor() { }

  ngOnInit() {
    console.log(this.todos);
  }

  onClick(){
    console.log("New Added -- ", this.title);
    this.todos.push({id: this.todos.length + 1,taskName: this.title, isCompleted: false});
    this.title = '';

  }
  onDelete(i){

    this.todos.splice(i, 1);

  }

  toggleTable(){
    console.log("Hide Show");
    this.expanded = !this.expanded;
    this.classAdd = !this.classAdd;
  }

  completedTask1(){
    // Add toggle Class name {taskDone} When click on checkbox True / False;
      // var i;
      // for(i = 0; i < this.todos.length; i++){
      //   if(this.todos[i].isCompleted == true){
      //       console.log("Done");
            
      //   }
      // }
      this.isCompleted = !this.isCompleted;}

  completedTask(){

  }

}
