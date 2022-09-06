import VimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', function () {
  console.log('played the video!');
});
