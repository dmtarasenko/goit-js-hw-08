import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function onPlayerTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
