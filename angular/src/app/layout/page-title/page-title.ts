import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { LucideArrowLeft, LucideDynamicIcon } from '@lucide/angular';

/** Encabezado de página (app-page-title). Los botones de acción se proyectan como contenido. */
@Component({
  selector: 'app-page-title',
  imports: [LucideDynamicIcon],
  templateUrl: './page-title.html',
  styleUrl: './page-title.scss',
})
export class PageTitle {
  private readonly location = inject(Location);

  readonly title = input.required<string>();
  readonly subtitle = input('');
  readonly showBack = input(false);

  protected readonly ArrowLeft = LucideArrowLeft;

  protected back() {
    this.location.back();
  }
}
