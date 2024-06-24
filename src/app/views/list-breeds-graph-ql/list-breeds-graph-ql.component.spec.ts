import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBreedsGraphQLComponent } from './list-breeds-graph-ql.component';

describe('ListBreedsGraphQLComponent', () => {
  let component: ListBreedsGraphQLComponent;
  let fixture: ComponentFixture<ListBreedsGraphQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBreedsGraphQLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListBreedsGraphQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
