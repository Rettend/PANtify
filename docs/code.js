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
];

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
];

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
];

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


const pokemonCount = 4 - 1; // -1 to start at 0
const x = document.getElementById("audio");
const canvas = document.getElementById("canvas");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const start = document.getElementById("start");
const result = document.getElementById("result");
const endModal = document.getElementById("endModal");
const endArtist = document.getElementById("endArtist");
const endTitle = document.getElementById("endTitle");
const endScore = document.getElementById("endScore");
const endCoverImg = document.getElementById("endCoverImg");
const easyScore = document.getElementById("easyScore");
const hardScore = document.getElementById("hardScore");
const extremeScore = document.getElementById("extremeScore");
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

const allLeft = document.getElementById("allLeft");
const easyLeft = document.getElementById("easyLeft");
const hardLeft = document.getElementById("hardLeft");
const extremeLeft = document.getElementById("extremeLeft");
allLeft.innerHTML = songs.length + " / " + songs.filter(song => song.hasPlayed === false).length;
easyLeft.innerHTML = songs.filter(song => song.streamCount > 800000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount > 800000000).length;
hardLeft.innerHTML = songs.filter(song => song.streamCount <= 800000000 && song.streamCount >= 25000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount <= 800000000 && song.streamCount >= 25000000).length;
extremeLeft.innerHTML = songs.filter(song => song.streamCount < 25000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount < 25000000).length;

const mobile = window.matchMedia("(max-width: 768px)");
mobile.addEventListener("change", musicVisualizer);


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
const easyBaseS = 15;
const hardBaseS = 10;
const extremeBaseS = 5;

// scores after multiplying by difficulty
var easyS = 15;
var hardS = 10;
var extremeS = 5;

var sliderValueR = slider.noUiSlider.get()[0];
var sliderValueL = slider.noUiSlider.get()[1];

slider.noUiSlider.on('update', function (values, handle) {
	sliderValueR = values[0];
	sliderValueL = values[1];

	// calculate a multiplier value which is larger the closer the slider is to the right
	var multiplier1 = Math.abs(1 - sliderValueR / 2000000000) * 15; // right slider multiplier
	var multiplier2 = Math.abs(1 - sliderValueL / 2000000000) * 2; // left slider multiplier

	// average of the two multipliers
	var multiplier = multiplier1 + multiplier2 / 2;

	// normalize the multiplier value to the range 1-5
	var normalizedMultiplier = Math.abs((multiplier - 1) / 4);

	difficultyLabel.innerHTML = normalizedMultiplier.toFixed(2);

	// calculate the scores
	easyS = Math.round(easyBaseS * normalizedMultiplier);
	hardS = Math.round(hardBaseS * normalizedMultiplier);
	extremeS = Math.round(extremeBaseS * normalizedMultiplier);
	easyScore.innerHTML = easyS;
	hardScore.innerHTML = hardS;
	extremeScore.innerHTML = extremeS;
});


function rPokemon(lastrandom) {
	let random = Math.floor(Math.random() * pokemonCount);
	if (random >= lastrandom) {
		random += 1;
	}
	return random;
}

function newSong() {
	aSongs = songs.filter(i => i.streamCount >= sliderValueR && i.streamCount <= sliderValueL && i.hasPlayed == false);
	var random = Math.floor(Math.random() * aSongs.length);
	song = aSongs[random];
	if (aSongs.length == 0) {
		alertShow("Nincs több zene! Válassz más nehézséget vagy töltsd újra az oldalt!");
	} else {
		artistWFeat(songArtist);
		songTitle.innerHTML = song.song;
		song.hasPlayed = true;

		allLeft.innerHTML = songs.length + " / " + songs.filter(song => song.hasPlayed === false).length;
		easyLeft.innerHTML = songs.filter(song => song.streamCount > 800000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount > 800000000).length;
		hardLeft.innerHTML = songs.filter(song => song.streamCount <= 800000000 && song.streamCount >= 25000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount <= 800000000 && song.streamCount >= 25000000).length;
		extremeLeft.innerHTML = songs.filter(song => song.streamCount < 25000000).length + " / " + songs.filter(song => song.hasPlayed === false && song.streamCount < 25000000).length;
		
		var randomPokemon = null;
		if (poke1.src == "pokemon%20images/pokemon%20question%20mark.webp") {
			randomPokemon = rPokemon(1);
		} else {
			randomPokemon = rPokemon(poke1.src.substring(poke1.src.indexOf("pokemon%20images/") + 17, poke1.src.lastIndexOf("-1.webp")));
		}
		poke1mobile.src = poke1.src = "pokemon images/" + randomPokemon + "-1.webp";
		poke2mobile.src = poke2.src = "pokemon images/" + randomPokemon + "-2.webp";
		poke3mobile.src = poke3.src = "pokemon images/" + randomPokemon + "-3.webp";
	}
}

