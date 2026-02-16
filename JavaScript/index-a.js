const heading = document.getElementById("title");
console.log(heading);
const paras = document.querySelectorAll(".text");

console.log(paras);

const demo = document.getElementById("demo");
// demo.innerHTML += "<strong>Changed</strong>";
// demo.innerText = "New Text";
demo.textContent = "Safe Text";
demo.style.color = "red";
demo.style.backgroundColor = "black";
demo.style.fontSize = "20px";



const link = document.getElementById("link");
link.setAttribute("href", "https://facebook.com");



const msg = document.getElementById("msg");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  msg.textContent = "Logged In";
  msg.classList.add("success");
});

// ====================  HTML DOM - Changing CSS ====================================


