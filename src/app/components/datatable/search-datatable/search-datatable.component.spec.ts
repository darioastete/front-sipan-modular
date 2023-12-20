import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDatatableComponent } from './search-datatable.component';

describe('SearchDatatableComponent', () => {
  let component: SearchDatatableComponent;
  let fixture: ComponentFixture<SearchDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
