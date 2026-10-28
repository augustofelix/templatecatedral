import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideChevronDown,
  LucideChevronRight,
  LucideDynamicIcon,
  LucidePanelLeftClose,
  LucidePanelLeftOpen,
} from '@lucide/angular';
import { LayoutService } from '../layout.service';
import { MENU, MenuItem } from '../menu';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, LucideDynamicIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  protected readonly layout = inject(LayoutService);
  protected readonly groups = MENU;
  protected readonly year = new Date().getFullYear();

  protected readonly ChevronDown = LucideChevronDown;
  protected readonly ChevronRight = LucideChevronRight;
  protected readonly PanelLeftClose = LucidePanelLeftClose;
  protected readonly PanelLeftOpen = LucidePanelLeftOpen;

  protected readonly collapsedGroups = signal(new Set<string>());
  protected readonly openItems = signal(new Set<MenuItem>());
  /** Posición vertical del submenú flotante cuando el sidebar está colapsado. */
  protected readonly floatingTop = signal(0);

  protected toggleGroup(label: string) {
    this.collapsedGroups.update((set) => toggle(set, label));
  }

  protected toggleItem(item: MenuItem) {
    if (this.layout.collapsed()) return;
    this.openItems.update((set) => toggle(set, item));
  }

  protected onItemHover(event: MouseEvent) {
    if (this.layout.collapsed()) {
      this.floatingTop.set((event.currentTarget as HTMLElement).getBoundingClientRect().top);
    }
  }

  protected onNavigate() {
    this.layout.closeMobile();
  }
}

function toggle<T>(set: Set<T>, value: T): Set<T> {
  const next = new Set(set);
  if (!next.delete(value)) next.add(value);
  return next;
}
