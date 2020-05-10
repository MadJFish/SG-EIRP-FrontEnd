import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthenticationService } from 'app/_services';
import { TutorAgencyService } from 'app/_services';

@Component({
  selector: 'app-trainer-profiles',
  templateUrl: './trainer-profiles.component.html',
  styleUrls: ['./trainer-profiles.component.css']
})
export class TrainerProfilesComponent implements OnInit {

  private tutorAgency: any;

  constructor(
    private authenticationService: AuthenticationService,
    private tutorAgencyService: TutorAgencyService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // get all agencies
    this.tutorAgencyService.getAllAgencies()
        .pipe(first())
        .subscribe(tutorAgencies => {
          /*
          // get featured list
          this.featuredAgencies = tutorAgencies.filter(ta =>
            ta.featured
            && tutorAgencies.indexOf(ta) < this.numberOfFeaturedToDisplay
          );
          */
          
          /*
          this.tutorAgencies = tutorAgencies;
          console.log(JSON.stringify(this.tutorAgencies));
          */
        });
  }
}
