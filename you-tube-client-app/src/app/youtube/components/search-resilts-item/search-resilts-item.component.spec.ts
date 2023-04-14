import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResiltsItemComponent } from './search-resilts-item.component';

describe('SearchResiltsItemComponent', () => {
  let component: SearchResiltsItemComponent;
  let fixture: ComponentFixture<SearchResiltsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResiltsItemComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchResiltsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
