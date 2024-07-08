import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRequestComponent } from './notification-request.component';

describe('NotificationRequestComponent', () => {
  let component: NotificationRequestComponent;
  let fixture: ComponentFixture<NotificationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
