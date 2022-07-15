// // Window leave confirmation
// window.onbeforeunload = function (e) {
//     return "";
// };

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

const songs = [
	{
		"artist": "ACDC",
		"song": "Highway to Hell",
		"text": ["ACDC1", "ACDC2", "ACDC3"],
		"streamCount": 1010569617,
		"hasPlayed": false,
		"coverImage": "cover images/ACDC;Highway to Hell.jpg"
	}, {
		"artist": "Avicii",
		"song": "The nights",
		"text": ["Avicii1", "Avicii2", "Avicii3"],
		"streamCount": 1116498715,
		"hasPlayed": false,
		"coverImage": "cover images/Avicii;The nights.png"
	}, {
		"artist": "Hanson",
		"song": "MMMBop",
		"text": ["Hanson1", "Hanson2", "Hanson3"],
		"streamCount": 131552367,
		"hasPlayed": false,
		"coverImage": "cover images/Hanson;MMMBop.jpg"
	}, {
		"artist": "Harley Poe",
		"song": "Eat Shit and Die",
		"text": ["Harley Poe1", "Harley Poe2", "Harley Poe3"],
		"streamCount": 2328919,
		"hasPlayed": false,
		"coverImage": "cover images/Harley Poe;Eat Shit and Die.jpg"
	}, {
		"artist": "IU (ft. SUGA)",
		"song": "eight",
		"text": ["IU (ft. SUGA)1", "IU (ft. SUGA)2", "IU (ft. SUGA)3"],
		"streamCount": 208700169,
		"hasPlayed": false,
		"coverImage": "cover images/IU (ft. SUGA);eight.jpg"
	}
];


const pokemonCount = 4 - 1; // start with 0
const x = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const result = document.getElementById("result");
const endModal = document.getElementById("endModal");
const endArtits = document.getElementById("endArtits");
const endTitle = document.getElementById("endTitle");
const easyScore = document.getElementById("easyScore");
const hardScore = document.getElementById("hardScore");
const extremeScore = document.getElementById("extremeScore");
const easyAbsLeft = songsEasy.length;
const hardAbsLeft = songsHard.length;
const extremeAbsLeft = songsExtreme.length;
const poke1 = document.getElementById("poke1");
const poke2 = document.getElementById("poke2");
const poke3 = document.getElementById("poke3");
const poke1mobile = document.getElementById("poke1mobile");
const poke2mobile = document.getElementById("poke2mobile");
const poke3mobile = document.getElementById("poke3mobile");
const alertText = document.getElementById("alertText");
const alertBox = document.getElementById("alertBox");
const easyScoreFlex = document.getElementById("easyScoreFlex");
const hardScoreFlex = document.getElementById("hardScoreFlex");
const extremeScoreFlex = document.getElementById("extremeScoreFlex");
const easyBtnBox = document.getElementById("easyBtnBox");
const hardBtnBox = document.getElementById("hardBtnBox");
const extremeBtnBox = document.getElementById("extremeBtnBox");
const easyScoreBox = document.getElementById("easyScoreBox");
const hardScoreBox = document.getElementById("hardScoreBox");
const extremeScoreBox = document.getElementById("extremeScoreBox");
const arrow1Flex = document.getElementById("arrow1Flex");
const arrow2Flex = document.getElementById("arrow2Flex");
const easyText = document.getElementById("easyText");
const hardText = document.getElementById("hardText");
const extremeText = document.getElementById("extremeText");
const easyIcon = document.getElementById("easyIcon");
const hardIcon = document.getElementById("hardIcon");
const extremeIcon = document.getElementById("extremeIcon");

const easyLeft = document.getElementById("easyLeft");
easyLeft.innerHTML = easyAbsLeft + " / " + songsEasy.length;
const hardLeft = document.getElementById("hardLeft");
hardLeft.innerHTML = hardAbsLeft + " / " + songsHard.length;
const extremeLeft = document.getElementById("extremeLeft");
extremeLeft.innerHTML = extremeAbsLeft + " / " + songsExtreme.length;


