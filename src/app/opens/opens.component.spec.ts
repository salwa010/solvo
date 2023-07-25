import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensComponent } from './opens.component';

describe('OpensComponent', () => {
  let component: OpensComponent;
  let fixture: ComponentFixture<OpensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpensComponent]
    });
    fixture = TestBed.createComponent(OpensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
