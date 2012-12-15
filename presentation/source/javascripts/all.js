Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  rollingLinks: false,
  center: true,

  theme: 'default', // available themehemes are in /css/theme
  transition: 'default', // default/cube/page/concave/linear(2d)
  dependencies: [
        // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } }
        //,
        // Zoom in and out with Alt+click
        //{ src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },

        // Remote control your reveal.js presentation using a touch device
        //{ src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]

  // Optional libraries used to extend on reveal.js
});
$(document).ready(function() {
  $('.imageslides').slides({
    generateNextPrev: true,
    effect: 'fade',
    fadeEasing: "jswing",
    crossfade: true,
    fadeSpeed: 1000
  });
  $('.prev').text("<<");
  $('.next').text(">>");
});


