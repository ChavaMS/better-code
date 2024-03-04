import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });


  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    expect(component.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content h1')?.textContent).toContain('angular-testing app is running!');
  });

  it('counter should be initialiced in 0', () => {
    expect(component.counter).toEqual(0);
  });

  it('Increment Button can be clicked', () => {
    spyOn(component, 'increment');    
    let button = fixture.debugElement.query(By.css('[data-testid="increment-button"]')).nativeElement;
    button.click();
    expect(component.increment).toHaveBeenCalled();
  });

  it('counter should increment when the button gets clicked', () => {
    let button = fixture.debugElement.query(By.css('[data-testid="increment-button"]')).nativeElement;
    button.click();
    fixture.detectChanges();
    expect(component.counter).toEqual(1);
  });

  it('Decrement Button can be clicked', () => {
    spyOn(component, 'decrement');
    let button = fixture.debugElement.query(By.css('[data-testid="decrement-button"]')).nativeElement;
    button.click();
    expect(component.decrement).toHaveBeenCalled();
  });

  it('counter should decrement when the button gets clicked', () => {
    let button = fixture.debugElement.query(By.css('[data-testid="decrement-button"]')).nativeElement;
    button.click();
    fixture.detectChanges();    
    expect(component.counter).toEqual(-1);
  });
});
