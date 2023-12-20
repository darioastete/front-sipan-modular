import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDatatableComponent } from './body-datatable.component';

describe('BodyDatatableComponent', () => {
  let component: BodyDatatableComponent;
  let fixture: ComponentFixture<BodyDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
