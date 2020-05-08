import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { GloblConstants } from 'app/common/global-constants';

declare const $: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})

export class SchoolsComponent implements OnInit {

    tasks: object;
    token: any;

  constructor(private http: HttpClient) {
    this.tasks = [];
    this.token = JSON.parse(localStorage.getItem(GloblConstants.currentAccessToken))['access_token'];

  }

  ngOnInit(): void{
    console.log(this.token);

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

    this.http.get<Object>('http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-school/api/govDataTask/all', { headers: reqHeader }).subscribe(
        data => {
          this.tasks =data;
        });
  }
}
