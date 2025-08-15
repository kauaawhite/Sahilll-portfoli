// Hamburger opens sidebar
document.getElementById('hamburgerBtn').addEventListener('click', function () {
  document.getElementById('sidebarMenu').classList.add('active');
});

// ⌘ closes sidebar
document.getElementById('cmdBtn').addEventListener('click', function () {
  document.getElementById('sidebarMenu').classList.remove('active');
});

// Sidebar closes if you click outside or select any menu item
document.addEventListener('mousedown', function (e) {
  const sidebar = document.getElementById('sidebarMenu');
  const hamburger = document.getElementById('hamburgerBtn');
  const cmdBtn = document.getElementById('cmdBtn');
  if (sidebar.classList.contains('active')) {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && !cmdBtn.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  }
});

document.querySelectorAll('.glass-sidebar a').forEach(link => {
  link.addEventListener('click', function(e){
    let href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.getElementById('sidebarMenu').classList.remove('active');
      document.querySelector(href).scrollIntoView({behavior: "smooth"});
      document.querySelectorAll('.glass-sidebar a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Theme switcher toggles dark mode & icon
document.getElementById('themeSwitcher').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  this.innerHTML = document.body.classList.contains('dark-mode') ? '&#9790;' : '&#9728;';
});

// Project card click opens link in new tab
document.querySelectorAll('.project-card-custom').forEach(card => {
  card.addEventListener('click', function () {
    const link = this.parentElement.querySelector('.project-arrow')?.getAttribute('href');
    if (link) {
      window.open(link, '_blank');
    } else if (this.dataset.link) {
      window.open(this.dataset.link, '_blank');
    }
  });
});
