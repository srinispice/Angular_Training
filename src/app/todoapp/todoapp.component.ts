import { Component, OnInit } from '@angular/core';
import { TodoTaskModel } from '../models/app.model';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent implements OnInit {

  showAddHolder: boolean = false;

  todoTaskArr: Array<TodoTaskModel> = [
    { id: 1, name: 'buy cloth', desc: 'cloth', date: 'today' },
    { id: 2, name: 'buy food', desc: 'food', date: 'yesterday' },
    { id: 3, name: 'buy vegetable', desc: 'vegetable', date: 'tomorrow' }
  ];
  delToDoArr: any = [];

  addtaskArr: any = {};
  incNum: number = 0;

  addEditLable: string = '';

  selDelArr: any = [];

  constructor() { }

  ngOnInit(): void {
    this.addtaskArr = { id: '', name: '', desc: '', date: '' };
  }

  showhideAddHolder(id?: number) {
    // if (this.showAddHolder) {
    //   this.showAddHolder = false;
    // } else {
    //   this.showAddHolder = true;
    // }

    this.addEditLable = (id) ? 'Edit' : 'Add';

    if (id) {
      for (let i = 0; i < this.todoTaskArr.length; i++) {
        if (id == this.todoTaskArr[i]['id']) {
          this.addtaskArr['id'] = this.todoTaskArr[i]['id'];
          this.addtaskArr['name'] = this.todoTaskArr[i]['name'];
          this.addtaskArr['desc'] = this.todoTaskArr[i]['desc'];
          this.addtaskArr['date'] = this.todoTaskArr[i]['date'];
        }
      }
    } else {
      this.addtaskArr = { name: '', desc: '', date: '' };
    }
    this.showAddHolder = !this.showAddHolder;
  }

  addEditTodoTask() {
    if (this.addtaskArr['id']) {
      for (let i = 0; i < this.todoTaskArr.length; i++) {
        if (this.addtaskArr['id'] == this.todoTaskArr[i]['id']) {
          this.todoTaskArr[i] = this.addtaskArr;
        }
      }
    } else {
      console.log('add');
      this.addtaskArr['id'] = ++this.incNum;
      this.todoTaskArr.push(this.addtaskArr);
    }
    this.showAddHolder = !this.showAddHolder;
    console.log(this.todoTaskArr);
  }

  addRemoveTask(e: any) {

    let selVal = parseInt(e.target.value);

    if (this.selDelArr.indexOf(selVal) >= 0) {
      // there
      this.selDelArr.splice(this.selDelArr.indexOf(selVal), 1);
    } else {
      // not there
      this.selDelArr.push(selVal);
    }
    console.log(this.selDelArr);
  }

  delTodoTask(id: number) {
    console.log(id);
    for (let i = 0; i < this.todoTaskArr.length; i++) {
      if (id == this.todoTaskArr[i]['id']) {
        this.todoTaskArr.splice(i, 1);
      }
    }
  }

  multipleDel() {
    if (this.selDelArr.length > 0) {
      for (let i = 0; i < this.selDelArr.length; i++) {
        this.delTodoTask(this.selDelArr[i]);
      }
    }
    this.selDelArr = [];
  }

}
