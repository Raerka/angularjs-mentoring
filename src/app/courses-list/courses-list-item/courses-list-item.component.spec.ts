import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {describe, expect} from '@angular/core/testing/src/testing_internal';
import { CoursesListItemComponent } from './courses-list-item.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {spyOn} from 'jasmine';

describe('CoursesListItemComponent', () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  const EXPECTED_COURSE_ITEM =    {
    id: 2,
    title: 'Video Course 2',
    creationDate: '05.15.2018',
    duration: 48,
    topRated: false,
    description: 'Test Description'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    component.courseItem = EXPECTED_COURSE_ITEM;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct description', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const divDebugElement: DebugElement = debugElement.query(By.css('.col-10'));
    const div = divDebugElement.nativeElement;

    expect(div.textContent).toBe(EXPECTED_COURSE_ITEM.description);
  });

  it('should call method deleteItem after clicking', async() => {
    const deleteCourseByIdSpy = spyOn(component, 'deleteCourseById');
    const button = fixture.debugElement.query(By.css('.delete')).nativeElement;

    button.click();

    fixture.whenStable().then(() => {
      expect(deleteCourseByIdSpy).toHaveBeenCalled();
    });
  });
});
