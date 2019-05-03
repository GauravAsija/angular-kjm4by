import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {

  title = "Gaurav Asija";
  private firstname = "Nikhil";
  private lastname = "Asija";

  bool = true;

  constructor() { }

  ngOnInit() {

    console.log("Welcome"+ " "+ this.getName());

  }

  getName(){
    return this.firstname + " " + this.lastname;
  }

}
