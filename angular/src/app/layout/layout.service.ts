import { Injectable, signal } from '@angular/core';

/** Estado compartido del layout: sidebar colapsado (desktop) y abierto (mobile). */
@Injectable({ providedIn: 'root' })
export class LayoutService {
  readonly collapsed = signal(false);
  readonly mobileOpen = signal(false);

  toggleCollapsed() {
    this.collapsed.update((v) => !v);
  }

  openMobile() {
    this.mobileOpen.set(true);
  }

  closeMobile() {
    this.mobileOpen.set(false);
  }
}
