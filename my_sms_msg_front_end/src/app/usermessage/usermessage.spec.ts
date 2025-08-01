import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessage } from './usermessage';

describe('UserMessage', () => {
  let component: UserMessage;
  let fixture: ComponentFixture<UserMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
