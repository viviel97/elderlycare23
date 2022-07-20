import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";

import { ActivatedRoute, Router } from '@angular/router';
import { Radar } from 'src/app/entities/radar';
import { RadarService } from 'src/app/entities/radar.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-allradar',
  templateUrl: './allradar.component.html',
  styleUrls: ['./allradar.component.css']
})
export class AllradarComponent implements OnInit, OnDestroy {

  radars: Radar[];

  date: Date = new Date();
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  user=''

  constructor(private radarService: RadarService, private router: Router, private route: ActivatedRoute, private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.radarService.getRadars().subscribe( result => { this.radars=result; } );

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
      this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user=this.keycloakService.getUsername();
  }

  logout():void {
    this.keycloakService.logout('http://localhost:4200');
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
