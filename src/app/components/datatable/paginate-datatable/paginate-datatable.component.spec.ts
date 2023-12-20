import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateDatatableComponent } from './paginate-datatable.component';

describe('PaginateDatatableComponent', () => {
  let component: PaginateDatatableComponent;
  let fixture: ComponentFixture<PaginateDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginateDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginateDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
