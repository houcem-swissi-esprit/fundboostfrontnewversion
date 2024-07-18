import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCampaignsUserComponent } from './manage-campaigns-user.component';

describe('ManageCampaignsUserComponent', () => {
  let component: ManageCampaignsUserComponent;
  let fixture: ComponentFixture<ManageCampaignsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCampaignsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCampaignsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
