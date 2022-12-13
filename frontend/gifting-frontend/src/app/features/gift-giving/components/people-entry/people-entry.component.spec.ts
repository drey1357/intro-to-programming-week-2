import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEntryComponent } from './people-entry.component';

describe('PeopleEntryComponent', () => {
  let component: PeopleEntryComponent;
  let fixture: ComponentFixture<PeopleEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