function artistWFeat(sourceDiv) {
	if (song.artist.indexOf('(ft. ') !== -1) {
		const featSpan = document.createElement("span");
		featSpan.style.fontWeight = "normal";
		let featArtists = song.artist.substring(song.artist.indexOf('(ft. '));
		sourceDiv.innerHTML = song.artist.split('(ft. ')[0];
		featSpan.appendChild(document.createTextNode(featArtists));
		sourceDiv.appendChild(featSpan);
	} else {
		sourceDiv.innerHTML = song.artist;
	}
}


var aDuration = 0; // duration = base score in reverse order btw

function playSong(duration) {
	if (song == null) {
		alertShow("Nincs kiválasztva zene! Kattints a START gombra!");
	} else {
		aDuration = duration;
		if (duration == 5) {
			showMusicPlayer("easy");
		}
		else if (duration == 10) {
			showMusicPlayer("hard");
		}
		else if (duration == 15) {
			showMusicPlayer("extreme");
		}

		x.src = "songs/" + song.artist + ";" + song.song + ";" + duration + ".mp3";
		x.play();
	}
}


function showMusicPlayer(mode) {
	let modes = ["easy", "hard", "extreme"];
	modes.splice(modes.indexOf(mode), 1);
	window[modes[0] + "ScoreFlex"].style.display = "none";
	window[modes[1] + "ScoreFlex"].style.display = "none";
	start.onclick = "";
	start.classList.add("bg-rose-600/70");
	start.classList.remove("bg-rose-600");
	arrow1Flex.style.display = "none";
	arrow2Flex.style.display = "none";
	window[mode + "ScoreFlex"].classList.add("w-full");
	window[mode + "ScoreFlex"].classList.remove("md:w-1/5");
	window[mode + "ScoreFlex"].classList.remove("w-1/3");
	window[mode + "BtnBox"].classList.remove("md:w-64");
	window[mode + "BtnBox"].classList.add("place-items-start");
	window[mode + "Text"].classList.add("md:mx-0");
	window[mode + "Icon"].classList.add("md:mx-0");
	window[mode + "ScoreBox"].classList.remove("md:w-64");
	window[mode + "Text"].classList.add("md:ml-10");
	window[mode + "Icon"].classList.add("md:ml-10");
	window[mode + "ScoreBox"].classList.add("md:pl-16");
	window[mode + "ScoreBox"].classList.add("md:w-full");
	window[mode + "ScoreBox"].classList.add("md:text-left");
	if (mode == "easy") {
		poke1.classList.add("ml-52");
		poke1.classList.remove("ml-40");
	} else if (mode == "hard") {
		poke2.classList.add("ml-52");
		poke2.classList.remove("ml-32");

		window[mode + "BtnBox"].parentElement.classList.remove("md:mr-56");
	} else if (mode == "extreme") {
		poke3.classList.add("ml-52");
		poke3.classList.remove("right-0");
	}
	musicVisualizer();
	setTimeout(function () {
		window[modes[0] + "ScoreFlex"].style.display = "block";
		window[modes[1] + "ScoreFlex"].style.display = "block";
		start.onclick = newSong;
		start.classList.add("bg-rose-600");
		start.classList.remove("bg-rose-600/70");
		canvas.style.display = "none";
		if (mobile.matches) {
			arrow1Flex.style.display = "none";
			arrow2Flex.style.display = "none";
		} else {
			arrow1Flex.style.display = "block";
			arrow2Flex.style.display = "block";
		}
		window[mode + "ScoreFlex"].classList.remove("w-full");
		window[mode + "ScoreFlex"].classList.add("md:w-1/5");
		window[mode + "ScoreFlex"].classList.add("w-1/3");
		window[mode + "BtnBox"].classList.add("md:w-64");
		window[mode + "BtnBox"].classList.remove("place-items-start");
		window[mode + "Text"].classList.remove("md:mx-0");
		window[mode + "Icon"].classList.remove("md:mx-0");
		window[mode + "ScoreBox"].classList.add("md:w-64");
		window[mode + "Text"].classList.remove("md:ml-10");
		window[mode + "Icon"].classList.remove("md:ml-10");
		window[mode + "ScoreBox"].classList.remove("md:pl-16");
		window[mode + "ScoreBox"].classList.remove("md:w-full");
		window[mode + "ScoreBox"].classList.remove("md:text-left");
		if (mode == "easy") {
			poke1.classList.remove("ml-52");
			poke1.classList.add("ml-40");
		} else if (mode == "hard") {
			poke2.classList.remove("ml-52");
			poke2.classList.add("ml-32");

			window[mode + "BtnBox"].parentElement.classList.add("md:mr-56");
		} else if (mode == "extreme") {
			poke3.classList.remove("ml-52");
			poke3.classList.add("right-0");
		}
	}, (aDuration + 1.5) * 1000);
}

