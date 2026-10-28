import {
  LucideFileText,
  LucideFolder,
  LucideHouse,
  LucideIconInput,
  LucideSettings,
  LucideUsers,
} from '@lucide/angular';

export interface MenuSubItem {
  label: string;
  route: string;
}

export interface MenuItem {
  label: string;
  icon: LucideIconInput;
  route?: string;
  badge?: number;
  children?: MenuSubItem[];
}

export interface MenuGroup {
  label: string;
  /** Texto corto que se muestra con el sidebar colapsado. */
  shortLabel: string;
  items: MenuItem[];
}

/** Menú de ejemplo: reemplazar por los grupos, ítems y rutas reales. */
export const MENU: MenuGroup[] = [
  {
    label: 'Grupo 1',
    shortLabel: 'G1',
    items: [
      { label: 'Inicio', icon: LucideHouse, route: '/' },
      { label: 'Ítem con badge', icon: LucideFileText, route: '/item-badge', badge: 3 },
      {
        label: 'Ítem con submenú',
        icon: LucideFolder,
        children: [
          { label: 'Subítem 1', route: '/sub-1' },
          { label: 'Subítem 2', route: '/sub-2' },
          { label: 'Subítem 3', route: '/sub-3' },
        ],
      },
    ],
  },
  {
    label: 'Grupo 2',
    shortLabel: 'G2',
    items: [
      { label: 'Ítem', icon: LucideUsers, route: '/item-1' },
      { label: 'Ítem', icon: LucideSettings, route: '/item-2' },
    ],
  },
];
