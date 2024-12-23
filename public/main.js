const topMenu = document.getElementById('ct-top-menu');
const toggleTopMenuItemIcon = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
  // container => nôm na nghĩa là thuộc.
  if(toggleTopMenuItemIcon.contains(e.target)) {
    // Click to toggle top menu icon.
    topMenu.classList.toggle('ct-topMenu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    // Click outside from toggle top menu icon.
    if (topMenu.classList.contains('ct-topMenu-expanded')) {
      topMenu.classList.remove('ct-topMenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})

