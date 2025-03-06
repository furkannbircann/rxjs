import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    //Reactive Programming with RxJS
    const observable = new Observable<any>((subscriber) => {
      subscriber.next(1); //emit the value
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next('observable');
      subscriber.next(4);
      subscriber.complete(); //complete the observable
    }); //.subscribe((data) => { console.log(data) }); option 1

    // option 2
    // const observer = function (data: any) { 
    //  console.log(data);
    // };

    //option 3
    const observer = (data : any) => console.log(data);

    observable.subscribe(observer);


    const subject = new Subject<any>();
    subject.subscribe(data => console.log(`ObserverA: ${data}`));
    subject.subscribe(data => console.log(`ObserverB: ${data}`));
    subject.next(1);
    subject.next(2);
    subject.subscribe(data => console.log(`ObserverC: ${data}`));
    subject.next(3);
    subject.next('subject');
    subject.next(4);
    subject.complete();

    subject.subscribe(data => console.log(data));

    //BehaviorSubject
    const behaviorSubject = new BehaviorSubject<any>(0); //initial value
    behaviorSubject.subscribe(data => console.log(`ObserverA: ${data}`));
    behaviorSubject.subscribe(data => console.log(`ObserverB: ${data}`));
    behaviorSubject.next(1);
    behaviorSubject.next(2);
    behaviorSubject.subscribe(data => console.log(`ObserverC: ${data}`));
    behaviorSubject.next(3);
    behaviorSubject.next('behaviorSubject');
    behaviorSubject.next(4);
    behaviorSubject.complete();

    behaviorSubject.subscribe(data => console.log(data));

    //ReplaySubject
    const replaySubject = new ReplaySubject<any>(); //buffer size
    replaySubject.subscribe(data => console.log(`ObserverA: ${data}`));
    replaySubject.subscribe(data => console.log(`ObserverB: ${data}`));
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.subscribe(data => console.log(`ObserverC: ${data}`));
    replaySubject.next(3);
    replaySubject.next('replaySubject');
    replaySubject.next(4);
    replaySubject.complete();

    replaySubject.subscribe(data => console.log(data));

    //AsyncSubject
    const asyncSubject = new AsyncSubject<any>();
    asyncSubject.subscribe(data => console.log(`ObserverA: ${data}`));
    asyncSubject.subscribe(data => console.log(`ObserverB: ${data}`));
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.subscribe(data => console.log(`ObserverC: ${data}`));
    asyncSubject.next(3);
    asyncSubject.next('asyncSubject');
    asyncSubject.next(4);
    asyncSubject.complete();

    asyncSubject.subscribe(data => console.log(data));
  }
}
