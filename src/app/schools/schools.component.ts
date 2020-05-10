import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { GloblConstants } from 'app/common/global-constants';

import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';

export interface task {
  id: number;
  exeTime: string;
  outcome: string;
}

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})

export class SchoolsComponent implements OnInit {

    tasks: any;
    token: any;
    gov_data_task_url:string;

    displayedColumns: string[] = ['id', 'exeTime', 'outcome'];

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient) {
    //this.tasks = new Array<task>();
    this.tasks = new MatTableDataSource<task>([]);
    this.token = JSON.parse(localStorage.getItem(GloblConstants.currentAccessToken))['access_token'];
    this.gov_data_task_url = GloblConstants.baseUrl + GloblConstants.schoolUrl + GloblConstants.SchDataTaskUrl;
  }

  ngOnInit(): void{
    console.log(this.token);

    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

    this.http.get<task[]>(this.gov_data_task_url, { headers: reqHeader }).subscribe(
        data => {
          console.log(data);
          //this.tasks = data;
          console.log(data[1].id);
          this.tasks = new MatTableDataSource<task>(data);

        });

        this.tasks.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.tasks.paginator = this.paginator
}
}
