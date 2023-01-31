window.onload = function () {
  var btn = document.getElementById('searchBtn');

  btn.addEventListener('click', function () {
    search();
  });
};

function search() {
  var text = document.getElementById('searchText').value;
  var items = document.getElementById('items');
  var imgsAlts = document.getElementsByTagName('img');
  for (var i = 1; i < imgsAlts.length; i++) {
    var imgsAlt = imgsAlts[i].getAttribute('alt');
    var reg = new RegExp(text);
    imgsAlts[i].setAttribute('index', 0);
    if (reg.test(imgsAlt)) {
      imgsAlts[i].setAttribute('index', 1);
    }
    if (text == null || text == undefined || text == '') {
      imgsAlts[i].setAttribute('index', 1);
    }
  }
  for (var i = 1; i < imgsAlts.length; i++) {
    var index = imgsAlts[i].getAttribute('index');
    if (index != 1) {
      imgsAlts[i].parentNode.parentNode.style.display = 'none';
    } else {
      imgsAlts[i].parentNode.parentNode.style.display = 'flex';
    }
  }
}
