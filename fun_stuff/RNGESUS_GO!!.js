const  = document.getElementById('rand');

rand.addEventListener('click', () => {
  const linkie = document.getElementById('linkie');
  var hi = Math.floor(Math.random() * 3);
  if (hi == 2) {
  linkie.href = 'stats.html';
  } else if (hi == 1) {
    linkie.href = 'index.html';
  } else {
    linkie.href = 'about.html';
    
  return false;
});
