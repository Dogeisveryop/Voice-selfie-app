var speechrecognition = window.webkitSpeechRecognition;
var Recognition = new speechrecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start() ;
}
Recognition.onresult=function (event) {
    console.log(event);
    var content = event.results[0][0].transcript ;
    document.getElementById("textbox").innerHTML= content ;
    console.log(content);
    if(content == "take my selfie"){
        speak();
        console.log("Take my selfie");
    }
}

function speak() {
    synth = window.speechSynthesis ; 
    speech_data = "Taking selfie in 5 seconds" ;
    utterthis = new SpeechSynthesisUtterance(speech_data) ;
    synth.speak(utterthis);
    Webcam.attach(Camera);
    setTimeout(function() {
        clickselfie();
        save();
    },5000);
        }

Webcam.set({
    width : 360,
    height : 250,
    image_format : "png",
    png_quality : 100
});

Camera = document.getElementById("camera") ; 

function clickselfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("taken").innerHTML = '<img id="selfie" src="'+data_uri+'"/>';
    });
}

function save() {
    save_link = document.getElementById("link");
    selfie_save = document.getElementById("selfie").src ;
    save_link.href= selfie_save ;
    save_link.click();
}