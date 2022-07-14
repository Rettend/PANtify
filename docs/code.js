// // Window leave confirmation
// window.onbeforeunload = function (e) {
//     return "";
// };

const songs = [
    {
        "artist": "ACDC",
        "song": "Highway to Hell",
        "text": ["ACDC1", "ACDC2", "ACDC3"],
        "streamCount": 1010569617,
        "coverImage": "cover images/ACDC;Highway to Hell.jpg"
    }, {
        "artist": "Avicii",
        "song": "The nights",
        "text": ["Avicii1", "Avicii2", "Avicii3"],
        "streamCount": 1116498715,
        "coverImage": "cover images/Avicii;The nights.png"
    }];

console.log(songs[0].artist);

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
    ["Red Hot Chili Peppers", "Dark Necessities"],
    ["Marshmello (ft. Khalid)", "Silence"],
    ["Alessia Cara", "Scars To Your Beautiful"],
    ["Calvin Harris (ft. Pharrel Williams, Katy Perry, Big Sean)", "Feels"],
    ["Eminem (ft. Nate Dogg)", "'Till I Collapse"],
    ["The Weeknd", "Save Your Tears"],
    ["Eminem", "Without Me"],
    ["Aerosmith", "I Don't Want to Miss a Thing"],
    ["Guns 'N Roses", "Paradise City"],
    ["Alan Walker", "Alone"],
    ["Post Malone", "Circles"],
    ["Zedd (ft. Maren Morris, Grey)", "The Middle"],

]

let songsHard = [
    ["Eric Clapton", "Change The World"],
    ["Hanson", "MMMBop"],
    ["KALEO", "Broken Bones"],
    ["David Bowie", "Starman"],
    ["Mountain", "Mississippi Queen"],
    ["Ozzy Osbourne", "Crazy Train"],
    ["Imagine Dragons", "One Day"],
    ["Electric Light Orchestra (ELO)", "Mr. Blue Sky"],
    ["Coldplay (ft. BTS)", "My Universe"],
    ["Emberek", "Forog a Föld"],
    ["Dire Straits", "Sultans Of Swing"],
    ["SHAUN (ft. Conor Maynard)", "Way Back Home"],
    ["Jackson Browne", "Running on Empty"],
    ["Paul Simon (ft. Garfunkel)", "The Sound of Silence"],
    ["Bag Raiders", "Shooting Stars"],
    ["SABATON", "Stormtroopers"],
    ["Sigala (ft. Ella Eyre, Meghan Trainor)", "Just Got Paid"],
    ["K'NAAN", "Wavin' Flag"],
    ["TheFatRat", "Unity"],
    ["Klaus Badelt (Pirates of the Caribbean)", "He's a Pirate"],
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
    ["League of Legends (ft. Jasmine Clarke)", "Seraphine"],
    ["La Coka Nostra (ft. Snoop Dogg)", "Bang Bang"],
    ["Yogscast (Lewis & Simon)", "Diggy Diggy Hole"],
    ["Jamiroquai", "Virtual Insanity"],
    ["Baha Men", "Rat Race"],
    ["IU (ft. SUGA)", "eight"],
    ["ACDC", "For Those About to Rock"],
]


const pokemonCount = 3;
const x = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const logo = document.getElementById("logo");
const result = document.getElementById("result");
const osztály = document.getElementById("osztály");
const cDifficulty = document.getElementById("cDifficulty");
const cDuration = document.getElementById("cDuration");
const endModal = document.getElementById("endModal");
const endArtits = document.getElementById("endArtits");
const endTitle = document.getElementById("endTitle");
const easyScore = document.getElementById("easyScore");
const hardScore = document.getElementById("hardScore");
const extremeScore = document.getElementById("extremeScore");
const easyAbsLeft = songsEasy.length;
const hardAbsLeft = songsHard.length;
const extremeAbsLeft = songsExtreme.length;

const easyLeft = document.getElementById("easyLeft");
easyLeft.innerHTML = easyAbsLeft + " / " + songsEasy.length;
const hardLeft = document.getElementById("hardLeft");
hardLeft.innerHTML = hardAbsLeft + " / " + songsHard.length;
const extremeLeft = document.getElementById("extremeLeft");
extremeLeft.innerHTML = extremeAbsLeft + " / " + songsExtreme.length;


