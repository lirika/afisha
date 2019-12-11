'use strict';
function navbar() {
  let selected;
  document.getElementById('navbar').addEventListener('click', ev => {
    let target_item = ev.target;
    if (target_item.className != 'item') return;
    active(target_item);
  });

  function active(item) {
    if (selected) {
      selected.classList.remove('active');
    }
    selected = item;
    selected.classList.add('active');
  }
}
navbar();


