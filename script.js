document.querySelector('.menu-button').addEventListener('click', function() {
    var menuList = document.querySelector('.menu-list');
    if (menuList.style.display === 'block') {
      menuList.style.display = 'none';
    } else {
      menuList.style.display = 'block';
    }
  });
  