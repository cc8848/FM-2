(() => {
  let albums = [
    {
      "name": "Bury the Hatchet",
      "artist": "The Cranberries",
      "song": "Dying In the Sun"
    },
     {
       "name": "HIStory",
       "artist": "Michael Jackson",
       "song": "You Are Not Alone"
     },
     {
       "name": "Without You",
       "artist": "Mariah Carey",
       "song": "Without You"
     }
   ];
  let audio = document.querySelector('audio');
  let albumCover = document.querySelector('.album-cover');
  let songName = document.querySelector('.song-name');
  let artist = document.querySelector('.artist');
  let stepForward = document.querySelector('.fa-step-forward');
  let like = document.querySelector('.fa-heart-o');
  let loading = document.querySelector('.loading');
  let n = 0;

  function loadAlbum(album) {
    loading.style.display = 'block';
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
    like.className = 'fa fa-heart-o fa-3x';
  }

  audio.oncanplay = function() {
    loading.style.display = 'none';
  };
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

  like.onclick = function() {
    if (this.className === 'fa fa-heart-o fa-3x') {
      this.className = 'fa fa-heart fa-3x';
    } else {
      this.className = 'fa fa-heart-o fa-3x';
    }
  };

  loadAlbum(albums[n]);
})();
