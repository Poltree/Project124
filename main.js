y=""
x=""
drawCirc=""
drawRect=""
drawSqua=""
function setup(){
canvas = createCanvas(900,600);
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "The system is listening to You Please speak to Draw"
    recognition.start();
}
recognition.onresult = function(event){
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as " + content;
    if(content == "Circle"){
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = "Started drawing Circle"
        drawCirc = "set"

    }
    if(content == "rectangle"){
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = "Started drawing Rectangle"
        drawRect = "set"
        
    }
    if(content == "Square"){
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random()* 600);
        document.getElementById("status").innerHTML = "Started drawing Square"
        drawSqua = "set"
        
    }
}

function draw(){
    if(drawCirc == "set"){
        radius = Math.floor(Math.random()* 200);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is Drawn Hit the draw button to retry"
        drawCirc = ""
    }
    if(drawRect == "set"){
        widt = Math.floor(Math.random()* 300);
        heigh = Math.floor(Math.random()*200);
        rect(x,y,widt,heigh);
        document.getElementById("status").innerHTML = "Rectangle is Drawn Hit the draw button to retry"
        drawRect = ""
    }
    if(drawSqua == "set"){
        widt = Math.floor(Math.random()* 300);
        rect(x,y,widt,widt);
        document.getElementById("status").innerHTML = "Square is Drawn Hit the draw button to retry"
        drawSqua = ""
    }

}