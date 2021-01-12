let encodeBtn = document.getElementById("button-encode");
let decodeBtn = document.getElementById("button-decode");

let text = document.getElementById("message");
let key = document.getElementById("offset");

encodeBtn.addEventListener("click", () => {
  localStorage.setItem("message", cipherEncode(text.value, parseInt(key.value)))
  window.location = "message.html"
});

decodeBtn.addEventListener("click", () => {
  localStorage.setItem("message", cipherDecode(text.value, parseInt(key.value)))
  window.location = "message.html"
});

function cipherEncode(text,key){
  let encodeArray = [];
  let cipher = "";
 
  for (let i in text){
  encodeArray.push(text[i].charCodeAt());
     if (encodeArray[i] >= 65 && encodeArray[i] <= 90){
       let cipherCount = ((encodeArray[i] - 65 + (key % 26) + 26) % 26) + 65;
       cipher += String.fromCharCode(cipherCount);
     }
     else if (encodeArray[i] >= 97 && encodeArray[i] <= 122){
       let cipherCount = ((encodeArray[i] - 97 + (key % 26) + 26) % 26) + 97;
       cipher += String.fromCharCode(cipherCount);
     } 
     else {
       cipher += String.fromCharCode(encodeArray[i])}
   }
   return cipher
  } 
 
 function cipherDecode(text,key){
  let decodeArray = [];
  let cipher = "";
  let cipherCount = "";
   for (let j in text){ 
   decodeArray.push(text[j].charCodeAt());
     if (decodeArray[j] >= 65 && decodeArray[j] <= 90){
       cipherCount = ((decodeArray[j] - 65 - (key % 26) + 26) % 26) + 65;
       cipher += String.fromCharCode(cipherCount); 
     }
     else if (decodeArray[j] >= 97 && decodeArray[j] <= 122){
       let cipherCount = ((decodeArray[j] - 97 - (key % 26) + 26) % 26) + 97;
       cipher += String.fromCharCode(cipherCount);
     } 
     else {
       cipher += String.fromCharCode(decodeArray[j])}
   }
   return cipher
 }
 
 function printMessage(getFunction) {
   
   document.getElementById("final-message").innerHTML = getFunction(text,key)
 }
 

 