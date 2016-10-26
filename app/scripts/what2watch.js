var btnMenu = document.querySelector('.dropBtn');
var dropMenu = document.querySelector('.dropMenu');

btnMenu.addEventListener('click',switchMenu);

function switchMenu() {
  if(dropMenu.style.display === 'none' || dropMenu.style.display === '')
    dropMenu.style.display = 'block';
  else {
    dropMenu.style.display = 'none';
  }
}

function getUrl(path) {
  return "https://image.tmdb.org/t/p/w300/" + path;
}
