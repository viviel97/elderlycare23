import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";
import { Radar } from 'src/app/entities/radar';
import { RadarService } from 'src/app/entities/radar.service';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css']
})
export class EmergenciesComponent implements OnInit, OnDestroy {
  date: Date = new Date();

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  user=''

  stress: any[]=[];
  mancamento: any[]=[];
  ele: any[]=[];

  data: number; //da mettere number
  pat=[
    'Alfredo Neri', 'Maria Bianchi', 'Michela Rossi', 'Roberto Verdi'
  ];
  radars: Radar[]

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


  constructor(private radarService: RadarService, private router: Router, private route: ActivatedRoute, private keycloakService: KeycloakService) { }

  //PATTERN STRESS
  patternStress(radar_id: number){
    var minuto: string;
    var h: number;    //valore di frequenza cardiaca
    var b: number;    //valore di frequenza respiratoria
    var h1: number;    //valore di frequenza cardiaca
    var b1: number;    //valore di frequenza respiratoria
    var cont: number;
    var bMax=50;      //valore di Stress Frequenza Respiratoria (vedi figura 48)
    var hMax=78;      //valore di Stress Frequenza Cardiaca (vedi figura 47)
    var data: string; //data da riportare nella tabella
    var ora: string;  //ora da riportare nella tabella
    var mint=1;
    var ret: any = []; //array situazioni di Stress

    //insieme di dati da inserire nella tabella
    var obj: {
      name: string;     //RadarID
      tempo: string;
      mancamento: boolean;  //se false identifica una situazione di stress
      number: number;
      minut: number;
     } = { name: " ", tempo:" ", mancamento: false, number: 0, minut: 0};


    for(let i=0; i<this.json5[0].Item.length; i++){
      cont=0;
      minuto=this.json5[0].Item[i].ts; //timestamp
      for(let j=0; j<this.json5[0].Item[0].Activity.heart.length-1; j++){
          h=this.json5[radar_id].Item[i].Activity.heart[j].N;     // i-esimo valore di frequenza cardiaca
          b=this.json5[radar_id].Item[i].Activity.breath[j].N;    // i-esimo valore di frequenza respiratoria
          h1=this.json5[radar_id].Item[i].Activity.heart[j+1].N;  // i+1-esimo valore di frequenza cardiaca
          b1=this.json5[radar_id].Item[i].Activity.breath[j+1].N; // i+1-esimo valore di frequenza respiratoria
          if(b>=bMax && h>=hMax && b1>=bMax && h1>=hMax){
            cont++;
          }
      }

      //se due valori consecutivi nell'arco dei 5 minuti sono superiori ai valori di Stress di frequenza cardiaca e respiratoria identifica una situazione di stress
      if(cont>0) {
        data=minuto.substring(0,10);
        ora=minuto.substring(11,16);

        obj = {
          name : "AriaXBT-8709f0b8d06d-"+radar_id,
          tempo: this.formatDate(data)+" "+ora,
          mancamento : false,
          number: radar_id,
          minut: mint
          }
        ret.push(obj);
      }
      mint+=5;
    }

    return ret;
  }

  //riporta tutte le situazioni di stress dei pazienti presenti nella struttura
  pienoStress(){
    var ora: any[]=[];
    var p: string | any[];

    for(let i=0; i<4; i++){
        p=this.patternStress(i);
        if(p.length!=0) ora.push(p);
    }
    return ora;
  }

