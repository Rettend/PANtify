// Window leave confirmation
window.onbeforeunload = function (e) {
    return "야~ 무슨 생각을 하고 있니? ";
};

let songsEasy = [
    ["ACDC", "Highway to Hell"],
    ["Avicii", "The nights"],
    ["Ed Sheeran", "Bad Habits"],
    ["The Rolling Stones", "Paint It, Black"],
    ["The White Stripes", "Seven Nation Army"],
    ["Imagine Dragons", "Whatever It Takes"],
    ["BTS", "Dynamite"],
    ["Queen", "Under Pressure"],
    ["Queen", "Another One Bites the Dust"],
    ["Rag'n'Bone Man", "Human"],
    ["Adele", "Rolling in the Deep"],
    ["Panic! At The Disco", "High Hopes"],
    ["Eric Clapton", "Change The World"],
    ["Red Hot Chili Peppers", "Dark Necessities"],
]

let songsHard = [
    ["Hanson", "MMMBop"],
    ["KALEO", "Broken Bones"],
    ["David Bowie", "Starman"],
    ["Mountain", "Mississippi Queen"],
    ["Ozzy Osbourne", "Crazy Train"],
    ["Imagine Dragons", "One Day"],
    ["Electric Light Orchestra (ELO)", "Mr. Blue Sky"],
    ["Coldplay ft. BTS", "My Universe"],
    ["Emberek", "Forog a Föld"],
    ["Dire Straits", "Sultans Of Swing"],
    ["SHAUN ft. Conor Maynard", "Way Back Home"],
    ["Jackson Browne", "Running on Empty"],
    ["Paul Simon ft. Garfunkel", "The Sound of Silence"],
    ["Bag Raiders", "Shooting Stars"],
    ["SABATON", "Stormtroopers"],
    ["Sigala ft. Ella Eyre, Meghan Trainor", "Just Got Paid"],
    ["K'NAAN", "Wavin' Flag"],
    ["TheFatRat", "Unity"],
]

let songsExtreme = [
    ["Harley Poe", "Eat Shit and Die"],
    ["ALESTORM", "Treasure Chest Party Quest"],
    ["Anthrax", "Got The Time"],
    ["Cypress Hill", "Lowrider"],
    ["The Dead South", "In Hell I'll Be In Good Company"],
    ["Chumbawamba", "Tubthumping"],
    ["JUNNY", "MOVIE"],
    ["ACDC", "Fire Your Guns"],
    ["Yunsae", "Warm Puppy"],
    ["Bomba Estéreo", "Soy Yo"],
    ["Rusted Root", "Send Me On My Way"],
    ["League of Legends ft. Jasmine Clarke", "Seraphine"],
    ["La Coka Nostra ft. Snoop Dogg", "Bang Bang"],
    ["Yogscast (Lewis & Simon)", "Diggy Diggy Hole"],
    ["Jamiroquai", "Virtual Insanity"],
    ["Baha Men", "Rat Race"],
    ["IU ft. SUGA", "eight"],
]

const x = document.getElementById("audio");
const songArtist = document.getElementById("songArtist");
const songTitle = document.getElementById("songTitle");
const logo = document.getElementById("logo");
const result = document.getElementById("result");
const osztály = document.getElementById("osztály");
const cDifficulty = document.getElementById("cDifficulty");
const cDuration = document.getElementById("cDuration");

const easyLeft = document.getElementById("easyLeft");
easyLeft.innerHTML = songsEasy.length;
const hardLeft = document.getElementById("hardLeft");
hardLeft.innerHTML = songsHard.length;
const extremeLeft = document.getElementById("extremeLeft");
extremeLeft.innerHTML = songsExtreme.length;


// Format: "artist;title"

var aDifficulty = null;
var song = null;
var aOsztály = null;

function newSong(difficulty) {
    aOsztály = osztály.value;
    if (aOsztály == "") {
        alert("Nincs megadva osztály!");
        return;
    }
    else {
        aDifficulty = difficulty;
        cDifficulty.innerHTML = difficulty;
        if (aDifficulty == 1) {
            const random = Math.floor(Math.random() * songsEasy.length);
            song = songsEasy[random];
            songsEasy = songsEasy.filter(x => x !== song);
            easyLeft.innerHTML = songsEasy.length;
        }
        else if (aDifficulty == 3) {
            const random = Math.floor(Math.random() * songsHard.length);
            song = songsHard[random];
            songsHard = songsHard.filter(x => x !== song);
            hardLeft.innerHTML = songsHard.length;
        }
        else if (aDifficulty == 5) {
            const random = Math.floor(Math.random() * songsExtreme.length);
            song = songsExtreme[random];
            songsExtreme = songsExtreme.filter(x => x !== song);
            extremeLeft.innerHTML = songsExtreme.length;
        }

        if (song == null) {
            alert("조심하세요!!!!!\n얼굴만 보면 몰라..\nMár nincs hátralévő zene!!!");
            return;
        }
        else {
            songArtist.innerHTML = song[0];
            songTitle.innerHTML = song[1];
        }
    }
}

var aDuration = 0;

function playSong(duration) {
    if (song == null) {
        alert("Nincs kiválasztva zene!");
        return;
    }
    else {
        aDuration = duration;
        cDuration.innerHTML = duration;
        x.src = "songs/" + song[0] + ";" + song[1] + ";" + duration + ".mp3";
        x.play();
    }
}

var aBaseScore = 0;

function setBaseScore(baseScore) {
    if (aDuration == 0) {
        alert("Nem volt lejátszva zene!");
        return;
    }
    else {
        aBaseScore = baseScore;
    }
}

function end(state) {
    var score = 0;
    if (state == 0 && song != null && aOsztály != null) {
        score = 0;
    }
    else if (aBaseScore == 0 || aDuration == 0) {
        alert("Nincs megadva pontszám!");
        return;
    }
    else {
        score = aBaseScore * aDifficulty;
    }
    var row = result.insertRow(result.rows.length);
    var cell0 = row.insertCell(0);
    cell0.innerHTML = aOsztály;
    var cell1 = row.insertCell(1);
    cell1.innerHTML = score;
    var cell2 = row.insertCell(2);
    cell2.innerHTML = song[0] + " - " + song[1];
    var cell3 = row.insertCell(3);
    cell3.innerHTML = aDifficulty;
    aBaseScore = 0;
    aDuration = 0;
    cDuration.innerHTML = 0;
}