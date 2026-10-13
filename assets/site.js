// Abstract and Press toggles
document.addEventListener("click", function (e) {
  var btn = e.target.closest(".p-act[aria-controls]");
  if (!btn) return;
  var panel = document.getElementById(btn.getAttribute("aria-controls"));
  var open = btn.getAttribute("aria-expanded") !== "true";
  btn.setAttribute("aria-expanded", open);
  panel.hidden = !open;
});
// Topic filters on the Research page
var chips = document.querySelectorAll(".va-chips button");
var papers = document.querySelector(".va-papers");
chips.forEach(function (b) {
  b.addEventListener("click", function () {
    chips.forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
    var tag = b.dataset.tag;
    papers.querySelectorAll(".paper").forEach(function (el) {
      el.hidden = tag !== "all" && el.dataset.tags.split(" ").indexOf(tag) === -1;
    });
    papers.querySelectorAll(".rgroup").forEach(function (g) {
      g.hidden = !g.querySelector(".paper:not([hidden])");
    });
  });
});
