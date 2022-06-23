
import { Component, OnInit, OnDestroy } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  date: Date = new Date();

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  user='';

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {


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
