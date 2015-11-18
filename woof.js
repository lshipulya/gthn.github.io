/*

Woof.js 1.0
Dogs, on the go.

Adam, 2015.
Under the MIT License.

*/

// all the dog GIFs
var dogGIFs = ["http://i.imgur.com/5eI6Ltz.gif", "http://i.imgur.com/udS6bf9.gif", "http://i.imgur.com/feTFm56.gif", "http://i.imgur.com/XFNVq.gif", "http://i.imgur.com/6LTPsvu.gif", "http://i.imgur.com/oYwwaVV.gif", "http://i.imgur.com/bI9C4qJ.gif", "https://media.giphy.com/media/XkxfezUB7Rj4k/giphy.gif", "https://media.giphy.com/media/hB4MAjPelye8o/giphy.gif", "https://media.giphy.com/media/nQ8XtX3ctBCkE/giphy.gif", "https://media.giphy.com/media/Hgty04S1x8yhG/giphy.gif", "http://i.imgur.com/zRfBaHb.gif", "http://i.imgur.com/KWZhgGV.gif", "http://i.imgur.com/LYo9BA7.gif"];

window.onload = function() {
  var shook = new Shake({
    threshold: 15
  });
  shook.start();
  window.addEventListener('shake', shakeEventDidOccur, false);
  function shakeEventDidOccur () {
    $('.container').css('display', 'none');
    // fuck this
    $('body').css({'background-image': 'url('+dogGIFs[Math.floor(Math.random() * dogGIFs.length)]+')'});
    $('body').css('background-size', 'cover');
  }
};