var abrSymbols = ["", "k", "M", "B", "T"];
function abr(number) {

    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return number;

    // get suffix and determine scale
    var suffix = abrSymbols[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(0) + suffix;
}


var slider = document.getElementById('slider');
var difficultyLabel = document.getElementById('difficultyLabel');
noUiSlider.create(slider, {
    start: [800000000, 2000000000],
    snap: true,
    connect: true,
    margin: 200000000,
    range: {
        'min': 1000000, // 1M
        '10%': 5000000, // 5M
        '20%': 10000000, // 10M
        '30%': 25000000, // 25M
        '40%': 50000000, // 50M
        '50%': 100000000, // 100M
        '60%': 250000000, // 250M
        '70%': 500000000, // 500M
        '80%': 800000000, // 800M
        '90%': 1000000000, // 1B
        'max': 2000000000 // 2B
    },
    direction: 'rtl',
    pips: {
        mode: 'range',
        density: 3,
        format: {
            to: function (a) {
                return abr(a);
            }
        }
    }
});

slider.noUiSlider.on('update', function (values, handle) {
    var reciprocal1 = values[0] / 2000000000;
    var reciprocal2 = values[1] / 2000000000;
    
    // calculate a multiplier value which is larger the closer the slider is to the right
    var multiplier1 = Math.abs(1 - reciprocal1) * 15; // right slider multiplier
    var multiplier2 = Math.abs(1 - reciprocal2) * 2; // left slider multiplier

    // average of the two multipliers
    var multiplier = multiplier1 + multiplier2 / 2;

    // normalize the multiplier value to the range 1-5
    var normalizedMultiplier = Math.abs((multiplier - 1) / 4);

    difficultyLabel.innerHTML = normalizedMultiplier.toFixed(2);
});



var aDifficulty = null;
var song = null;
var aOsztály = null;

function newSong(difficulty) {
    aOsztály = osztály.value;
    if (aOsztály == "") {
        alert("Nincs megadva osztály!");
        return;
    } else {
        let easyS = 20;
        let hardS = 15;
        let extremeS = 12;

        aDifficulty = difficulty;
        cDifficulty.innerHTML = difficulty;
        if (aDifficulty == 1) {
            let random = Math.floor(Math.random() * songsEasy.length);
            song = songsEasy[random];
            songsEasy = songsEasy.filter(x => x !== song);
            easyLeft.innerHTML = easyAbsLeft + " / " + songsEasy.length;
        } else if (aDifficulty == 3) {
            let random = Math.floor(Math.random() * songsHard.length);
            song = songsHard[random];
            songsHard = songsHard.filter(x => x !== song);
            easyLeft.innerHTML = easyAbsLeft + " / " + songsHard.length;
        } else if (aDifficulty == 5) {
            let random = Math.floor(Math.random() * songsExtreme.length);
            song = songsExtreme[random];
            songsExtreme = songsExtreme.filter(x => x !== song);
            easyLeft.innerHTML = easyAbsLeft + " / " + songsExtreme.length;
        }
        easyScore.innerHTML = easyS * aDifficulty;
        hardScore.innerHTML = hardS * aDifficulty;
        extremeScore.innerHTML = extremeS * aDifficulty;
        if (songsEasy.length == 0 && songsHard.length == 0 && songsExtreme.length == 0) {
            alert("Nincs több zene!");
            return;
        }
        if (song == null) {
            alert("Már nincs hátralévő zene ebben a nehézségben!!");
            return;
        } else {
            if (song[0].indexOf('(ft. ') !== -1) {
                const featSpan = document.createElement("span");
                featSpan.style.fontWeight = "normal";
                let featArtists = song[0].substring(song[0].indexOf('(ft. '));
                songArtist.innerHTML = song[0].split('(ft. ')[0];
                featSpan.appendChild(document.createTextNode(featArtists));
                const div = document.getElementById("songArtist");
                div.appendChild(featSpan);
            } else {
                songArtist.innerHTML = song[0];
            }
            songTitle.innerHTML = song[1];
        }
    }
}

var aDuration = 0;

function playSong(duration) {
    if (song == null) {
        alert("Nincs kiválasztva zene!");
        return;
    } else {
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
    } else {
        aBaseScore = baseScore;
    }
}

function end(state) {
    var score = 0;

    if (aBaseScore == 0 || aDuration == 0) {
        alert("Nincs megadva pontszám!");
        return;
    } else {
        if (state == 0 && song != null && aOsztály != null) {
            score = 0;
        } else if (state == 1 && song != null && aOsztály != null) {
            score = aBaseScore * aDifficulty;
        }
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

    endModal.style.display = "block";
    endArtist.innerHTML = song[0];
    endTitle.innerHTML = song[1];
    document.body.style.overflowY = "hidden";
    window.scrollTo(0, 0);
}

function celebrate() {
    x.src = "songs/" + song[0] + ";" + song[1] + ";" + 15 + ".mp3";
    x.play();
}

function closeModal() {
    endModal.style.display = "none";
    document.body.style.overflowY = "scroll";
}




// window.onload = function() {

//     var file = document.getElementById("thefile");
//     var audio = document.getElementById("audio");

//     file.onchange = function() {
//       var files = this.files;
//       audio.src = URL.createObjectURL(files[0]);
//       audio.load();
//       audio.play();
//       var context = new AudioContext();
//       var src = context.createMediaElementSource(audio);
//       var analyser = context.createAnalyser();

//       var canvas = document.getElementById("canvas");
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       var ctx = canvas.getContext("2d");

//       src.connect(analyser);
//       analyser.connect(context.destination);

//       analyser.fftSize = 256;

//       var bufferLength = analyser.frequencyBinCount;
//       console.log(bufferLength);

//       var dataArray = new Uint8Array(bufferLength);

//       var WIDTH = canvas.width;
//       var HEIGHT = canvas.height;

//       var barWidth = (WIDTH / bufferLength) * 2.5;
//       var barHeight;
//       var x = 0;

//       function renderFrame() {
//         requestAnimationFrame(renderFrame);

//         x = 0;

//         analyser.getByteFrequencyData(dataArray);

//         ctx.fillStyle = "#000";
//         ctx.fillRect(0, 0, WIDTH, HEIGHT);

//         for (var i = 0; i < bufferLength; i++) {
//           barHeight = dataArray[i];

//           var r = barHeight + (25 * (i/bufferLength));
//           var g = 250 * (i/bufferLength);
//           var b = 50;

//           ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
//           ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

//           x += barWidth + 1;
//         }
//       }

//       audio.play();
//       renderFrame();
//     };
//   };