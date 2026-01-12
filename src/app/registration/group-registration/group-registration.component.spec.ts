import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRegistrationComponent } from './group-registration.component';

describe('GroupRegistrationComponent', () => {
  let component: GroupRegistrationComponent;
  let fixture: ComponentFixture<GroupRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupRegistrationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
