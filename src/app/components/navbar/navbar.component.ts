import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from 'app/_services';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ADMIN_ROUTES: RouteInfo[] = [
    { path: '/school', title: 'School Data',  icon:'content_paste', class: '' },
    { path: '/tutor-agent', title: 'Tutor Agent Management', icon:'bubble_chart', class: '' },
];
export const TUTOR_AGENT_ADMIN_ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/program', title: 'Education Program',  icon:'library_books', class: '' },
    { path: '/trainer-profile', title: 'Tutor Agent', icon:'person', class: '' },
];
export const USER_ROUTES: RouteInfo[] = [
    { path: '/school', title: 'School Data',  icon:'content_paste', class: '' },
    { path: '/tutor-agent', title: 'Tutor Agent Management', icon:'bubble_chart', class: '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/program', title: 'Education Program',  icon:'library_books', class: '' },
    { path: '/trainer-profile', title: 'Tutor Agent', icon:'person', class: '' },
];


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    navItems: any[];
    private listTitles: any[];
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(
        location: Location,
        private element: ElementRef,
        private router: Router,
        private authenticationServie: AuthenticationService,
        private userService: UserService) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit(){
        this.resetRouter();
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
        this.sidebarClose();
        var $layer: any = document.getElementsByClassName('close-layer')[0];
        if ($layer) {
        $layer.remove();
        this.mobile_menu_visible = 0;
        }
     });
    }

    resetRouter() {
        let userRole: number = this.userService.role;
        let currentRouter: RouteInfo[];
        if (userRole == 2) {
            currentRouter = TUTOR_AGENT_ADMIN_ROUTES;
        } else {
            currentRouter = ADMIN_ROUTES;
        }

        this.navItems = currentRouter.filter(navItem => navItem);
        this.listTitles = currentRouter.filter(listTitle => listTitle);
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { //asign a function
              body.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              $layer.classList.remove('visible');
              setTimeout(function() {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Login';
    }

    viewProfile(){
        console.log("test 456");
    }

    signOut(){
        this.authenticationServie.logout();
        this.router.navigate(['/login']);
    }
}
