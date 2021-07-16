import { Component, OnInit } from '@angular/core';
import { TodoTaskModel } from '../models/app.model';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent implements OnInit {

  showAddHolder: boolean = false;

  todoTaskArr: Array<TodoTaskModel> = [];

  addtaskArr: any = {};

  dummy: string = '';

  constructor() { }

  ngOnInit(): void {
    this.addtaskArr = { name: 'sample', desc: '', date: '' }
  }

  showhideAddHolder() {
    // if (this.showAddHolder) {
    //   this.showAddHolder = false;
    // } else {
    //   this.showAddHolder = true;
    // }

    this.showAddHolder = !this.showAddHolder;
  }

}
