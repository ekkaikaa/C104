Webcam.set({
    width:350, 
    height: 300,
    image_format: 'png',
    png_quality: 90
});

var cam = document.getElementById("camera");
Webcam.attach('#cam');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='capture_image' src='" + data_uri + "'>";
    });
}
console.log('ml5version', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ernollNcn/model.json", modelloaded);

function modelloaded() {
    console.log("teachable machine has been loaded correctly")
}