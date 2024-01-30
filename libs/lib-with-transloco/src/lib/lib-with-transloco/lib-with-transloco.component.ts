import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@ngneat/transloco';

@Component({
  selector: 'nx-with-transloco-lib-with-transloco',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './lib-with-transloco.component.html',
  styleUrl: './lib-with-transloco.component.css',
})
export class LibWithTranslocoComponent {}
