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
  static APPROVED_STATUS = "APPROVED";
  static ARCHIVED_STATUS = "ARCHIVED";

  constructor(private http: HttpClient) { 
    this.agents = [];
    this.token = JSON.parse(localStorage.getItem(GloblConstants.currentAccessToken))['access_token'];
    this.agent_list_url = GloblConstants.baseUrl +GloblConstants.userUrl + GloblConstants.TutorAgentListUrl;

    this.agent_approval_url = GloblConstants.baseUrl +GloblConstants.userUrl + GloblConstants.TutorAgentApprovalUrl;
  
  }

  approve(value:string) {

    let bodyString = JSON.stringify({ username: value, status: TutorAgentComponent.APPROVED_STATUS });

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

    this.http.post(this.agent_approval_url, bodyString, {headers: reqHeader})
      .subscribe(res => console.log(res));

    //must load twice, then table can reload
    this.ngOnInit();
    this.ngOnInit();
  }

  archive(value:string) {

    let bodyString = JSON.stringify({ username: value, status: TutorAgentComponent.ARCHIVED_STATUS });

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

    this.http.post(this.agent_approval_url, bodyString, {headers: reqHeader})
      .subscribe(res => console.log(res));

    //must load twice, then table can reload
    this.ngOnInit();
    this.ngOnInit();
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
