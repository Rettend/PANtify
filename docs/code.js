// Window leave confirmation
// window.onbeforeunload = function (e) {
//     return "야~ 무슨 생각을 하고 있니? ";
// };



// const songs = {"ACDC": "Highway to Hell", "Hanson": "MMMBop", "KALEO": "Broken Bones" };
const songs = ["ACDC;Highway to Hell", "Hanson;MMMBop", "KALEO;Broken Bones"];
const x = document.getElementById("audio");
const songArtist = document.getElementById("songArtist");
const songTitle = document.getElementById("songTitle");
// TODO: create JSON instead of array


function playAudio() {
    const random = Math.floor(Math.random() * songs.length); // define random number
    let song = songs[random]; // choose a song randomly from the array
    console.log([random, songs[random]]); // debug only - print the random number and the song
    let songInfo = song.split(";"); // split the song into artist and title
    songArtist.innerHTML = songInfo[0]; // set the artist
    songTitle.innerHTML = songInfo[1]; // set the title
    x.src = "songs/" + song + ".mp3"; // set the source of the audio element to the song
    x.play(); // play the song
}