import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBodyTweetComponent } from './dialog-body-tweet.component';

describe('DialogBodyTweetComponent', () => {
  let component: DialogBodyTweetComponent;
  let fixture: ComponentFixture<DialogBodyTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBodyTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBodyTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
