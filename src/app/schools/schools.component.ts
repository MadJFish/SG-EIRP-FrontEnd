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
    gov_data_fetch_url:string;
    loading: boolean;
    displayedColumns: string[] = ['id', 'exeTime', 'outcome'];

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http: HttpClient) {
    //this.tasks = new Array<task>();

    this.tasks = new MatTableDataSource<task>([]);
    this.loading=false;
    this.token = JSON.parse(localStorage.getItem(GloblConstants.currentAccessToken))['access_token'];
    this.gov_data_task_url = GloblConstants.baseUrl + GloblConstants.schoolUrl + GloblConstants.SchDataTaskUrl;
    this.gov_data_fetch_url = GloblConstants.baseUrl + GloblConstants.schoolUrl + GloblConstants.SchDataFetchUrl;
  }

  ngOnInit(): void{
    console.log(this.token);
    this.loading = false;

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

  async refresh(){
    this.loading = true;
    let reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
   });

   console.log("this.loading is starting");
   await this.http.get<Object>(this.gov_data_fetch_url, { headers: reqHeader }).toPromise().then(
      data => {
        console.log(this.gov_data_fetch_url);
        console.log(data);
      },
    );

    this.loading = false;
    console.log("this.loading is done done");
    this.ngOnInit();
  }

}
