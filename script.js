console.log("Lets write Java sript");
let current_song=new Audio();

async function getsongs() {
  let a = await fetch("http://127.0.0.1:3000/video_84/song/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let songs = [];
  let tds = div.getElementsByTagName("a");
  for (let iterator of tds) {
    if (iterator.href.endsWith(".mp3")) {
      songs.push(iterator.href.split("/song/")[1]);
    }
  }
  return songs
}
let arr=[];

let obj={};

let playMusic =(track)=>{
  current_song.src="/video_84/song/"+arr[track];
  current_song.play();
}

async function main(){

    //Play the first song
    
    let songs= await getsongs();
    console.log(songs)

    let songUL=document.querySelector(".scrolle_mid").getElementsByTagName("ul")[0]
    let i=1;
    for (let song of songs) {
        console.log(song)
        let var1=song.replaceAll("%20"," ").replaceAll("%A6"," ").replaceAll("%E0"," ").replaceAll("%86"," ").replaceAll("%B2"," ").replaceAll(".mp3",'');
        songUL.innerHTML=songUL.innerHTML+`
        <li>
          <div>
            <div><img class="music_icons_butt" src="img/music_list.svg" alt=""></div>
            <div class="font_size1 info">${var1}</div>
            <div class="font_size1">Play Now</div>
            <div><img class="music_icons_butt" src="img/music_play.svg" alt=""></div>
          </div>
        </li>`;
        arr[var1]=song;
        obj.var1=song;
        i++;
    }
    Array.from(document.querySelector(".song_listing").getElementsByTagName("li")).forEach(e=>{
      e.addEventListener("click",element=>{
        playMusic(e.querySelector(".info").innerHTML)
      })
    })
    
}
main()
console.log(obj)
