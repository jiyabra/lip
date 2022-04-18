function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
       
}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        nose_x = results[0].pose.nose.x -10;
        nose_y = results[0].pose.nose.y -10;
        console.log("nose_x = " + nose_x);
        console.log("nose_y = " + nose_y);
    }
}

function draw(){
    image(video, 0 , 0 ,300 ,300);
    circle(nose_x , nose_y , 20);
    fill(255 ,0 , 0);
    stroke(0 , 255 , 0);
    image(clown_nose , nose_x , nose_y , 30 , 30);
}

function take_snapshot(){
    save('MyFilterImage.png');
}