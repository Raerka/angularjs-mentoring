import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  const FOOTER_CONTENT = 'Copyright © Videoportal, All Right Reserved';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have valid content', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const span: HTMLElement = nativeElement.querySelector('span');

    expect(span.textContent).toBe(FOOTER_CONTENT);
  });

  it('should have valid content with debug element', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const spanDebugElement: DebugElement = debugElement.query(By.css('span'));
    const span = spanDebugElement.nativeElement;

    expect(span.textContent).toBe(FOOTER_CONTENT);
  });
});
