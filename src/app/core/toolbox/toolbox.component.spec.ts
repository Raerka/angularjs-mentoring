import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxComponent } from './toolbox.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method findCourse after clicking', async() => {
    const findCourseSpy = spyOn(component, 'findCourse');
    const button = fixture.debugElement.query(By.css('.my-sm-0')).nativeElement;

    button.click();

    fixture.whenStable().then(() => {
      expect(findCourseSpy).toHaveBeenCalled();
    });
  });

  it('should call method clearInput after clicking', async() => {
    const clearInputSpy = spyOn(component, 'clearInput');
    component.findCourse();
    expect(clearInputSpy).toHaveBeenCalled();
  });
});