function end() {
	if (aDuration == 0 || song == null) {
		alertShow("Nem volt lejátszva zene!");
	} else {
		if (aDuration == 5) {
			endScore.innerHTML = easyS;
			x.src = "songs/" + song.artist + ";" + song.song + ";15.mp3";
			x.play();
		} else if (aDuration == 10) {
			endScore.innerHTML = hardS;
			x.src = "songs/" + song.artist + ";" + song.song + ";15.mp3";
			x.play();
		} else if (aDuration == 15) {
			endScore.innerHTML = extremeS;
		}

		endModal.style.display = "block";
		artistWFeat(endArtist);
		endTitle.innerHTML = song.song;
		endCoverImg.src = song.coverImage;
		document.body.style.overflowY = "hidden";
		window.scrollTo(0, 0);
		song = null;
	}
}

function closeModal() {
	endModal.style.display = "none";
	document.body.style.overflowY = "scroll";
}

function alertShow(text) {
	alertText.innerHTML = text;
	alertBox.style.display = "block";
	return;
}


const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
source = audioCtx.createMediaElementSource(x);
source.connect(analyser);
analyser.connect(audioCtx.destination);

function musicVisualizer() {
	if (mobile.matches) {
		canvas.style.display = "none";
	} else {
		canvas.style.display = "block";
	}

	analyser.fftSize = 256;
	const bufferLength = analyser.frequencyBinCount;
	const dataArray = new Uint8Array(bufferLength);

	const HEIGHT = canvas.height;
	const WIDTH = canvas.width;
	var canvasCtx = canvas.getContext("2d");

	canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

	function draw() {
		drawVisual = requestAnimationFrame(draw);

		analyser.getByteFrequencyData(dataArray);

		canvasCtx.fillStyle = 'rgb(0, 0, 0)';
		canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

		const barWidth = (WIDTH / bufferLength) * 2.5;
		let barHeight;
		var a = 0;

		for (let i = 0; i < bufferLength; i++) {
			barHeight = dataArray[i] * 2;

			canvasCtx.fillStyle = 'rgb(' + barHeight + ',0,0)';
			canvasCtx.fillRect(a, HEIGHT - barHeight / 2, barWidth, barHeight);

			a += barWidth + 1;
		}
	}
	draw();
}

// This works, but buggy when you spam the button (already ongoing Timeout)
var observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutationRecord) {
		setTimeout(() => { if (alertBox.style.display == "block") alertBox.style.display = "none"; }, 10000);
	});
});

observer.observe(alertBox, { attributes: true, attributeFilter: ['style'] });