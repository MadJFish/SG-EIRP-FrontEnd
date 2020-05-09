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
    gov_data_task_url:string;


  constructor(private http: HttpClient) {
    this.tasks = [];
    this.token = JSON.parse(localStorage.getItem(GloblConstants.currentAccessToken))['access_token'];
    this.gov_data_task_url = GloblConstants.baseUrl + GloblConstants.schoolUrl + GloblConstants.SchDataTaskUrl;

  }

  ngOnInit(): void{
    console.log(this.token);

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

    this.http.get<Object>(this.gov_data_task_url, { headers: reqHeader }).subscribe(
        data => {
          this.tasks =data;
        });
  }
}
