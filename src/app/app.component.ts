import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angProj002';
  firstName : String = '';
  
  constructor(){
  
  }
  
  ngOnInit () {
    this.firstName = 'Angular Application';
  }
  
}
