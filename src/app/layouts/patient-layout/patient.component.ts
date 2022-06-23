import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Patient } from 'src/app/entities/patient';
import { PatientService } from 'src/app/entities/patient.service';


import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit, OnDestroy {


  patients: Patient[];

  date: Date = new Date();
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe( result => { this.patients=result; } );

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

/*
  public getPatients(): void {
    this.patientService.getPatients().subscribe(
      (response: Patient[]) => {
        this.patients = response;
        console.log(this.patients);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
/*
  public onAddPatient(addForm: NgForm): void{
    document.getElementById("add-patient-form").click();
    this.patientService.addPatient(addForm.value).subscribe(
      (response: Patient) => {
        console.log(response);
        this.getPatients();

        addForm.reset();

      },

      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    );
  }

  public onUpdatePatient(patient: Patient): void{
    this.patientService.updatePatient(patient).subscribe(
      (response: Patient) => {
        console.log(response);
        this.getPatients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }

  public onOpenModal(patient: Patient, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode == 'add') {
      button.setAttribute('data-target','#addPatientModal');
    }



    container.appendChild(button);
    button.click();
  }
*/
}
