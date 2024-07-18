import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDonatorComponent } from './dashboard-donator.component';

describe('DashboardDonatorComponent', () => {
  let component: DashboardDonatorComponent;
  let fixture: ComponentFixture<DashboardDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDonatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
