console.log("js loaded")
//0,1,2
let images = [
    "./image/SS1.png",
    "./image/SS2.png",
    "./image/SS3.png",
    "./image/SS4.png",
    "./image/SS5.png"
];

//replace the 1st image with the 2nd image
//replace the 2nd image with the 3rd image
//when we run out of image, start back at the 1st

const slideShowImage = document.getElementById("SlideShowImage");

const prevButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    updateimage("previous");
});

prevButton.addEventListener("click", () => {
    updateimage("next");
});

//Use set intervals to update the image  every 3 second
let currentImageindex = 0;

//
function updateimage(direction){
    if(direction == "next"){
        currentImageindex++;
    }else if(direction == "previous"){
        currentImageindex--;
    }else{
        currentImageindex++;
    }

    if(currentImageindex >= images.length){
        currentImageindex = 0;
    }

    if(currentImageindex < 0){
        currentImageindex > images.length - 1;
    }

    slideShowImage.src = images[currentImageindex];
}

setInterval(updateimage, 3000)