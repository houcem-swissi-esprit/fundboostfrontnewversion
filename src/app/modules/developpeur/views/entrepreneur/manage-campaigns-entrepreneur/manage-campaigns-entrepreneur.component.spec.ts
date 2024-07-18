import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCampaignsEntrepreneurComponent } from './manage-campaigns-entrepreneur.component';

describe('ManageCampaignsEntrepreneurComponent', () => {
  let component: ManageCampaignsEntrepreneurComponent;
  let fixture: ComponentFixture<ManageCampaignsEntrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCampaignsEntrepreneurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCampaignsEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
