function preload() {}

function setup() {
    canvas = createCanvas(640, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw() {
    image(video, 0, 0, 640, 480);
    
    fill (0, 0, 200);
    stroke(0, 0, 0);
    circle(35, 35, 70);

fill(0, 0, 200);
stroke(0, 0 , 0);
circle(605, 35 , 70);

fill(0, 0, 200);
stroke(0, 0 , 0);
circle(35, 465 , 70);

fill(0, 0, 200);
stroke(0, 0 , 0);
circle(605, 465 , 70);
}

function take_snapshot() {
    save('my-image.png');
}