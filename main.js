var prediction="Victory"

webcam.set()
({
    width: 350,
    height: 300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera")

webcam.attach("#camera");

function take_snapshort(){
    webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="image_captured" src="'+data_uri+'"/>'
    });
}

console.log("ml5 Verson:", ml5.version);
classiffier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J6iT48cRA//model.json',modelLoaded());

function modelLoaded()
{
    console.log("Model Loaded!");
    speak();
}


