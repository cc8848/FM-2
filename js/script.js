(() => {
  let albums = [
    {
      "name": "Without You",
      "artist": "Mariah Carey",
      "song": "Without You"
    },
    {
      "name": "Bury the Hatchet",
      "artist": "The Cranberries",
      "song": "Dying In the Sun"
    },
     {
       "name": "HIStory",
       "artist": "Michael Jackson",
       "song": "You Are Not Alone"
     }
   ];
  let audio = document.querySelector('audio');
  let albumCover = document.querySelector('.album-cover');
  let songName = document.querySelector('.song-name');
  let artist = document.querySelector('.artist');
  let stepForward = document.querySelector('.fa-step-forward');
  let n = 0;

  function loadAlbum(album) {
   audio.src = `./albums/${album.name}/${album.song}.mp3`;
   albumCover.style.backgroundImage = `url('./albums/${album.name}/cover.jpg')`;
   songName.textContent = album.song;
   document.title = `${album.song} - FM`;
   artist.textContent = album.artist;
  }

  function next() {
    if (n === albums.length - 1) {
      n = 0;
    } else {
      n++;
    }
    loadAlbum(albums[n]);
    albumCover.style.animationPlayState = 'running';
    albumCover.style.animation = 'flip 1s';
    audio.play();
    setTimeout(()=>{
      albumCover.style.animation = 'rotate 36s linear infinite';
    }, 1000)
  }

  audio.onended = next;
  stepForward.onclick = next;
  albumCover.onclick = function() {
    if (this.style.animationPlayState === 'running' || this.style.animationPlayState === 'initial') {
      audio.pause();
      this.style.animationPlayState = 'paused';
    } else {
      audio.play();
      this.style.animationPlayState = 'running';
    }
  };

  loadAlbum(albums[n]);
})();
