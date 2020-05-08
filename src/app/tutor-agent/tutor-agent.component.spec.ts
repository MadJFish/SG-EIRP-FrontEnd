import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAgentComponent } from './tutor-agent.component';

describe('TutorAgentComponent', () => {
  let component: TutorAgentComponent;
  let fixture: ComponentFixture<TutorAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
