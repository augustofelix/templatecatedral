import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PageTitle } from '../../layout/page-title/page-title';

/** Página de ejemplo dentro del layout. */
@Component({
  selector: 'app-home-page',
  imports: [PageTitle, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