  //PATTERN POSSIBILE MANCAMENTO
  patternMancamento(radar_id: number){
    var minuto: string;
    var h: number;      //valore di frequenza cardiaca
    var b: number;      //valore di frequenza respiratoria
    var h1: number;      //valore di frequenza cardiaca
    var b1: number;      //valore di frequenza respiratoria
    var cont: number;
    var bMin=17;        //valore di possibile mancamento Frequenza Respiratoria
    var hMin=19;        //valore di possibile mancamento Frequenza Cardiaca
    var data: string;   //data da riportare nella tabella
    var ora: string;    //ora da riportare nella tabella
    var mint=1;
    var ret: any = []; //array situazioni di Stress

    //insieme di dati da inserire nella tabella
    var obj: {
      name: string;     //RadarID
      tempo: string;
      mancamento: boolean;  //se true identifica una situazione di possibile mancamento
      number: number;
      minut: number;
     } = { name: " ", tempo:" ", mancamento: true, number: 0, minut: 0};


    for(let i=0; i<this.json5[0].Item.length; i++){
      cont=0;
      minuto=this.json5[0].Item[i].ts; //timestamp
      for(let j=0; j<this.json5[0].Item[0].Activity.heart.length-1; j++){
        h=this.json5[radar_id].Item[i].Activity.heart[j].N;     // i-esimo valore di frequenza cardiaca
        b=this.json5[radar_id].Item[i].Activity.breath[j].N;    // i-esimo valore di frequenza respiratoria
        h1=this.json5[radar_id].Item[i].Activity.heart[j+1].N;  // i+1-esimo valore di frequenza cardiaca
        b1=this.json5[radar_id].Item[i].Activity.breath[j+1].N; // i+1-esimo valore di frequenza respiratoria

        if(b<=bMin && h<=hMin && b1<=bMin && h1<=hMin){
            cont++;
        }
      }

      //se due valori consecutivi nell'arco dei 5 minuti sono inferiori ai valori di possibile Mancamento di frequenza cardiaca e respiratoria identifica una situazione di possibile mancamento
      if(cont>0) {
        data=minuto.substring(0,10);
        ora=minuto.substring(11,16);
        obj = {
          name : "AriaXBT-8709f0b8d06d-"+ radar_id,
          tempo: this.formatDate(data)+" "+ora,
          mancamento : true,
          number: radar_id,
          minut: mint
        }
        ret.push(obj);
      }
      mint+=5;

     }
      return ret;
  }

  //riporta tutte le situazioni di possibile mancamento dei pazienti presenti nella struttura
  pienoMancamento(){
   var ora: any[]=[];
   var p: string | any[];

   for(let i=0; i<4; i++){
        p=this.patternMancamento(i);
       if(p.length!=0) ora.push(p);
    }
   return ora;
  }

  //raggruppa tutte le situazioni di possibile mancamento e di stress dei pazienti presenti nella struttura in unico posto ( metodo di supporto al metodo onArray() )
  pieno(){
    var ora: any[]=[];
    var rip: string | any[];
    var str: string | any[];

    for(let i=0; i<4; i++){
         rip=this.patternMancamento(i);
         str=this.patternStress(i);
         if(rip.length!=0) ora.push(rip);
         if(str.length!=0) ora.push(str);
     }
    return ora;
   }

  formatDate (input: string) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];

    return day+'-'+month+'-'+year;
  }

  //raggruppa tutte le situazioni di alert in un array
  onArray(){
    var pieno=this.pieno();
    var array: any[]=[];
    for( let x=0; x<pieno.length; x++){
      for( let y=0; y<pieno[x].length; y++){
      array.push(pieno[x][y]);
      }
    }
    return array;
  }

  //ordina gli alert in modo crescente in base all'orario di ricezione
  //bubbleSort
  sorted(){
    var alerts = this.onArray();
    for(let i = 0; i < alerts.length; i++) {
      var flag = false;
      for(let j = 0; j < alerts.length-1; j++) {

        //Se l' elemento j e maggiore del successivo allora
        //scambiamo i valori
        if(alerts[j].minut>alerts[j+1].minut) {
          let k = alerts[j];
          alerts[j] = alerts[j+1];
          alerts[j+1] = k;
          flag=true; //Lo setto a true per indicare che é avvenuto uno scambio
        }
      }
      if(!flag) break; //Se flag=false allora vuol dire che nell' ultima iterazione
                       //non ci sono stati scambi, quindi il metodo può terminare
                       //poiché l' array risulta ordinato
    }
    return alerts;
  }


   ngOnInit() {
    this.radarService.getRadars().subscribe( result => { this.radars=result; } );
    this.data=2;
    /*
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=params.radarId;
    })
*/
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

   //   this.stress = this.pienoStress();
     // this.mancamento = this.pienoMancamento();
      this.ele = this.sorted();

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
