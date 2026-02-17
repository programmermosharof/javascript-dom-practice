// // Prothome input field-ta ke select korlam
// const inputField = document.getElementById('myInput');

// // Input-e event listener add korlam
// inputField.addEventListener('keydown', function(event) {
    
//     // Check korlam press kora key-ta 'Enter' kina
//     if (event.key === 'Enter') {
//         console.log("Submitted");
//     }
// });

const textInput = document.getElementById("textInput");
const count = document.getElementById("count");

textInput.addEventListener("input", function(event) {
  const value = event.target.value;
  count.innerText = value.length;
});

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "m") {
    // event.preventDefault();
    document.body.style.backgroundColor = "lightblue";
  }
});
