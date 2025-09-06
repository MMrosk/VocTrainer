



let text = document.getElementById("text")
const value = localStorage.getItem(text.textContent);
let text4 = document.getElementById("text2")





function getRandomLocalStorageKey() {
    const keys = Object.keys(localStorage);
    if (keys.length === 0) return null; 

    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];


   
}



function PlaceTheShit(){

    const randomKey = getRandomLocalStorageKey()
    text.textContent = randomKey;

    
    let randomKey2 = localStorage.getItem(randomKey) 
    console.log(randomKey2);
}


PlaceTheShit()




function nextVocab(){
    text4.textContent = ""
    document.getElementById("vocInput").value = ""
    PlaceTheShit()
}

let Nummer =  localStorage.getItem("punkte") ? parseInt(localStorage.getItem("punkte")) : 0;

document.getElementById("punktzahl").textContent = Nummer;

function punktestand(){

    Nummer += 1
    document.getElementById("punktzahl").textContent = Nummer;
    localStorage.setItem("punkte", Nummer);
}


/*unction enter(){

let VocInput = document.getElementById("vocInput");
let userInput = VocInput.value
let correctValue = localStorage.getItem(text.textContent)
let TextValue = document.getElementById("text").value
 

console.log("VocInput:", VocInput);
console.log("Eingabe:", userInput);
console.log("Speicherwert:", correctValue);

if (userInput === correctValue) {
    text4.textContent = "Richtig";
    punktestand()
    nextVocab()
    
}
else if(TextValue == "punkte"){
    nextVocab()
}
else if(userInput === 0){
    nextVocab()
}
else if (correctValue !== null) {
    console.log("Speicherwert gefunden, aber der Vergleich war falsch.");
    text4.textContent = "Falsch";
} else {
    text4.textContent = "Falsch";
}
}



    //let Vocinput = document.getElementById("vocInput");
 //document.addEventListener("DOMContentLoaded", function (){
   // Vocinput.addEventListener("keydown", function (event)  {
     
   //     if( event.key === "Enter"){
         //   enter()
     //  }
       
    //}
    //)
    //}
    //)

    

*/  
   

function überprüfung() {
    let VocInput = document.getElementById("vocInput");
    let userInput = VocInput.value
    let correctValue = localStorage.getItem(text.textContent)
    let TextValue = document.getElementById("text").value
     

    console.log("VocInput:", VocInput);
    console.log("Eingabe:", userInput);
    console.log("Speicherwert:", correctValue);

   // document.addEventListener("DOMContentLoaded", function (){
       // VocInput.addEventListener("keydown", function (event)  {
            if (userInput === correctValue) {
                text4.textContent = "Richtig";
                punktestand()
                nextVocab()
                
            }
           // else if(  event.key === "Enter"){
              //  text4.textContent = ""
            //    document.getElementById("vocInput").value = ""
           //     PlaceTheShit()
           // }
            else if(TextValue == "punkte"){
                nextVocab()
            }
            else if(userInput === 0){
                nextVocab()
            }
            else if (correctValue !== null) {
                console.log("Speicherwert gefunden, aber der Vergleich war falsch.");
                text4.textContent = "Falsch";
            } else {
                text4.textContent = "Falsch";
            }
}//)
//})

//}



/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="script.js"></script>
    


          
</head>
<body>
    
        
    
  
      

    <input id="input1" type="text" placeholder=" Give me your 2 vocab">
    <input id="input2" type="text" placeholder=" Give me your 1 vocab">
    <button type="button" id="button" onclick=DeleteText() > Hinzufügen</button>


    <input  id="input3" type="Type your Key">
    <button id="button2"  onclick=CheckItem()>Einsehen</button>
    <Button ><a href="second.html">voc test</a></Button>
</body>
</html>*/