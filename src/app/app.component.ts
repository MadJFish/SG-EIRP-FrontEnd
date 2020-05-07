import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { AuthenticationService } from './_services';
import { User, AccessToken } from './_models';

import './_content/app.less';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
    showNavbar = false;
    showSidebar = false;
    currentToken: AccessToken;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentAccessToken.subscribe(x => this.currentToken = x);
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.showNavbar = this.route.firstChild.snapshot.data.showNavbar !== false;
                this.showSidebar = this.route.firstChild.snapshot.data.showSidebar !== false;
            }
        });
    }

    /*
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    */
}