import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampaignsInvestorComponent } from './view-campaigns-investor.component';

describe('ViewCampaignsInvestorComponent', () => {
  let component: ViewCampaignsInvestorComponent;
  let fixture: ComponentFixture<ViewCampaignsInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCampaignsInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCampaignsInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
