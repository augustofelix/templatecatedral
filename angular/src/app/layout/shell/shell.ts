import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '../layout.service';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';

/** Layout principal (app-home): sidebar + topbar + contenido ruteado. */
@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, Sidebar, Topbar],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
})
export class Shell {
  protected readonly layout = inject(LayoutService);

  // Datos de ejemplo: reemplazar por los del usuario autenticado
  protected readonly workspace = 'Razón social de ejemplo S.A.';
  protected readonly user = { name: 'Nombre Apellido', email: 'usuario@ejemplo.com' };
}
