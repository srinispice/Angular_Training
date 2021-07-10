import { Component, OnInit } from '@angular/core';
import { HeaderModel } from '../models/app.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fname : String = '';
  lname : String = '';
  
  sampleArr : Array<HeaderModel> = [];
  people : Array<any> = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.fname = 'John';
    this.lname = 'Michale';
    this.sampleArr = [ { name : 'srini', value : 1, design : 'ANG' }, { name : 'sam', value : 2, design :'PHP' }, { name : 'arun', value : 3, design : 'IPHONE' } ];
    this.dummyFunc();
    console.log(this.fname);
  }
  
  dummyFunc () {
    let fname = 'hai';
    console.log(this.fname);
    console.log(fname);
  }
  
  checkCls(val:any){
    if(val.country === 'UK'){
      return 'ukCls';
    }else{
      return 'defCls';
    }
  }
  

}
