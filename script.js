
function takeOfTheValue(value){
   
        document.getElementById('calculateField').value +=value 
  
 
}

function ClearField(){
    document.getElementById('calculateField').value = '';  
}

function Calculator(){
    const digit = document.getElementById('calculateField').value;
    const resutl = eval(digit)
    document.getElementById('calculateField').value = resutl;
  
}

