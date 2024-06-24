import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDetailGraphQLComponent } from './breed-detail-graph-ql.component';

describe('BreedDetailGraphQLComponent', () => {
  let component: BreedDetailGraphQLComponent;
  let fixture: ComponentFixture<BreedDetailGraphQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedDetailGraphQLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreedDetailGraphQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
