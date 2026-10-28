import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  LucideBell,
  LucideChevronDown,
  LucideCircleHelp,
  LucideDynamicIcon,
  LucideLogOut,
  LucideMenu,
  LucideUser,
} from '@lucide/angular';
import { LayoutService } from '../layout.service';

export interface TopbarUser {
  name: string;
  email: string;
}

@Component({
  selector: 'app-topbar',
  imports: [MatMenuModule, MatTooltipModule, LucideDynamicIcon],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  protected readonly layout = inject(LayoutService);
  private readonly router = inject(Router);

  readonly workspace = input('');
  readonly user = input.required<TopbarUser>();
  readonly notifications = input(0);

  protected readonly initials = computed(() =>
    this.user()
      .name.split(' ')
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase(),
  );

  protected readonly Bell = LucideBell;
  protected readonly ChevronDown = LucideChevronDown;
  protected readonly CircleHelp = LucideCircleHelp;
  protected readonly LogOut = LucideLogOut;
  protected readonly Menu = LucideMenu;
  protected readonly User = LucideUser;

  protected logout() {
    this.router.navigateByUrl('/login');
  }
}
