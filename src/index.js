var canvas = document.getElementById("loadingscreen");
var ctx = canvas.getContext("2d");

var color = {
    orangeLight: "rgb(227,110,0)",
    orangeDarker: "rgb(135,69,8)",
    orangeLigher: "rgb(187,124,73)",
    white: "rgb(255,255,255)",
    black: "rgb(0,0,0)",
    gray: "rgb(66,66,66)",
    brown: "rgb(15,4,0)",
    bg: "rgba(0,0,0,0.9)",
    blue: "rgb(0,0,255)"
}

var debug = function (status) {
    ctx.globalCompositeOperation = "destination-over";

    if (status === "off") return;
    // tmp lines 
    // oś Y
    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 600);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // // oś X
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(600, 300);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.stroke();
}

var drawLinesArray = function () {
    ctx.save();
    ctx.strokeStyle = color.orangeLigher;
    ctx.lineWidth = 1;

    // ctx.moveTo(300 + 20, 150 + 20);
    // ctx.lineTo(300 + 20, 100 + 20);

    // ctx.moveTo(400 + 40, 150 + 40);
    // ctx.lineTo(450 + 40, 150 + 40);

    for (var i = 0; i < 100; i ++) {
        ctx.moveTo(300 + i, 150 + i);
        ctx.lineTo(300 + i / 0.85, 100 + i);
        i = i + 5;
    }

    ctx.stroke();
    ctx.restore();
}

var drawArrows = function () {
    // left center
    ctx.strokeStyle = color.gray;
    ctx.fillStyle = color.gray;

    ctx.save();
    
    ctx.scale(1, 1);
    ctx.beginPath();
    ctx.moveTo(130, 295);
    ctx.lineTo(130, 305);
    ctx.lineTo(125, 300);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.restore();

    // // top center
    ctx.beginPath();
    ctx.moveTo(295, 130);
    ctx.lineTo(305, 130);
    ctx.lineTo(300, 125)
    ctx.stroke();
    ctx.fill();

    // // right center
    ctx.beginPath();
    ctx.moveTo(470, 295);
    ctx.lineTo(470, 305);
    ctx.lineTo(475, 300);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    
    // // bottom center
    ctx.beginPath();
    ctx.moveTo(295, 470);
    ctx.lineTo(305, 470);
    ctx.lineTo(300, 475);
    ctx.closePath();
    
    ctx.stroke();
    ctx.fill();

};

var drawArc = function () {
    // 1
    ctx.beginPath();
    ctx.arc(300, 300, 150, 0, 2 * Math.PI);
    ctx.strokeStyle = color.brown;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
    
    // 2
    ctx.beginPath();
    ctx.arc(300, 300, 135, 0, 2 * Math.PI);
    ctx.strokeStyle = color.orangeLight;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
    
    // 3a
    ctx.beginPath();
    ctx.arc(300, 300, 110, - Math.PI * 0.22, Math.PI * 0.485);
    ctx.strokeStyle = color.brown;
    ctx.lineWidth = 15;
    ctx.stroke();
    ctx.closePath();
    
    // // 3b
    ctx.beginPath();
    ctx.arc(300, 300, 110, Math.PI * 0.515, Math.PI * 1.22);
    ctx.strokeStyle = color.brown;
    ctx.lineWidth = 15;
    ctx.stroke();
    ctx.closePath();
    
    // 3c
    ctx.beginPath();
    ctx.arc(300, 300, 110, Math.PI * 1.25, Math.PI * 1.75);
    ctx.strokeStyle = color.brown;
    ctx.lineWidth = 15;
    ctx.stroke();
    ctx.closePath();
}


var draw = function () {

    debug("off");

    // drawArrows();

    drawLinesArray();

    // drawArc();
    

}

document.body.onload = function () {
    draw();
}

canvas.style.background = color.bg;