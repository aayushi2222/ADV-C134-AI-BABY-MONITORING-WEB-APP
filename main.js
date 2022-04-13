status = "";
person = [];
song ="alarm-994.wav";
 

function setup(){

    canvas = createCanvas(500, 430);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(500,430);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded );
    document.getElementById("status").innerHTML = "Status = Detecting Person";
}

function draw() {   
    image(video, 0, 0, 500, 430);     
      


         for (i = 0; i < person.length; i++) {  
            if(status != "") 
      
            {               
              objectDetector.detect(video, gotResult);
              document.getElementById("status").innerHTML = "Status : Baby Detected"; 

             }else{
                 document.getElementById("status").innerHTML = "Status : Baby Not Detected"; 
                 song.play();
              }
            } 
            if( array.length < 0 ){
                document.getElementById("status").innerHTML = "Status : Baby Not Detected";
                song.play();  
            }
            
           }    

function modelLoaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);

    }else{console.log(results);}
    person = results;
}
