import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToastAlertService } from '@services/index';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
      ],
      providers: [
        ToastAlertService,
        ToastrService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "CatBreeds"', () => {
    expect(component.title).toEqual('CatBreeds');
  });

  it('should call ToastAlertService.info on ngOnInit', () => {
    const toastService = TestBed.inject(ToastAlertService);
    spyOn(toastService, 'info');
    component.ngOnInit();
    expect(toastService.info).toHaveBeenCalledWith('Toast Alert ok');
  });
});
