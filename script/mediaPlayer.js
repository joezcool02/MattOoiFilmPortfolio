document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);
function initialiseMediaPlayer() {
   mediaPlayer = document.getElementById('media-video');
}
var mediaPlayer = document.getElementById('media-video');
function loadVideo() {
   for (var i = 0; i < arguments.length; i++) {
      var file = arguments[i].split('.');
      var ext = file[file.length - 1];
      if (canPlayVideo(ext)) {
         mediaPlayer.src = arguments[i];
         mediaPlayer.load();
         break;
      }
   }
}

function canPlayVideo(ext) {
   var ableToPlay = mediaPlayer.canPlayType('video/' + ext);
   if (ableToPlay == '') return false;
   else return true;
}