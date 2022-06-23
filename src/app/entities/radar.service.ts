import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Radar } from './radar';

@Injectable({
  providedIn: 'root'
})
export class RadarService {

  private _radarJson="../../assets/dinamoDB.json";

  constructor(private http: HttpClient) { }

  public getRadars(): Observable<Radar[]> {
    return this.http.get<Radar[]>(this._radarJson);

  }






}
