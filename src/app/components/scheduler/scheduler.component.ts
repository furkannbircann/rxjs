import { AfterViewInit, Component, OnInit } from '@angular/core';
import { asyncScheduler, Observable, observeOn } from 'rxjs';

@Component({
  selector: 'app-scheduler',
  imports: [],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent implements OnInit, AfterViewInit{
  name:string = '';
  ngOnInit(): void {
    console.log('SchedulerComponent');

    console.log('Scheduler Kullanılmayan *');
    const observable = new Observable<any>((subscriber) => {
      subscriber.next(1); //emit the value
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete(); //complete the observable
    });

    observable.subscribe((data) => { console.log(data) });

    console.log('Scheduler Kullanılmayan *');
    console.log('------------------------------');
    console.log('Scheduler Kullanılan *');
    const observable2 = new Observable<any>((subscriber) => {
      subscriber.next(1); //emit the value
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete(); //complete the observable
    }).pipe(observeOn(asyncScheduler));

    observable2.subscribe((data) => { console.log(data) });
    console.log('Scheduler Kullanılan *');
  }

  ngAfterViewInit(): void {
    asyncScheduler.schedule(() => {
      this.name = 'Furkan';
    });
  }
}
