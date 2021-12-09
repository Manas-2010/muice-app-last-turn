var songs=[
    "Chellamma.mp3",
        "Rakita Rakita Rakita.mp3",
        "Kanna-Kaattu-Podhum.mp3",
        "Marana Mass.mp3",
        ];
        
    var i=0;
    
    function play_song() {
        if (i2 == 1){
            document.getElementById("audio").src=song_name2;
            document.getElementById("audio").play();
            i2 = 0
        };
    if (i2 == 0){
        document.getElementById("audio").src=songs[i];
        document.getElementById("audio").play();
        document.getElementById("song_name").innerHTML=songs[i]
        document.getElementById("start").style.display="none";
        document.getElementById("pause").style.display="inline-block";
        i++;
    }
if (i == 4)
i = 0
};

i2 = 0;
function pause_song(){
    document.getElementById("start").style.display="inline-block";
    document.getElementById("audio").src=songs[i];
    document.getElementById("audio").pause();
    document.getElementById("pause").style.display="none";
    document.getElementById("song_name").innerHTML=songs[i];
    song_name2 = songs[i];
    i2 = 1;
};
function rewind(){
    if (i == 4)
    i = 0;

    if (i == 0)
    i = 4;
    i--;
    document.getElementById("audio").src=songs[i];
    document.getElementById("audio").play();
    document.getElementById("song_name").innerHTML=songs[i]
}