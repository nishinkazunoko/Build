//.triggerのついているクラスを監視して、「-animated」をつける
document.addEventListener("DOMContentLoaded", function () {
  for (var e = document.querySelectorAll(".trigger"), t = new IntersectionObserver(function(e) {
    e.forEach(function(e) {
      0 < e.intersectionRatio && e.target.classList.add("-animated")
    })
  }
  ,{
    root: null,
    rootMargin: "0px",
    threshold: [.2, 1]
  }), o = 0; o < e.length; o++)
    t.observe(e[o]);
});