const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songNmae: `On My Way<br> 
        <div class="subtitle">Alan Walkar</div>`,
        poster : "image/1.jpg"
    },
    {
        id: 2,
        songNmae: `Boombastic<br> 
        <div class="subtitle">Shaggy</div>`,
        poster : "image/2.jpg"
    },
    {
        id: 3,
        songNmae: `Gasolina<br> 
        <div class="subtitle">Daddy Yankee</div>`,
        poster : "image/3.jpg"
    },
    {
        id: 4,
        songNmae: `Cheap Thrills<br> 
        <div class="subtitle">Sia</div>`,
        poster : "image/4.jpg"
    },
    {
        id: 5,
        songNmae: `Despacito<br> 
        <div class="subtitle">Luis Fonsi</div>`,
        poster : "image/5.jpg"
    },
    {
        id: 6,
        songNmae: `Dance Monkey<br> 
        <div class="subtitle">Tones and I</div>`,
        poster : "image/6.jpg"
    },
    {
        id: 7,
        songNmae: `Go Down Deh<br> 
        <div class="subtitle">Spice</div>`,
        poster : "image/7.jpg"
    },
    {
        id: 8,
        songNmae: `Waka Waka<br> 
        <div class="subtitle">Shakira</div>`,
        poster : "image/8.jpg"
    },
    {
        id: 9,
        songNmae: `Skechers<br> 
        <div class="subtitle">Drip Report</div>`,
        poster : "image/9.jpg"
    },
    {
        id: 10,
        songNmae: `Unholy<br> 
        <div class="subtitle">Kim Petras and Sam Smith</div>`,
        poster : "image/10.jpg"
    },
    {
        id: 11,
        songNmae: `Blank Space<br> 
        <div class="subtitle">Taylor Swift</div>`,
        poster : "image/11.jpg"
    },
    {
        id: 12,
        songNmae: `Baby<br> 
        <div class="subtitle">Justin Bieber</div>`,
        poster : "image/12.jpg"
    },
    {
        id: 13,
        songNmae: `Swalla<br> 
        <div class="subtitle">Nicki Minaj & Ty Dolla</div>`,
        poster : "image/13.jpg"
    },
    {
        id: 14,
        songNmae: `Patakha Guddi<br> 
        <div class="subtitle">Nooran Sisters</div>`,
        poster : "image/14.jpg"
    },
    {
        id: 15,
        songNmae: `Phir Se Udd Chala<br> 
        <div class="subtitle">Mohit Chauhan</div>`,
        poster : "image/15.jpg"
    },
    {
        id: 16,
        songNmae: `Baaraat<br> 
        <div class="subtitle">Nucleya and Ritviz</div>`,
        poster : "image/16.jpg"
    },
    {
        id: 17,
        songNmae: `Lahore<br> 
        <div class="subtitle">Guru Randhawa</div>`,
        poster : "image/17.jpg"
    },
    {
        id: 18,
        songNmae: `Safarnama<br> 
        <div class="subtitle">Lucky Ali</div>`,
        poster : "image/18.jpg"
    },
    {
        id: 19,
        songNmae: `Manali Trance<br> 
        <div class="subtitle">Neha kakkar, Yo Yo</div>`,
        poster : "image/19.jpg"
    },
    {
        id: 20,
        songNmae: `Girls Like You<br> 
        <div class="subtitle">Maroon 5, Cardi b</div>`,
        poster : "image/20.jpg"
    },
    {
        id:21,
        songNmae: `New Rules<br> 
        <div class="subtitle">Dua Lipa</div>`,
        poster : "image/21.jpg"
    },
    {
        id: 22,
        songNmae: `Shape Of Ypu<br> 
        <div class="subtitle">Ed Shareen</div>`,
        poster : "image/22.jpg"
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songNmae;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}


const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105, 105, .0)';
    })
}




let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=> {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitle = songs.filter((els) =>{
            return els.id == index;
        });

        songTitle.forEach(elss =>{
            let {songNmae} =elss;
            title.innerHTML = songNmae;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105, .1)";
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});



let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', () =>{
    let music_cur = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_cur)

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(sec1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_cur / 60);
    let sec2 = Math.floor(music_cur % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_cur / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a /100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');
// index = Array.from(document.getElementsByClassName('songItem')).length;
// console.log(index)

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }

    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitle = songs.filter((els) =>{
            return els.id == index;
        });

        songTitle.forEach(elss =>{
            let {songNmae} =elss;
            title.innerHTML = songNmae;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105, .1)";
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitle = songs.filter((els) =>{
            return els.id == index;
        });

        songTitle.forEach(elss =>{
            let {songNmae} =elss;
            title.innerHTML = songNmae;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105,105, 105, .1)";
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});













let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})


pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})


let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let item = document.getElementsByClassName('item')[0];


pop_artist_right.addEventListener('click', () => {
    item.scrollLeft += 330;
})


pop_artist_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
})