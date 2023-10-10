// var myHeaders = new Headers();
// myHeaders.append("apikey", "yzgJGHn4HlUPEr1xkYJcm6O0RD4RQ9Fb");

// var raw = "{body}";

// var requestOptions = {
//   method: 'POST',
//   redirect: 'follow',
//   headers: myHeaders,
//   body: raw
// };

const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")
const imageTag = document.querySelector("img")

const url = "https://api.nasa.gov/planetary/apod"
const count = 50
const apiKey = "api_key=XbbMiE5SWOqCyZFy9UEHRjZfuk8nlcQFltPhvmoD"
const images = []
let index = 0

let description = document.getElementById('description')

rightBtn.addEventListener("click", handleRightClick)
leftBtn.addEventListener("click", handleLeftClick)

fetch(`${url}?count=${count}&${apiKey}`)
  .then(response => response.json())
  .then(result => {
    images.push(...result)
    console.log(images)
    displayImages()
  })
  .catch(error => console.log('error', error));


function displayImages(){
    imageTag.src = images[index].url
    description.innerText = images[index].explanation
    // const slider = document.querySelector('.slider'); 
    // const slides = slider.querySelectorAll('li'); 

    // // Store the total number of images 
    // const slideCount = slides.length; 
    // let activeSlide = 0; 

    // // To change the images dynamically every 
    // // 5 Secs, use SetInterval() method 
    // setInterval(() => { 
    //     slides[activeSlide].classList.remove('active'); 
    //     activeSlide++; 
    //     if (activeSlide === slideCount) { 
    //         activeSlide = 0; 
    //     } 
    //     slides[activeSlide].classList.add('active'); 
    // }, 5000);
}

function handleRightClick(){
    if (index === images.length - 1) {
        index = 0
        displayImages()
    } else {
        index++
        console.log(index, images.length)
        displayImages()
    }
}

function handleLeftClick(){
    if (index === 0) {
        index = images.length - 1
        displayImages()
    } else {
        index--
        console.log(index, images.length)
        displayImages()
    }
}