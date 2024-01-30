import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { LibWithTranslocoComponent } from '@nx-with-transloco/lib-with-transloco';

@Component({
  standalone: true,
  imports: [RouterModule, LibWithTranslocoComponent],
  selector: 'nx-with-transloco-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-with-transloco';

  constructor(private translocoService: TranslocoService) {
  }

  public changeLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }
}
