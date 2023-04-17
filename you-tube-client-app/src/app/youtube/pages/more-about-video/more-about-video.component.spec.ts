import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutVideoComponent } from './more-about-video.component';

describe('MoreAboutVideoComponent', () => {
  let component: MoreAboutVideoComponent;
  let fixture: ComponentFixture<MoreAboutVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAboutVideoComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MoreAboutVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
