var video = "";
var statusweb = "";
var itemInput = "";

function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(380, 240);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 400);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status-label").innerHTML = "Detecting...";
    itemInput = document.getElementById("name-input").value;
}

function modelLoaded(){
    console.log("Model loaded!");
    statusWeb = true;
}