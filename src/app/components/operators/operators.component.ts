import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss'
})
export class OperatorsComponent implements OnInit {
  ngOnInit() {

    /* Ajax Operator */
    //get request
    ajax.getJSON('https://jsonplaceholder.typicode.com/posts').subscribe(data => console.log(data));

    //post request
    ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs'
      },
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    }).subscribe(data => console.log(data));

    
  }

}
