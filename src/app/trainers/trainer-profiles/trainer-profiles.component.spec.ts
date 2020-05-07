import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfilesComponent } from './trainer-profiles.component';

describe('TrainerProfilesComponent', () => {
  let component: TrainerProfilesComponent;
  let fixture: ComponentFixture<TrainerProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
