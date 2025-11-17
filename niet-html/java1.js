
const ok = Math.floor(Math.random() *100);
if (ok < 50) {
document.getElementById("p1").href = "about.html";
} else if (ok > 50&& ok < 75) {
document.getElementById("p1").href="stats.html";
} else if (ok >75) {
  document.getElementById("p1").href="beeg_games.html";
}  else {
document.getElementById("p1").href="secretpage.html";
}
