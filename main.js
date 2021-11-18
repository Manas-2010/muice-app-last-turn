var songs=[
    "Chellamma.mp3",
        "Rakita Rakita Rakita.mp3",
        "Kanna-Kaattu-Podhum.mp3",
        "Marana Mass.mp3",
        ];
    var i=0;
    
    function play_song() {
        document.getElementById("audio").src=songs[i];
        document.getElementById("audio").play();
        document.getElementById("song_name").innerHTML=songs[i]
        i++;
if (i == 4)
i = 0
};

function rewind() {
    if (i == 4)
    i = 0;

    if (i == 0)
    i = 4;
    i--;
    document.getElementById("audio").src=songs[i];
    document.getElementById("audio").play();
    document.getElementById("song_name").innerHTML=songs[i]
}