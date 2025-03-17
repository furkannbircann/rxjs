import { Component, OnInit } from '@angular/core';
import { bindCallback, defer, empty, from, fromEvent, generate, interval, Observable, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

declare var $: any;

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss',
})
export class OperatorsComponent implements OnInit {
  ngOnInit() {
    /* Ajax Operator */
    //get request
    ajax
      .getJSON('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => console.log(data));

    //post request
    ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs',
      },
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    }).subscribe((data) => console.log(data));

    /* bindCallBack operator */

    /* 
    $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data :any) {
      console.log('data',data);
    });
    */

    /* 
    const obs : (url:string) => Observable<any> = bindCallback($.getJSON);

    obs('https://jsonplaceholder.typicode.com/posts').subscribe(data => console.log('bindCallBack', data));
    */

    /* Defer Operator */

    const obs1 = of(new Date());

    const deferObs = defer(() => of(new Date())); //subscribing to the observable will create a new date object

    timer(5000).subscribe(() => {
      obs1.subscribe((data) => console.log('obs1', data));
      deferObs.subscribe((data) => console.log('deferObs', data));
    });

    /* Empty Operator */

    /*
    const result = empty();
    result.subscribe(data => console.log('empty', data));
    */

    const emptyObs = of();
    emptyObs.subscribe((data) => console.log('emptyObs', data));

    /* From Operator */

    const cars = new Map<string, number>();
    cars.set('car1', 1);
    cars.set('car2', 2);
    from(cars).subscribe((data) => console.log('cars', data));

    const numbers = [5, 10, 15];
    from(numbers).subscribe((data) => console.log('numbers', data));

    /* fromEvent Operator */

    //Javascript
    const button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', () => console.log('Clicked!'));

    //Rxjs

    fromEvent(button, 'click').subscribe(() => console.log('From-Event Clicked!'));

    /* generate operator */

    const generateObs = generate(2, (x) => x < 10, (x) => x + 2);
    generateObs.subscribe((data) => console.log('generate', data));

    /* interval operator */

    const intervalObs = interval(5000);
    intervalObs.subscribe((data) => console.log('interval', data));
  }
}
