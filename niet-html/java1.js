
const ok = Math.floor(Math.random() *100);
if (ok < 16) {
document.getElementById("p1").href = "honr.html";
} else if (ok > 15&& ok < 33) {
document.getElementById("p1").href="stats.html";
} else if (ok >32 && ok < 50) {
  document.getElementById("p1").href="index.html";
} else if (ok > 49&& ok < 66) {
document.getElementById("p1").href="satis.html";
} else if (ok >65 && ok < 82) {
  document.getElementById("p1").href="LoL.html";
} else if (ok >81 && ok <99) {
  document.getElementById("p1").href="DotA.html";
} else {
document.getElementById("p1").href="secretpage.html";
}