var abrSymbols = ["", "k", "M", "B", "T"];
function abr(number) {

	// what tier? (determines symbol)
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


var aSongs = null;
var song = null;
// base scores
let easyS = 15;
let hardS = 10;
let extremeS = 5;

slider.noUiSlider.on('update', function (values, handle) {
	// calculate a multiplier value which is larger the closer the slider is to the right
	var multiplier1 = Math.abs(1 - values[0] / 2000000000) * 15; // right slider multiplier
	var multiplier2 = Math.abs(1 - values[1] / 2000000000) * 2; // left slider multiplier

	// average of the two multipliers
	var multiplier = multiplier1 + multiplier2 / 2;

	// normalize the multiplier value to the range 1-5
	var normalizedMultiplier = Math.abs((multiplier - 1) / 4);

	difficultyLabel.innerHTML = normalizedMultiplier.toFixed(2);

	// get the songs based on the slider value
	aSongs = songs.filter(i => i.streamCount >= values[0] && i.streamCount <= values[1] && i.hasPlayed == false);


	easyScore.innerHTML = Math.round(easyS * normalizedMultiplier);
	hardScore.innerHTML = Math.round(hardS * normalizedMultiplier);
	extremeScore.innerHTML = Math.round(extremeS * normalizedMultiplier);
});


function rPokemon(lastrandom) {
	let random = Math.floor(Math.random() * pokemonCount);
	if (random >= lastrandom) {
		random += 1;
	}
	return random;
}

function newSong() {
	var random = Math.floor(Math.random() * aSongs.length);
	song = aSongs[random];
	song.hasPlayed = true;

	easyLeft.innerHTML = easyAbsLeft + " / " + songsExtreme.length;

	if (poke1.src == "pokemon%20images/pokemon%20question%20mark.webp") {
		var randomPokemon = rPokemon(1);
	} else {
		var randomPokemon = rPokemon(poke1.src.substring(poke1.src.indexOf("pokemon%20images/") + 17, poke1.src.lastIndexOf("-1.webp")));
	}
	poke1mobile.src = poke1.src = "pokemon images/" + randomPokemon + "-1.webp";
	poke2mobile.src = poke2.src = "pokemon images/" + randomPokemon + "-2.webp";
	poke3mobile.src = poke3.src = "pokemon images/" + randomPokemon + "-3.webp";

	if (aSongs.length == 0) {
		alertText.innerHTML = "Nincs több zene!";
		alertBox.style.display = "block";
		return;
	} else {
		if (song.artist.indexOf('(ft. ') !== -1) {
			const featSpan = document.createElement("span");
			featSpan.style.fontWeight = "normal";
			let featArtists = song.artist.substring(song.artist.indexOf('(ft. '));
			songArtist.innerHTML = song.artist.split('(ft. ')[0];
			featSpan.appendChild(document.createTextNode(featArtists));
			const div = document.getElementById("songArtist");
			div.appendChild(featSpan);
		} else {
			songArtist.innerHTML = song.artist;
		}
		songTitle.innerHTML = song.song;
	}
}

var aDuration = 0; // duration = base score btw

function playSong(duration) {
	if (duration = 5) {
		easyScoreFlex.classList.add("w-full");
		easyScoreFlex.classList.remove("md:w-1/5");
		easyScoreFlex.classList.remove("w-1/3");
		hardScoreFlex.style.display = "none";
		extremeScoreFlex.style.display = "none";
		arrow1Flex.style.display = "none";
		arrow2Flex.style.display = "none";
		easyBtnBox.classList.remove("md:w-64");
		easyBtnBox.classList.add("place-items-start");
		easyText.classList.remove("mx-auto");
		easyIcon.classList.remove("mx-auto");
	} 
	else if (duration = 10) {
		
	}
	else if (duration = 15) {

	}



	if (song == null) {
		alertText.innerHTML = "Nincs kiválasztva zene! Kattints a START gombra!";
		alertBox.style.display = "block";
		return;
	} else {
		aDuration = duration;
		x.src = "songs/" + song.artist + ";" + song.song + ";" + duration + ".mp3";
		x.play();
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


var observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutationRecord) {
		setTimeout(() => { if (alertBox.style.display == "block") alertBox.style.display = "none"; }, 10000);
	});
});

observer.observe(alertBox, { attributes: true, attributeFilter: ['style'] });