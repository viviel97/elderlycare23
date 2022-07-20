import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
//import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle } from 'ng-apexcharts';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from "ng-apexcharts";

import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Radar } from 'src/app/entities/radar';
import { RadarService } from 'src/app/entities/radar.service';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  series2: ApexAxisChartSeries;
  series3: ApexAxisChartSeries;
  series4: ApexAxisChartSeries;

  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  title2: ApexTitleSubtitle;

  titleReal: ApexTitleSubtitle;
  titleReal2: ApexTitleSubtitle;

};



@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit, OnDestroy {

  data:number;
  user=''
  date: Date = new Date();
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;

  stress: any[]=[];
  riposo: any[]=[];


  stress2: any[]=[];
  riposo2: any[]=[];

  pat=[
    'Alfredo Neri', 'Maria Bianchi', 'Michela Rossi', 'Roberto Verdi'
  ];

  radars: Radar[]

  json = [
    {
      "RadarId": 0,
      "active": true,
      "Item": [
        {
        "ts": "2021-12-02T00:01:02.000Z",
        "Activity": {
          "heart": [
             {
                  "N": 6
                },
                {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 4
                },
                {
                  "N": 9
                }
            ]
          ,
          "breath":[
              {
                "N": 5
              },
              {
                "N": 9
              },
              {
                "N": 2
              },
              {
                "N": 2
              },
              {
                "N": 9
              }
            ]
          }
        },
        {
          "ts": "2021-12-02T00:06:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 3
                },
                {
                  "N": 1
                },
                {
                  "N": 5
                },
                {
                  "N": 1
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 7
                },
                {
                  "N": 9
                },
                {
                  "N": 4
                },
                {
                  "N": 2
                },
                {
                  "N": 8
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:11:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 4
                },
                {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 6
                },
                {
                  "N": 4
                }
              ]
            ,
            "breath":[
                {
                  "N": 1
                },
                {
                  "N": 4
                },
                {
                  "N": 9
                },
                {
                  "N": 7
                },
                {
                  "N": 6
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:16:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 6
                },
                {
                  "N": 4
                }
              ]
            ,
            "breath":[
                {
                  "N": 4
                },
                {
                  "N": 4
                },
                {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 7
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:21:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 9
                },
                {
                  "N": 1
                },
                {
                  "N": 4
                },
                {
                  "N": 6
                },
                {
                  "N": 9
                }
              ]
            ,
            "breath":[
                {
                  "N": 9
                },
                {
                  "N": 3
                },
                {
                  "N": 2
                },
                {
                  "N": 5
                },
                {
                  "N": 3
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:26:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                },
                {
                  "N": 6
                },
                {
                  "N": 7
                }
              ]
            ,
            "breath":[
                {
                  "N": 5
                },
                {
                  "N": 5
                },
                {
                  "N": 3
                },
                {
                  "N": 8
                },
                {
                  "N": 1
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:31:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 8
                },
                {
                  "N": 5
                },
                {
                  "N": 8
                },
                {
                  "N": 9
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 5
                },
                {
                  "N": 9
                },
                {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 9
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:36:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 5
                },
                {
                  "N": 9
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                },
                {
                  "N": 6
                }
              ]
            ,
            "breath":[
                {
                  "N": 8
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                },
                {
                  "N": 4
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:41:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 4
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 8
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 9
                },
                {
                  "N": 3
                },
                {
                  "N": 9
                },
                {
                  "N": 2
                },
                {
                  "N": 3
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:46:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 6
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 8
                },
                {
                  "N": 3
                },
                {
                  "N": 4
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:51:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 5
                },
                {
                  "N": 7
                },
                {
                  "N": 3
                },
                {
                  "N": 3
                },
                {
                  "N": 4
                }
              ]
            ,
            "breath":[
                {
                  "N": 4
                },
                {
                  "N": 2
                },
                {
                  "N": 4
                },
                {
                  "N": 5
                },
                {
                  "N": 8
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:56:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 1
                },
                {
                  "N": 1
                },
                {
                  "N": 9
                },
                {
                  "N": 8
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 4
                },
                {
                  "N": 4
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 7
                }
              ]
            }
        }

      ]
    },
    {
      "RadarId": 1,
      "active": true,
      "Item": [
        {
        "ts": "2021-12-02T00:01:02.000Z",
        "Activity": {
          "heart": [
             {
                  "N": 8
                },
                {
                  "N": 9
                },
                {
                  "N": 5
                },
                {
                  "N": 9
                },
                {
                  "N": 9
                }
            ]
          ,
          "breath":[
              {
                "N": 9
              },
              {
                "N": 8
              },
              {
                "N": 9
              },
              {
                "N": 2
              },
              {
                "N": 9
              }
            ]
          }
        },
        {
          "ts": "2021-12-02T00:06:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 6
                },
                {
                  "N": 6
                },
                {
                  "N": 4
                },
                {
                  "N": 5
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 8
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 9
                },
                {
                  "N": 1
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:11:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 1
                },
                {
                  "N": 8
                },
                {
                  "N": 1
                },
                {
                  "N": 2
                },
                {
                  "N": 6
                }
              ]
            ,
            "breath":[
                {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 4
                },
                {
                  "N": 9
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:16:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 5
                },
                {
                  "N": 7
                },
                {
                  "N": 8
                }
              ]
            ,
            "breath":[
                {
                  "N": 6
                },
                {
                  "N": 5
                },
                {
                  "N": 6
                },
                {
                  "N": 2
                },
                {
                  "N": 8
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:21:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 6
                },
                {
                  "N": 1
                },
                {
                  "N": 3
                },
                {
                  "N": 1
                },
                {
                  "N": 6
                }
              ]
            ,
            "breath":[
                {
                  "N": 7
                },
                {
                  "N": 8
                },
                {
                  "N": 8
                },
                {
                  "N": 6
                },
                {
                  "N": 7
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:26:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 3
                },
                {
                  "N": 5
                },
                {
                  "N": 3
                },
                {
                  "N": 8
                },
                {
                  "N": 3
                }
              ]
            ,
            "breath":[
                {
                  "N": 4
                },
                {
                  "N": 5
                },
                {
                  "N": 8
                },
                {
                  "N": 8
                },
                {
                  "N": 4
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:31:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 9
                },
                {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 8
                }
              ]
            ,
            "breath":[
                {
                  "N": 9
                },
                {
                  "N": 4
                },
                {
                  "N": 9
                },
                {
                  "N": 2
                },
                {
                  "N": 9
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:36:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 8
                },
                {
                  "N": 9
                },
                {
                  "N": 6
                },
                {
                  "N": 2
                },
                {
                  "N": 6
                }
              ]
            ,
            "breath":[
                {
                  "N": 1
                },
                {
                  "N": 4
                },
                {
                  "N": 1
                },
                {
                  "N": 2
                },
                {
                  "N": 5
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:41:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 9
                },
                {
                  "N": 5
                },
                {
                  "N": 4
                },
                {
                  "N": 1
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 4
                },
                {
                  "N": 1
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:46:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 6
                },
                {
                  "N": 6
                },
                {
                  "N": 3
                }
              ]
            ,
            "breath":[
                {
                  "N": 4
                },
                {
                  "N": 8
                },
                {
                  "N": 5
                },
                {
                  "N": 4
                },
                {
                  "N": 4
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:51:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 4
                },
                {
                  "N": 5
                },
                {
                  "N": 5
                },
                {
                  "N": 8
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 1
                },
                {
                  "N": 4
                },
                {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 5
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:56:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 2
                },
                {
                  "N": 9
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 6
                },
                {
                  "N": 6
                },
                {
                  "N": 3
                },
                {
                  "N": 2
                },
                {
                  "N": 3
                }
              ]
            }
        }

      ]
    },
    {
      "RadarId": 2,
      "active": true,
      "Item": [
        {
        "ts": "2021-12-02T00:01:02.000Z",
        "Activity": {
          "heart": [
             {
                  "N": 4
                },
                {
                  "N": 7
                },
                {
                  "N": 1
                },
                {
                  "N": 3
                },
                {
                  "N": 9
                }
            ]
          ,
          "breath":[
              {
                "N": 2
              },
              {
                "N": 9
              },
              {
                "N": 3
              },
              {
                "N": 8
              },
              {
                "N": 7
              }
            ]
          }
        },
        {
          "ts": "2021-12-02T00:06:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 7
                },
                {
                  "N": 2
                },
                {
                  "N": 6
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 9
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:11:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 1
                },
                {
                  "N": 2
                },
                {
                  "N": 7
                }
              ]
            ,
            "breath":[
                {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                },
                {
                  "N": 9
                },
                {
                  "N": 1
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:16:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 5
                },
                {
                  "N": 1
                },
                {
                  "N": 8
                },
                {
                  "N": 8
                },
                {
                  "N": 6
                }
              ]
            ,
            "breath":[
                {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 7
                },
                {
                  "N": 3
                },
                {
                  "N": 2
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:21:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 5
                },
                {
                  "N": 5
                },
                {
                  "N": 4
                },
                {
                  "N": 5
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 4
                },
                {
                  "N": 2
                },
                {
                  "N": 5
                },
                {
                  "N": 6
                },
                {
                  "N": 4
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:26:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 6
                },
                {
                  "N": 3
                },
                {
                  "N": 6
                },
                {
                  "N": 6
                },
                {
                  "N": 3
                }
              ]
            ,
            "breath":[
                {
                  "N": 6
                },
                {
                  "N": 4
                },
                {
                  "N": 7
                },
                {
                  "N": 1
                },
                {
                  "N": 4
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:31:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 4
                },
                {
                  "N": 8
                },
                {
                  "N": 1
                },
                {
                  "N": 1
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 8
                },
                {
                  "N": 8
                },
                {
                  "N": 4
                },
                {
                  "N": 4
                },
                {
                  "N": 8
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:36:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 9
                },
                {
                  "N": 1
                },
                {
                  "N": 4
                },
                {
                  "N": 8
                },
                {
                  "N": 1
                }
              ]
            ,
            "breath":[
                {
                  "N": 2
                },
                {
                  "N": 5
                },
                {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 1
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:41:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 5
                },
                {
                  "N": 5
                },
                {
                  "N": 4
                },
                {
                  "N": 2
                },
                {
                  "N": 8
                }
              ]
            ,
            "breath":[
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:46:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 8
                }
              ]
            ,
            "breath":[
                {
                  "N": 6
                },
                {
                  "N": 2
                },
                {
                  "N": 6
                },
                {
                  "N": 5
                },
                {
                  "N": 6
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:51:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 3
                },
                {
                  "N": 7
                },
                {
                  "N": 6
                }
              ]
            ,
            "breath":[
                {
                  "N": 6
                },
                {
                  "N": 4
                },
                {
                  "N": 7
                },
                {
                  "N": 9
                },
                {
                  "N": 3
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:56:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 3
                },
                {
                  "N": 3
                },
                {
                  "N": 9
                },
                {
                  "N": 9
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 2
                },
                {
                  "N": 1
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                },
                {
                  "N": 1
                }
              ]
            }
        }

      ]
    },
    {
      "RadarId": 3,
      "active": true,
      "Item": [
        {
        "ts": "2021-12-02T00:01:02.000Z",
        "Activity": {
          "heart": [
             {
                  "N": 1
                },
                {
                  "N": 1
                },
                {
                  "N": 4
                },
                {
                  "N": 5
                },
                {
                  "N": 3
                }
            ]
          ,
          "breath":[
              {
                "N": 9
              },
              {
                "N": 9
              },
              {
                "N": 8
              },
              {
                "N": 7
              },
              {
                "N": 9
              }
            ]
          }
        },
        {
          "ts": "2021-12-02T00:06:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 5
                },
                {
                  "N": 5
                },
                {
                  "N": 8
                },
                {
                  "N": 3
                },
                {
                  "N": 4
                }
              ]
            ,
            "breath":[
                {
                  "N": 7
                },
                {
                  "N": 7
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 6
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:11:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 8
                },
                {
                  "N": 9
                },
                {
                  "N": 2
                },
                {
                  "N": 8
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 6
                },
                {
                  "N": 2
                },
                {
                  "N": 7
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:16:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 7
                },
                {
                  "N": 8
                },
                {
                  "N": 6
                },
                {
                  "N": 2
                },
                {
                  "N": 2
                }
              ]
            ,
            "breath":[
                {
                  "N": 2
                },
                {
                  "N": 1
                },
                {
                  "N": 2
                },
                {
                  "N": 3
                },
                {
                  "N": 1
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:21:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 6
                },
                {
                  "N": 2
                },
                {
                  "N": 3
                },
                {
                  "N": 2
                },
                {
                  "N": 3
                }
              ]
            ,
            "breath":[
                {
                  "N": 6
                },
                {
                  "N": 7
                },
                {
                  "N": 2
                },
                {
                  "N": 4
                },
                {
                  "N": 7
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:26:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 6
                },
                {
                  "N": 4
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 8
                },
                {
                  "N": 2
                },
                {
                  "N": 1
                },
                {
                  "N": 4
                },
                {
                  "N": 3
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:31:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 4
                },
                {
                  "N": 2
                },
                {
                  "N": 5
                },
                {
                  "N": 5
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 8
                },
                {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 2
                },
                {
                  "N": 9
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:36:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 3
                },
                {
                  "N": 7
                },
                {
                  "N": 8
                },
                {
                  "N": 7
                },
                {
                  "N": 1
                }
              ]
            ,
            "breath":[
                {
                  "N": 7
                },
                {
                  "N": 4
                },
                {
                  "N": 3
                },
                {
                  "N": 4
                },
                {
                  "N": 4
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:41:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 3
                },
                {
                  "N": 4
                },
                {
                  "N": 6
                },
                {
                  "N": 4
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 6
                },
                {
                  "N": 4
                },
                {
                  "N": 6
                },
                {
                  "N": 5
                },
                {
                  "N": 5
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:46:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 5
                },
                {
                  "N": 4
                },
                {
                  "N": 7
                },
                {
                  "N": 9
                },
                {
                  "N": 9
                }
              ]
            ,
            "breath":[
                {
                  "N": 9
                },
                {
                  "N": 7
                },
                {
                  "N": 5
                },
                {
                  "N": 4
                },
                {
                  "N": 8
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:51:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 2
                },
                {
                  "N": 1
                },
                {
                  "N": 2
                },
                {
                  "N": 1
                },
                {
                  "N": 4
                }
              ]
            ,
            "breath":[
                {
                  "N": 5
                },
                {
                  "N": 4
                },
                {
                  "N": 5
                },
                {
                  "N": 6
                },
                {
                  "N": 8
                }
              ]
            }
        },
        {
          "ts": "2021-12-02T00:56:02.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 9
                },
                {
                  "N": 6
                },
                {
                  "N": 8
                },
                {
                  "N": 9
                },
                {
                  "N": 5
                }
              ]
            ,
            "breath":[
                {
                  "N": 1
                },
                {
                  "N": 3
                },
                {
                  "N": 5
                },
                {
                  "N": 7
                },
                {
                  "N": 9
                }
              ]
            }
        }

      ]
    },
    {
      "RadarId": 4,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 5,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 6,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 7,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 8,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 9,
      "active": false,
      "Item": []
    }
  ];

  json5= [
    {
      "RadarId": 0,
      "active": true,
      "Item": [
        {
        "ts": "2022-06-20T00:01:01.000Z",
        "Activity": {
          "heart": [
            {
                 "N": 60
               },
               {
                 "N": 60
               },
               {
                 "N": 61
               }
           ]
          ,
          "breath":[
              {
                "N": 35
              },
              {
                "N": 37
              },
              {
                "N": 37
              }
            ]
          }
        },
        {
          "ts": "2022-06-20T00:06:01.000Z",
          "Activity": {
            "heart": [
              {
                "N": 61
              },
              {
                "N": 62
              },
              {
                "N": 66
              }
              ]
            ,
            "breath":[
                {
                  "N": 38
                },
                {
                  "N": 38
                },
                {
                  "N": 39
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:11:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 68
                },
                {
                  "N": 70
                },
                {
                  "N": 72
                }
              ]
            ,
            "breath":[
                {
                  "N": 40
                },
                {
                  "N": 41
                },
                {
                  "N": 45
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:16:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 74
                },
                {
                  "N": 74
                },
                {
                  "N": 75
                }
              ]
            ,
            "breath":[
                {
                  "N": 45
                },
                {
                  "N": 48
                },
                {
                  "N": 48
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:21:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 78
                },
                {
                  "N": 78
                },
                {
                  "N": 77
                }
              ]
            ,
            "breath":[
                {
                  "N": 50
                },
                {
                  "N": 50
                },
                {
                  "N": 48
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:26:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 77
                },
                {
                  "N": 78
                },
                {
                  "N": 75
                }
              ]
            ,
            "breath":[
                {
                  "N": 48
                },
                {
                  "N": 50
                },
                {
                  "N": 49
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:31:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 75
                },
                {
                  "N": 74
                },
                {
                  "N": 74
                }
              ]
            ,
            "breath":[
                {
                  "N": 47
                },
                {
                  "N": 47
                },
                {
                  "N": 47
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:36:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 71
                },
                {
                  "N": 71
                },
                {
                  "N": 71
                }
              ]
            ,
            "breath":[
                {
                  "N": 45
                },
                {
                  "N": 43
                },
                {
                  "N": 43
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:41:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 70
                },
                {
                  "N": 68
                },
                {
                  "N": 68
                }
              ]
            ,
            "breath":[
                {
                  "N": 40
                },
                {
                  "N": 40
                },
                {
                  "N": 38
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:46:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 65
                },
                {
                  "N": 65
                },
                {
                  "N": 65
                }
              ]
            ,
            "breath":[
                {
                  "N": 35
                },
                {
                  "N": 35
                },
                {
                  "N": 34
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:51:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 60
                },
                {
                  "N": 58
                },
                {
                  "N": 57
                }
              ]
            ,
            "breath":[
                {
                  "N": 33
                },
                {
                  "N": 33
                },
                {
                  "N": 31
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:56:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 55
                },
                {
                  "N": 50
                },
                {
                  "N": 50
                }
              ]
            ,
            "breath":[
                {
                  "N": 28
                },
                {
                  "N": 28
                },
                {
                  "N": 26
                }
              ]
            }
        }

      ]
    },
    {
      "RadarId": 1,
      "active": true,
      "Item": [
        {
        "ts": "2022-06-20T00:01:01.000Z",
        "Activity": {
          "heart": [
            {
                 "N": 55
               },
               {
                 "N": 55
               },
               {
                 "N": 55
               }
           ]
          ,
          "breath":[
              {
                "N": 30
              },
              {
                "N": 30
              },
              {
                "N": 28
              }
            ]
          }
        },
        {
          "ts": "2022-06-20T00:06:01.000Z",
          "Activity": {
            "heart": [
              {
                "N": 60
              },
              {
                "N": 63
              },
              {
                "N": 66
              }
              ]
            ,
            "breath":[
                {
                  "N": 28
                },
                {
                  "N": 26
                },
                {
                  "N": 26
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:11:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 66
                },
                {
                  "N": 65
                },
                {
                  "N": 66
                }
              ]
            ,
            "breath":[
                {
                  "N": 25
                },
                {
                  "N": 25
                },
                {
                  "N": 28
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:16:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 68
                },
                {
                  "N": 67
                },
                {
                  "N": 68
                }
              ]
            ,
            "breath":[
                {
                  "N": 28
                },
                {
                  "N": 28
                },
                {
                  "N": 28
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:21:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 66
                },
                {
                  "N": 65
                },
                {
                  "N": 66
                }
              ]
            ,
            "breath":[
                {
                  "N": 31
                },
                {
                  "N": 31
                },
                {
                  "N": 35
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:26:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 65
                },
                {
                  "N": 65
                },
                {
                  "N": 68
                }
              ]
            ,
            "breath":[
                {
                  "N": 35
                },
                {
                  "N": 37
                },
                {
                  "N": 37
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:31:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 68
                },
                {
                  "N": 71
                },
                {
                  "N": 71
                }
              ]
            ,
            "breath":[
                {
                  "N": 36
                },
                {
                  "N": 36
                },
                {
                  "N": 40
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:36:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 71
                },
                {
                  "N": 76
                },
                {
                  "N": 76
                }
              ]
            ,
            "breath":[
                {
                  "N": 40
                },
                {
                  "N": 38
                },
                {
                  "N": 38
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:41:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 73
                },
                {
                  "N": 73
                },
                {
                  "N": 75
                }
              ]
            ,
            "breath":[
                {
                  "N": 40
                },
                {
                  "N": 40
                },
                {
                  "N": 45
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:46:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 75
                },
                {
                  "N": 75
                },
                {
                  "N": 77
                }
              ]
            ,
            "breath":[
                {
                  "N": 45
                },
                {
                  "N": 49
                },
                {
                  "N": 49
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:51:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 80
                },
                {
                  "N": 80
                },
                {
                  "N": 78
                }
              ]
            ,
            "breath":[
                {
                  "N": 51
                },
                {
                  "N": 50
                },
                {
                  "N": 52
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:56:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 77
                },
                {
                  "N": 77
                },
                {
                  "N": 77
                }
              ]
            ,
            "breath":[
                {
                  "N": 48
                },
                {
                  "N": 47
                },
                {
                  "N": 47
                }
              ]
            }
        }

      ]
    },
    {
      "RadarId": 2,
      "active": true,
      "Item": [
        {
        "ts": "2022-06-20T00:01:01.000Z",
        "Activity": {
          "heart": [
            {
                 "N": 21
               },
               {
                 "N": 22
               },
               {
                 "N": 21
               }
           ]
          ,
          "breath":[
              {
                "N": 20
              },
              {
                "N": 19
              },
              {
                "N": 19
              }
            ]
          }
        },
        {
          "ts": "2022-06-20T00:06:01.000Z",
          "Activity": {
            "heart": [
              {
                "N": 20
              },
              {
                "N": 23
              },
              {
                "N": 21
              }
              ]
            ,
            "breath":[
                {
                  "N": 22
                },
                {
                  "N": 24
                },
                {
                  "N": 23
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:11:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 21
                },
                {
                  "N": 22
                },
                {
                  "N": 23
                }
              ]
            ,
            "breath":[
                {
                  "N": 22
                },
                {
                  "N": 24
                },
                {
                  "N": 24
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:16:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 24
                },
                {
                  "N": 24
                },
                {
                  "N": 23
                }
              ]
            ,
            "breath":[
                {
                  "N": 25
                },
                {
                  "N": 21
                },
                {
                  "N": 20
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:21:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 22
                },
                {
                  "N": 22
                },
                {
                  "N": 21
                }
              ]
            ,
            "breath":[
                {
                  "N": 23
                },
                {
                  "N": 20
                },
                {
                  "N": 21
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:26:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 21
                },
                {
                  "N": 20
                },
                {
                  "N": 20
                }
              ]
            ,
            "breath":[
                {
                  "N": 21
                },
                {
                  "N": 19
                },
                {
                  "N": 18
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:31:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 19
                },
                {
                  "N": 19
                },
                {
                  "N": 18
                }
              ]
            ,
            "breath":[
                {
                  "N": 17
                },
                {
                  "N": 17
                },
                {
                  "N": 17
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:36:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 18
                },
                {
                  "N": 17
                },
                {
                  "N": 17
                }
              ]
            ,
            "breath":[
                {
                  "N": 16
                },
                {
                  "N": 16
                },
                {
                  "N": 15
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:41:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 19
                },
                {
                  "N": 19
                },
                {
                  "N": 19
                }
              ]
            ,
            "breath":[
                {
                  "N": 18
                },
                {
                  "N": 18
                },
                {
                  "N": 19
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:46:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 20
                },
                {
                  "N": 20
                },
                {
                  "N": 21
                }
              ]
            ,
            "breath":[
                {
                  "N": 22
                },
                {
                  "N": 22
                },
                {
                  "N": 21
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:51:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 22
                },
                {
                  "N": 22
                },
                {
                  "N": 22
                }
              ]
            ,
            "breath":[
                {
                  "N": 23
                },
                {
                  "N": 24
                },
                {
                  "N": 22
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:56:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 23
                },
                {
                  "N": 23
                },
                {
                  "N": 25
                }
              ]
            ,
            "breath":[
                {
                  "N": 21
                },
                {
                  "N": 19
                },
                {
                  "N": 19
                }
              ]
            }
        }

      ]
    },
    {
      "RadarId": 3,
      "active": true,
      "Item": [
        {
        "ts": "2022-06-20T00:01:01.000Z",
        "Activity": {
          "heart": [
            {
                 "N": 77
               },
               {
                 "N": 78
               },
               {
                 "N": 78
               }
           ]
          ,
          "breath":[
              {
                "N": 48
              },
              {
                "N": 51
              },
              {
                "N": 50
              }
            ]
          }
        },
        {
          "ts": "2022-06-20T00:06:01.000Z",
          "Activity": {
            "heart": [
              {
                "N": 79
              },
              {
                "N": 80
              },
              {
                "N": 80
              }
              ]
            ,
            "breath":[
                {
                  "N": 50
                },
                {
                  "N": 50
                },
                {
                  "N": 50
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:11:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 77
                },
                {
                  "N": 77
                },
                {
                  "N": 76
                }
              ]
            ,
            "breath":[
                {
                  "N": 47
                },
                {
                  "N": 47
                },
                {
                  "N": 45
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:16:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 75
                },
                {
                  "N": 75
                },
                {
                  "N": 74
                }
              ]
            ,
            "breath":[
                {
                  "N": 44
                },
                {
                  "N": 45
                },
                {
                  "N": 43
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:21:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 76
                },
                {
                  "N": 76
                },
                {
                  "N": 77
                }
              ]
            ,
            "breath":[
                {
                  "N": 45
                },
                {
                  "N": 44
                },
                {
                  "N": 44
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:26:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 75
                },
                {
                  "N": 75
                },
                {
                  "N": 74
                }
              ]
            ,
            "breath":[
                {
                  "N": 43
                },
                {
                  "N": 42
                },
                {
                  "N": 42
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:31:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 73
                },
                {
                  "N": 73
                },
                {
                  "N": 71
                }
              ]
            ,
            "breath":[
                {
                  "N": 42
                },
                {
                  "N": 42
                },
                {
                  "N": 40
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:36:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 70
                },
                {
                  "N": 68
                },
                {
                  "N": 68
                }
              ]
            ,
            "breath":[
                {
                  "N": 38
                },
                {
                  "N": 36
                },
                {
                  "N": 36
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:41:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 66
                },
                {
                  "N": 65
                },
                {
                  "N": 65
                }
              ]
            ,
            "breath":[
                {
                  "N": 35
                },
                {
                  "N": 34
                },
                {
                  "N": 34
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:46:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 60
                },
                {
                  "N": 58
                },
                {
                  "N": 55
                }
              ]
            ,
            "breath":[
                {
                  "N": 34
                },
                {
                  "N": 33
                },
                {
                  "N": 33
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:51:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 54
                },
                {
                  "N": 52
                },
                {
                  "N": 52
                }
              ]
            ,
            "breath":[
                {
                  "N": 31
                },
                {
                  "N": 29

                },
                {
                  "N": 29
                }
              ]
            }
        },
        {
          "ts": "2022-06-20T00:56:01.000Z",
          "Activity": {
            "heart": [
               {
                  "N": 50
                },
                {
                  "N": 47
                },
                {
                  "N": 45
                }
              ]
            ,
            "breath":[
                {
                  "N": 29
                },
                {
                  "N": 25
                },
                {
                  "N": 23
                }
              ]
            }
        }

      ]
    },
    {
      "RadarId": 4,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 5,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 6,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 7,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 8,
      "active": false,
      "Item": []
    },
    {
      "RadarId": 9,
      "active": false,
      "Item": []
    }
  ];

  constructor( private radarService: RadarService, private router: Router, private route: ActivatedRoute, private keycloakService: KeycloakService) { }

  //HEART SCALA 10
  getHeart(radar_id){
    var radar;
    var ret = [];

    var steps = this.json[0].Item[0].Activity.heart;


    this.json.forEach((single_radar)=>{
      if(single_radar.RadarId == radar_id)
        radar = single_radar;
      });


      steps.forEach((step, i) => {
        var temp_arr = [];
       radar.Item.forEach((single_item, j)=>{
          temp_arr.push(single_item.Activity.heart[i].N);
      });

      var obj = {
        name : " Misura:"+ (i+1),  //+ "  Radar-id: "+radar_id,
        data : temp_arr,
      }
      ret.push(obj);
    });

    return ret;
  }

  //BREATH SCALA 10
  getBreath(radar_id){
    var radar: { Item: any; RadarId?: number; active?: boolean; };
    var ret = [];
    var steps = this.json[0].Item[0].Activity.heart;
    this.json.forEach((single_radar)=>{
      if(single_radar.RadarId == radar_id)
        radar = single_radar;
      });


      steps.forEach((step, i) => {
        var temp_arr = [];
       radar.Item.forEach((single_item, j)=>{
          temp_arr.push(single_item.Activity.breath[i].N);
      });

      var obj = {
        name : " Misura:"+ (i+1), // + "  Radar-id: "+radar_id,
        data : temp_arr,
      }
      ret.push(obj);
    });

    return ret;
  }

  //HEART SCALA 100
  getHeartReal(radar_id){
    var radar;
    var fc=0.43;
    var div;

    var ret = [];

    var steps = this.json5[0].Item[0].Activity.heart;


    this.json5.forEach((single_radar)=>{
      if(single_radar.RadarId == radar_id)
        radar = single_radar;
    });


    steps.forEach((step, i) => {
       var temp_arr = [];
       radar.Item.forEach((single_item, j)=>{
        div= Math.floor(single_item.Activity.heart[i].N/fc);
         temp_arr.push(div);
       });

       var obj = {
        name : " Misura:"+ (i+1),  //+ "  Radar-id: "+radar_id,
        data : temp_arr,
       }
      ret.push(obj);

    });

    return ret;
  }

  //BREATH SCALA 100
  getBreathReal(radar_id){
    var radar;
    var ret = [];
    var fr=1.65;
    var div;


    var steps = this.json5[0].Item[0].Activity.heart;


    this.json5.forEach((single_radar)=>{
      if(single_radar.RadarId == radar_id)
        radar = single_radar;
      });


      steps.forEach((step, i) => {
        var temp_arr = [];
       radar.Item.forEach((single_item, j)=>{
        div= Math.floor(single_item.Activity.breath[i].N/fr);
        temp_arr.push(div);

      });

      var obj = {
        name : " Misura:"+ (i+1), // + "  Radar-id: "+radar_id,
        data : temp_arr,
      }
      ret.push(obj);
    });

    return ret;
  }

  //PATTERN RIPOSO
  patternRiposo(radar_id: number){
    console.log(" ");
    var minuto: string;

    var h: number;
    var b: number;
    var obj: {
      name: string; // + "  Radar-id: "+radar_id,
      tempo: string;
      riposo: boolean;
      number: number;
      minut: number;
    } = { name: " ", tempo:" ", riposo: false, number: 0, minut: 0};
    var ret: any = [];
    ret.push(obj);
    var cont;
    var bMin=17;
    var hMin=19;

    var data: string;
    var ora: string;
    var mint=1;

    // var ret = [];

    for(let i=0; i<this.json5[0].Item.length; i++){
      cont=0;
      console.log("Item n:"+i);
      minuto=this.json5[0].Item[i].ts;
      console.log(minuto);
      console.log("Cont="+cont)

    for(let j=0; j<this.json5[0].Item[0].Activity.heart.length; j++){
        h=this.json5[radar_id].Item[i].Activity.heart[j].N;
        console.log("h"+j+"="+h);
        b=this.json5[radar_id].Item[i].Activity.breath[j].N;
        console.log("b"+j+"="+b);
        console.log(" ");
        if(b<=bMin && h<=hMin){
          cont++;
          console.log("Cont="+cont)

        }

    }

    if(cont>=2) {
      console.log("**** SITUAZIONE DI RIPOSO minuto 00:"+minuto+" ****")
      console.log("")

      // RIPOSO==TRUE
        if(ret[0].riposo == false) ret.pop(0);
        data=minuto.substring(0,10);
        ora=minuto.substring(11,16);
        obj = {
        name : "AriaXBT-8709f0b8d06d-"+ radar_id, // + "  Radar-id: "+radar_id,
        tempo: this.formatDate(data)+" "+ora,
        riposo : true,
        number: radar_id,
        minut: mint
        }
      ret.push(obj);
      console.log("ret="+ret[0].riposo);
    }
  }
  console.log("#### ret="+ret[0].name);
  console.log("#### ret="+ret[0].tempo);
  console.log("#### ret="+ret[0].riposo);
  console.log("#### ret="+ret[1].name);
  console.log("#### ret="+ret[1].tempo);
  console.log("#### ret="+ret[1].riposo);
  return ret;
  }

  patternRiposo2(radar_id: number){
    console.log(" ");
    var minuto: string;

    var h: number;
    var b: number;
    var obj: {
      name: string; // + "  Radar-id: "+radar_id,
      tempo: string;
      riposo: boolean;
      number: number;
      minut: number;
    } = { name: " ", tempo:" ", riposo: true, number: 0, minut: 0};
    var ret: any = [];
    //ret.push(obj);
    var cont: string | number;
    var bMin=17;
    var hMin=19;

    var data: string;
    var ora: string;

    var mint=1;
    // var ret = [];

    for(let i=0; i<this.json5[0].Item.length; i++){
      cont=0;
      console.log("Item n:"+i);
      minuto=this.json5[0].Item[i].ts;
      console.log(minuto);
      console.log("Cont="+cont)

      for(let j=0; j<this.json5[0].Item[0].Activity.heart.length; j++){
         h=this.json5[radar_id].Item[i].Activity.heart[j].N;
          console.log("h"+j+"="+h);
          b=this.json5[radar_id].Item[i].Activity.breath[j].N;
          console.log("b"+j+"="+b);
          console.log(" ");
          if(b<=bMin && h<=hMin){
            cont++;
            console.log("Cont="+cont)
          }
       }

    if(cont>=2) {
      console.log("**** SITUAZIONE DI RIPOSO minuto 00:"+minuto+" ****")
      console.log("")

      // RIPOSO==TRUE
   //     if(ret[0].riposo == false) ret.pop(0);

        data=minuto.substring(0,10);
        ora=minuto.substring(11,16);
        obj = {
          name : "AriaXBT-8709f0b8d06d-"+ radar_id, // + "  Radar-id: "+radar_id,
          tempo: this.formatDate(data)+" "+ora,
          riposo : true,
          number: radar_id,
          minut: mint
        }
      ret.push(obj);
      console.log("ret="+ret[0].riposo);
    }
    mint+=5;

  }
  for(let b=0; b<ret.length; b++ ){
    console.log("VALORE N:"+b);
    console.log("#### ret="+ret[b].name);
    console.log("#### ret="+ret[b].tempo);
    console.log("#### ret="+ret[b].riposo);
    console.log(" ");
    }
  return ret;
  }

  //PATTERN STRESS
  patternStress(radar_id: number){

    console.log(" ");
    var minuto: string;

    var h: number; //frequenza cardiaca
    var b: number; //frequenza respiratoria

    var boh: {
      name: string; // + "  Radar-id: "+radar_id,
      tempo: string;
      riposo: boolean;
      number: number;
      minut: number;
    } = { name: " ", tempo:" ", riposo: false, number: 0, minut: 0};
    var ret: any = [];
    ret.push(boh);
    var cont;
    var bMax=50;
    var hMax=78;


    var data: string;
    var ora: string;
    var mint=1;

    for(let i=0; i<this.json5[0].Item.length; i++){
      cont=0;
      console.log("Item n:"+i);
      minuto=this.json5[0].Item[i].ts; //timestamp
      console.log(minuto);
      console.log("Cont="+cont)

      for(let j=0; j<this.json5[0].Item[0].Activity.heart.length; j++){
          h=this.json5[radar_id].Item[i].Activity.heart[j].N;
          console.log("h="+h);
          b=this.json5[radar_id].Item[i].Activity.breath[j].N;
          console.log("b="+b);
          console.log(" ");
          if(b>=bMax && h>=hMax){
            cont++;
            console.log("Cont="+cont)
          }
      }

      if(cont>=2) {
        console.log("**** SITUAZIONE DI STRESS minuto 00:"+minuto+" ****")
        console.log("")
        // STRESS==TRUE
        if(ret[0].riposo == false) ret.pop(0);
        data=minuto.substring(0,10);
        ora=minuto.substring(11,16);
        boh = {
          name : "AriaXBT-8709f0b8d06d-"+radar_id, // + "  Radar-id: "+radar_id,
          tempo: this.formatDate(data)+" "+ora,
          riposo : true,
          number: radar_id,
          minut: mint
          }
        ret.push(boh);
        console.log("ret="+ret[0].riposo);

      }
    }
    console.log("#### ret="+ret[0].name);
    console.log("#### ret="+ret[0].tempo);
    console.log("#### ret="+ret[0].riposo);



    return ret;

  }

  patternStress2(radar_id: number){

    console.log(" ");
    var minuto: string;

    var h: number; //frequenza cardiaca
    var b: number; //frequenza respiratoria

    var boh: {
      name: string; // + "  Radar-id: "+radar_id,
      tempo: string;
      riposo: boolean;
      number: number;
      minut: number;
    } = { name: " ", tempo:" ", riposo: false, number: 0, minut: 0};
    var ret: any = [];
    //ret.push(boh);
    var cont: string | number;
    var bMax=50;
    var hMax=78;

    var data: string;
    var ora: string;
    var mint=1;

    for(let i=0; i<this.json5[0].Item.length; i++){
      cont=0;
      console.log("Item n:"+i);
      minuto=this.json5[0].Item[i].ts; //timestamp
      console.log(minuto);
      console.log("Cont="+cont)

      for(let j=0; j<this.json5[0].Item[0].Activity.heart.length; j++){
          h=this.json5[radar_id].Item[i].Activity.heart[j].N;
          console.log("h="+h);
          b=this.json5[radar_id].Item[i].Activity.breath[j].N;
          console.log("b="+b);
          console.log(" ");
          if(b>=bMax && h>=hMax){
            cont++;
            console.log("Cont="+cont)
          }
      }

      if(cont>=2) {
        console.log("**** SITUAZIONE DI STRESS minuto 00:"+minuto+" ****")
        console.log("")
        // STRESS==TRUE
      //  if(ret[0].riposo == false) ret.pop(0);
        data=minuto.substring(0,10);
        ora=minuto.substring(11,16);

        boh = {
          name : "AriaXBT-8709f0b8d06d-"+radar_id, // + "  Radar-id: "+radar_id,
          tempo: this.formatDate(data)+" "+ora,
          riposo : false,
          number: radar_id,
          minut: mint
          }
        ret.push(boh);
        console.log("ret="+ret[0].riposo);
      }
      mint+=5;
    }

    for(let b=0; b<ret.length; b++ ){
    console.log("VALORE N:"+b);
    console.log("#### ret="+ret[b].name);
    console.log("#### ret="+ret[b].tempo);
    console.log("#### ret="+ret[b].riposo);
    console.log(" ");
    }


    return ret;

  }

  //INVERTE LA DATA
  formatDate (input: string) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];

    return day+'-'+month+'-'+year;
  }


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  ngOnInit(): void {
    this.radarService.getRadars().subscribe( result => { this.radars=result; } );

    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=params.radarId;
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



    this.initializeChartOptions();
    this.initializeUserOptions();


    this.stress=this.patternStress(this.data);
    this.riposo= this.patternRiposo(this.data);

    this.stress2=this.patternStress2(this.data);
    this.riposo2= this.patternRiposo2(this.data);

  }

  private initializeUserOptions(): void {
    this.user=this.keycloakService.getUsername();
  }

  logout():void {
    this.keycloakService.logout('http://localhost:4200');
  }



  private initializeChartOptions(): void {


      this.chartOptions = {
        series: this.getHeart(this.data),
        series2: this.getBreath(this.data),
        series3: this.getHeartReal(this.data),
        series4: this.getBreathReal(this.data),
        chart: {
          height: 350,
          type: "bar"
        },
        title: {
          text: "Frequenza Cardiaca"
        },
        title2: {
          text: "Frequenza Respiratoria"
        },
        titleReal: {
          text: "Frequenza Cardiaca"
        },
        titleReal2: {
          text: "Frequenza Respiratoria"
        },
        xaxis: {
          categories: ["00:01", "00:06",  "00:11",  "00:16",  "00:21",  "00:26",  "00:31",  "00:36", "00:41", "00:46", "00:51", "00:56"]
        }
      };

  }
  ngOnDestroy() {
      clearInterval(this.intervalId);
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }
