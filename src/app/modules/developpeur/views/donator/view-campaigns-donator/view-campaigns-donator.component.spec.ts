import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampaignsDonatorComponent } from './view-campaigns-donator.component';

describe('ViewCampaignsDonatorComponent', () => {
  let component: ViewCampaignsDonatorComponent;
  let fixture: ComponentFixture<ViewCampaignsDonatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCampaignsDonatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCampaignsDonatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
