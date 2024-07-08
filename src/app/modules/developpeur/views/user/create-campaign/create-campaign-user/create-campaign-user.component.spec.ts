import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaignUserComponent } from './create-campaign-user.component';

describe('CreateCampaignUserComponent', () => {
  let component: CreateCampaignUserComponent;
  let fixture: ComponentFixture<CreateCampaignUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCampaignUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCampaignUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
