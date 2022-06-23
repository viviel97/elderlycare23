import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";


import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-onepatient',
  templateUrl: './onepatient.component.html',
  styleUrls: ['./onepatient.component.css']
})
export class OnepatientComponent implements OnInit, OnDestroy {

  onejson=[
    {
     "RadarId": 0,
     "nome": "Alfredo Neri",
     "sesso": "M",
     "eta": 82
    },
    {
      "RadarId": 1,
      "nome": "Maria Bianchi",
      "sesso": "F",
      "eta": 73
     },
     {
      "RadarId": 2,
      "nome": "Michela Rossi",
      "sesso": "F",
      "eta": 77
     },
     {
      "RadarId": 3,
      "nome": "Roberto Verdi",
      "sesso": "M",
      "eta": 75
     }
  ];


  data:number;

  date: Date = new Date();
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=params.patientId;
    })
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });

  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
