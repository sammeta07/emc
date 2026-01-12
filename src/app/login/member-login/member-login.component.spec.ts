import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLoginComponent } from './member-login.component';

describe('MemberLoginComponent', () => {
  let component: MemberLoginComponent;
  let fixture: ComponentFixture<MemberLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberLoginComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
