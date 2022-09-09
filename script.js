console.log("heyyyyyy");

//initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/rap_god.mp3');
let masterPlay=document.getElementById("masterPlay");
let masterSongName=document.getElementById("masterSongName");
let myProgressBar=document.getElementById("inProgressBar");
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));



let songs=[
    {songName:"Eminem-Rap God", filePath:"songs/rap_god.mp3", coverPath:"images/rap_god_cover.jpg"},
    {songName:"Eminem-Killshot", filePath:"songs/killshot.mp3", coverPath:"images/killshot_cover.jpg"},
    {songName:"Eminem-Lose Yourself", filePath:"songs/lose_yourself.mp3", coverPath:"images/lose_yourself_cover.jpg"},
    {songName:"Eminem-Mockingbird", filePath:"songs/mockingbird.mp3", coverPath:"images/mockingbird_cover.jpg"},
    {songName:"Eminem-Not Afraid", filePath:"songs/not_afraid.mp3", coverPath:"images/not_afraid_cover.jpg"},
    {songName:"Eminem-real slim shady", filePath:"songs/real_slim_shady.mp3", coverPath:"images/real_slim_shady_cover.jpg"},
    {songName:"Eminem-Venom", filePath:"songs/venom.mp3", coverPath:"images/venom_cover.jpg"},
    {songName:"Eminem-Without me", filePath:"songs/without_me.mp3", coverPath:"images/without_me_cover.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity=0;
    }
})
-
audioElement.addEventListener('timeupdate', () =>{
    // update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration) / 100);
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    })

}



Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src=`songs/${index+1}.mp3`;
        masterSongName.innerText=songs[index].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');


    })
}
)

document.getElementById('next').addEventListener('click' , ()=>{
    if(index >=7)
    {
        index=0;
    }
    else{
        index+=1;
    }
    audioElement.src=`songs/${index+1}.mp3`;
    masterSongName.innerText=songs[index].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(index <=0)
    {
        index=0;
    }
    else{
        index-=1;
    }
    audioElement.src=`songs/${index+1}.mp3`;
    masterSongName.innerText=songs[index].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})