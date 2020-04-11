const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of song
let songIndex = 2;


const load = (song) => {
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
    title.innerText = songs[songIndex];
}

load(songs[songIndex]);
const playMusic = () => {
    musicContainer.classList.add('play');
    playBtn.innerText = 'pause';
    audio.play();
}
const pauseMusic = () => {
    musicContainer.classList.remove('play');
     playBtn.innerText = ' play_arrow';
    audio.pause();
}
const handelMusic = () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
}

// Previous song
function prevMusic() {
    songIndex--;
  
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    load(songs[songIndex]);
  
    playMusic();
  }
  
  // Next song
  function nextMusic() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    load(songs[songIndex]);
  
    playMusic();
  }


const updateProgress=(e)=>{

let persent=( e.target.currentTime / e.target.duration )*100;
progress.style.width=`${persent}%`;
}


const setProgress=(e)=>{
    
  audio.currentTime=( e.offsetX/ e.target.clientWidth) *audio.duration;
    
    

    
}


playBtn.addEventListener('click', handelMusic);
nextBtn.addEventListener('click',nextMusic);
prevBtn.addEventListener('click',prevMusic);
audio.addEventListener('timeupdate',updateProgress);
audio.addEventListener('ended',nextMusic);
progressContainer.addEventListener('click',setProgress)