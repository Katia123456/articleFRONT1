import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarBasicComponent } from './toolbar-basic.component';

describe('ToolbarBasicComponent', () => {
  let component: ToolbarBasicComponent;
  let fixture: ComponentFixture<ToolbarBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarBasicComponent]
    });
    fixture = TestBed.createComponent(ToolbarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
