import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  agent_list_url:string;
  agent_approval_url: string;

  constructor(private http: HttpClient) { 
    this.agents = [];
    this.token = JSON.parse(localStorage.getItem(GloblConstants.currentAccessToken))['access_token'];
    this.agent_list_url = GloblConstants.apiURL + GloblConstants.TutorAgentListURL;

    this.agent_approval_url = GloblConstants.apiURL + GloblConstants.TutorAgentApprovalURL;

    console.log(this.agent_list_url);
  }

  approve(value:string) {

    let bodyString = JSON.stringify({ username: value, status: "APPROVED" });

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

    this.http.post(this.agent_approval_url, bodyString, {headers: reqHeader})
      .subscribe(res => console.log(res));

  }

  ngOnInit(): void {
    //console.log(this.token);

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

    this.http.get<Object>(this.agent_list_url, { headers: reqHeader }).subscribe(
        data => {
          this.agents =data['body'];
          console.log(data['body']);
        });
  }
}
