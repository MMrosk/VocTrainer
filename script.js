






function DeleteText() {
    let Input = document.getElementById("input1").value;
    let Input2 = document.getElementById("input2").value;

    

    
    if (Input !== "" && Input2 !== "" ) {
        localStorage.setItem(Input, Input2);
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        console.log(Input,Input2)
        
    } else {
        
        alert("Einer oder beide Eingabewerte sind ungültig oder leer.");
    }
}



function CheckItem(){

    let Input3 = document.getElementById("input3").value;

    if(localStorage.getItem(Input3) !== null){
        let a = localStorage.getItem(Input3)
        alert(a)
        document.getElementById("input3").value = "";
    }
    else{
        alert("item is not existing")
    }
    }



/*while (Input !== "Break"){

    
    
    let Input2 = document.getElementById("input2")
    if( Input2 == "Break")
        { break

        }
    localStorage.setItem(Input, Input2);
     Input = prompt("key")
}*/




/*
let Input3 = prompt("Tippe your key")

if(localStorage.getItem(Input3) !== null){
    let a = localStorage.getItem(Input3)
    alert(a)
}
else{
    alert("item is not existing")
}*/
