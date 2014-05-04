(function() {
  var script = document.createElement('script');
  script.src = 'vendor/qunit/qunit.js'

  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'vendor/qunit/qunit.css'

  document.head.appendChild(css);
  document.head.appendChild(script);

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      var qunit = document.createElement('div');
      qunit.id = 'qunit';

      document.querySelector('body').appendChild(qunit);
    }
  }
})();

