import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibWithTranslocoComponent } from './lib-with-transloco.component';
import { TranslocoTestingModule } from '@ngneat/transloco';

describe('LibWithTranslocoComponent', () => {
  let component: LibWithTranslocoComponent;
  let fixture: ComponentFixture<LibWithTranslocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibWithTranslocoComponent, TranslocoTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LibWithTranslocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
