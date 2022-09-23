com="";
qom="";
lwy=0;
rwy=0;
lwx=0;
rwx=0;


function preload() {
    com= loadSound("Bruno Mars - Count on Me(Lyrics).mp3");
    qom= loadSound("Sarah Jeffery - Queen of Mean (From _Descendants 3_).mp3");

}
 

function setup() {
    canvas= createCanvas(600,400);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
    model= ml5.poseNet(webcam,ml);
    model.on("pose", Gotposes);


}

function ml() {
    console.log("ml");
}


function gotPoses(resultsarray) {
    if (resultsarray.length>0) {
        console.log(resultsarray);
        rwy=resultsarray[0].pose.rightWrist.y;
        lwy=resultsarray[0].pose.leftWrist.y;
        rwx=resultsarray[0].pose.rightWrist.x;
        lwx=resultsarray[0].pose.leftWrist.x;
        rws=resultsarray[0].pose.keypoints[10].score;
        lws=resultsarray[0].pose.keypoints[9].score;
    }
}

function draw() {
    image(webcam,0,0,600,400);
}