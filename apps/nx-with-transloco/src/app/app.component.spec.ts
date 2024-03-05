import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslocoTestingModule, provideTransloco } from '@ngneat/transloco';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule, TranslocoTestingModule],
      providers: [
        provideTransloco({
          config: {
          }
        }),
      ]
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nx-with-transloco-lib-with-transloco')?.textContent).toContain(
      'libScope.helloWorld'
    );
  });

  it(`should have as title 'nx-with-transloco'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nx-with-transloco');
  });
});
