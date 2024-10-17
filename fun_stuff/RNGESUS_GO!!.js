var hi = Math.Floor(Math.Random() * 3);
var linkie = "about.html"
if hi == 1 {
linkie  = index.html
} else if hi == 2 {
linkie = "about.html"
};
else {
linkie = "stats.html"
};
document.getElementById('rng').src = linkie;
