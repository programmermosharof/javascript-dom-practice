document.addEventListener("DOMContentLoaded", function() {
   const el = document.getElementById("title");
   el.style.color = "blue";
   el.textContent = 'Hello'
});


window.onload = function() {
   document.getElementById("loader").style.display = "none";
};

const img = document.querySelector("img")

img.addEventListener("load", function(){
    console.log("Image Loaded");
})
setTimeout(function() {
   alert("Welcome Mosharof");
}, 2000);


let count = 0;

setInterval(function() {
   count++;
   console.log(count);
}, 1000);
