var video = document.getElementById("movie");
video.addEventListener("click",function(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
});

