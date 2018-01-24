let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let generateButton = document.getElementById("generateButton");
let infoDiv = document.getElementById("info");

function randomColor() {
    let possibilities = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
	color += possibilities[Math.floor(Math.random() * possibilities.length)];
    }
    console.log(color);
    return color;
}

function drawRandomShape() {
    context.save();
    context.translate(Math.random() * canvas.width, Math.random() * canvas.height);
    context.rotate(Math.random() * (2 * Math.PI));
    context.lineWidth = Math.random() * 15;
    context.strokeStyle = randomColor();
    context.fillStyle = randomColor();
    
    let shapeOption = Math.floor(Math.random() * 4);
    if (shapeOption == 0) {
	let w = Math.random() * 100;
	let h = Math.random() * 100;
	context.fillRect(0, 0, w, h);
	context.strokeRect(0, 0, w, h);
    } else if (shapeOption == 1) {
	let r = Math.random() * 50;
	let theta = Math.random() * (2 * Math.PI);
	context.beginPath();
	context.arc(0, 0, r, 0, theta);
	context.stroke();
	context.beginPath();
	context.arc(0, 0, r, 0, theta);
	context.fill();
    } else if (shapeOption == 2) {
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo((Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400);
	context.stroke();
    } else if (shapeOption == 3) {
	let cp1x = (Math.random() - 0.5) * 400;
	let cp1y = (Math.random() - 0.5) * 400;
	let cp2x = (Math.random() - 0.5) * 400;
	let cp2y = (Math.random() - 0.5) * 400;
	let endX = (Math.random() - 0.5) * 400;
	let endY = (Math.random() - 0.5) * 400;
	context.beginPath();
	context.moveTo(0, 0);
	context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
	context.stroke();
    }
    
    context.restore();
}

function randomDigit() {
    return Math.floor(Math.random() * 10).toString();
}

let dictionary = [
    "existential",
    "dread",
    "inevitable",
    "Nihilism",
    "emotions",
    "trust",
    "sorrow",
    "fear",
    "psychological",
    "philosophical",
    "pondering",
    "subconscious",
    "of",
    "love",
    "the abstract",
    "world",
    "universe",
    "primal",
    "mania",
    "mental",
    "religious",
    "political",
    "depression",
    "about",
    "tragic",
    "story",
    "ancestral",
    "the ego",
    "on",
    "reason",
    "modern",
    "the mind",
    "psyche",
    "expression",
    "minimalist",
    "journey",
    "absolute",
    "perspective",
    "death",
    "technology",
    "reality",
    "virtual",
    "insanity",
    "thoughts"
];

function generateTitle() {
    let numberOfWordsInTitle = 1 + (Math.floor(Math.random() * 4));
    let title = "";
    for (let i = 0; i < numberOfWordsInTitle; i++) {
	title += dictionary[Math.floor(Math.random() * dictionary.length)] + " ";
    }
    return title;
}

generateButton.addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let numberOfShapes = Math.floor(Math.random() * 4);
    for (let i = 0; i < numberOfShapes; i++) {
	drawRandomShape();
    }
    infoDiv.innerHTML = "<b> Title: <b>";
    infoDiv.innerHTML += generateTitle() + "<br>"
    infoDiv.innerHTML += "<b> Price: </b>";
    infoDiv.innerHTML += "$" + Math.round(Math.random() * 100000000) + "." + randomDigit() + randomDigit();
});
