(function () {
  var bar = document.querySelector('.filter-bar');
  if (!bar) return;

  var buttons = Array.prototype.slice.call(bar.querySelectorAll('.filter-btn'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('#research .year-group'));

  function apply(filter) {
    groups.forEach(function (group) {
      var entries = Array.prototype.slice.call(group.querySelectorAll('.entry'));
      var anyVisible = false;
      entries.forEach(function (entry) {
        var match = filter === 'all' || entry.dataset.tag === filter;
        entry.hidden = !match;
        if (match) anyVisible = true;
      });
      group.hidden = !anyVisible;
    });
  }

  bar.addEventListener('click', function (e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;
    buttons.forEach(function (b) { b.classList.toggle('active', b === btn); });
    apply(btn.dataset.filter);
  });
})();
