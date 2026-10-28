(() => {
  const DESKTOP = window.matchMedia('(min-width: 992px)');
  const menu = document.getElementById('main-menu');
  const container = document.getElementById('main-container');
  const backdrop = document.getElementById('main-menu-background');
  const collapseBtn = document.getElementById('collapse-toggle');
  const userMenu = document.getElementById('menu-user');
  const userDropdown = document.getElementById('menu-user-collapse');

  document.getElementById('year').textContent = new Date().getFullYear();

  const renderIcons = () => window.lucide && lucide.createIcons();

  // Colapsar / expandir (desktop)
  const setCollapsed = (collapsed) => {
    menu.classList.toggle('is-collapsed', collapsed);
    container.classList.toggle('is-collapsed', collapsed);
    collapseBtn.innerHTML = `<i data-lucide="${collapsed ? 'panel-left-open' : 'panel-left-close'}"></i>`;
    collapseBtn.querySelector('i').setAttribute('width', collapsed ? 14 : 18);
    renderIcons();
  };

  collapseBtn.addEventListener('click', () => setCollapsed(!menu.classList.contains('is-collapsed')));

  // Abrir / cerrar (mobile)
  const setMobileOpen = (open) => {
    menu.classList.toggle('show', open);
    backdrop.classList.toggle('show', open);
  };

  document.getElementById('mobile-menu-trigger').addEventListener('click', () => setMobileOpen(true));
  backdrop.addEventListener('click', () => setMobileOpen(false));

  DESKTOP.addEventListener('change', (e) => {
    setMobileOpen(false);
    if (!e.matches) setCollapsed(false);
  });

  // Grupos del menú
  document.querySelectorAll('.service-header').forEach((header) => {
    header.addEventListener('click', () => header.parentElement.classList.toggle('is-expanded'));
  });

  // Ítems con submenú
  document.querySelectorAll('.main-item.has-children').forEach((item) => {
    const list = item.nextElementSibling;
    item.addEventListener('click', () => {
      if (menu.classList.contains('is-collapsed')) return;
      item.classList.toggle('is-expanded');
      list.classList.toggle('is-open');
    });
    // Con el menú colapsado el submenú flota a la altura del ítem
    item.parentElement.addEventListener('mouseenter', () => {
      if (menu.classList.contains('is-collapsed')) {
        list.style.top = `${item.getBoundingClientRect().top}px`;
      }
    });
  });

  // Selección de ítems
  document.querySelectorAll('.main-item:not(.has-children), .sub-item').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.main-item.is-active, .sub-item.is-active')
        .forEach((el) => el.classList.remove('is-active'));
      item.classList.add('is-active');
      if (!DESKTOP.matches) setMobileOpen(false);
    });
  });

  // Dropdown de usuario
  userMenu.addEventListener('click', (e) => {
    if (!userDropdown.contains(e.target)) userDropdown.classList.toggle('show');
  });
  document.addEventListener('click', (e) => {
    if (!userMenu.contains(e.target)) userDropdown.classList.remove('show');
  });

  renderIcons();
})();
