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
  selector: 'app-tutor-agent',
  templateUrl: './tutor-agent.component.html',
  styleUrls: ['./tutor-agent.component.css']
})

export class TutorAgentComponent implements OnInit {

  agents: any;
  token: any;

  constructor(private http: HttpClient) { 
    this.agents = [];
    this.token = JSON.parse(localStorage.getItem(GloblConstants.currentAccessToken))['access_token'];

  }

  ngOnInit(): void {
    console.log(this.token);

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

    this.http.get<Object>('http://sg-eirp-lb-1490246461.ap-southeast-1.elb.amazonaws.com/eirp-user/api/users/tutor/current', { headers: reqHeader }).subscribe(
        data => {
          this.agents =[data];
          console.log(this.agents);
        });


  }
}
