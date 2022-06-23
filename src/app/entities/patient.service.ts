import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Patient } from './patient';

@Injectable({ providedIn: 'root' })

export class PatientService {

  private _patientJson="../../assets/patients.json";

  constructor(private http: HttpClient) { }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this._patientJson);

  }

  
}
