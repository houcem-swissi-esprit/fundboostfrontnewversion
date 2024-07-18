import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCampaignsAdminComponent } from './manage-campaigns-admin.component';

describe('ManageCampaignsAdminComponent', () => {
  let component: ManageCampaignsAdminComponent;
  let fixture: ComponentFixture<ManageCampaignsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCampaignsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCampaignsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
