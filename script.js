//Initilize the variables

let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
masterSongName= document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Vekamleya", filePath: "songs/1.mp3",coverPath:" vekamliya.jpg"},
    {songName:"More Kanha Sabse Alag Hai", filePath: "songs / 2.mp3",coverPath:"kanha.jpg"},
    {songName:"Ishq Hai", filePath: "songs/3.mp3",coverPath:"ishq1.jpg"},
    {songName:"Tu Hai To Mai hu", filePath: "songs/4.mp3",coverPath:"ishq2.jpg"},
    {songName:"Ve Haniya Ve Dil Janiya Udaariyaan", filePath: "songs/5.mp3",coverPath:"ishq3.jpg"},
    {songName:"Ek Jaisa Haal Tera Mera", filePath: "songs/6.mp3",coverPath:"ishq4.jpg"},
    
]

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;

})

//Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
   
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;


    }
})
//Lisean to Events

audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar

    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100)
    
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt (e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=  `songs/${songIndex + 1}.mp3`; 
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
})    

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src= `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src= `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})