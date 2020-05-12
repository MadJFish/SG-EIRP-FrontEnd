import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthenticationService, UserService } from 'app/_services';
import { TutorAgencyService } from 'app/_services';
import { UserResponseDto } from 'app/_models';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  private tutorAgencies = [];
  private featuredAgencies = [];
  private numberOfFeaturedToDisplay = 6;

  constructor(
    private authenticationService: AuthenticationService,
    private tutorAgencyService: TutorAgencyService,
    private userService: UserService,
    private router: Router
  ) {
    // redirect to login if not logged in
    if (!this.authenticationService.currentAccessTokenValue) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
      /*
      // get current user profile
      this.userService.getUser()
          .subscribe((user: UserResponseDto) => {
              this.user = user;
              console.log(JSON.stringify(user));

              this.retrieveAgency(this.user);
          });
      */

      // get all agencies
      this.tutorAgencyService.getAllAgencies()
          .pipe(first())
          .subscribe(tutorAgencies => {
            // get featured list
            this.featuredAgencies = tutorAgencies.filter(ta =>
              ta.featured
              && tutorAgencies.indexOf(ta) < this.numberOfFeaturedToDisplay
            );
            
            this.tutorAgencies = tutorAgencies;
            console.log(JSON.stringify(this.tutorAgencies));
          });
  }
}
