import { Component, OnInit } from '@angular/core';
import { TutorAgencyService, UserService } from 'app/_services';
import { TutorAgencyDetailDto, ProgramDto } from 'app/_models';
declare var $: any;
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  private currentProgram: ProgramDto;
  private title: string;

  constructor(
    private tutorAgencyService: TutorAgencyService,
    private userService: UserService,
  ) { }

  ngOnInit() {

      // get uesr id
      const agencyId: string = this.userService.currentUserValue.tutorAgentId;

      console.log(agencyId);

      // agency details
      this.tutorAgencyService.getProgramByAgencyId(agencyId)
      .subscribe((programDto: ProgramDto) => {
          // programs
          this.currentProgram = programDto;
          if (!this.currentProgram.programImage) {
            this.currentProgram.programImage = "https://eirp-images.s3-ap-southeast-1.amazonaws.com/common/f0e27426-06ca-4aac-bdfe-e314dcb56acf/school.png";
          }

          this.title = this.currentProgram.programName;

          console.log("programs: " + JSON.stringify(this.currentProgram));
      });

  }

}
