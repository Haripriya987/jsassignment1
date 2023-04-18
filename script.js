
let bulb1 = document.querySelectorAll("img")[0];
let bulb2 = document.querySelectorAll("img")[1];


function on(){
    bulb1.style.display="none";
    bulb2.style.display="inline";
   bulb2.style.width="100px";
}
function off(){
    bulb1.style.display="inline";
    bulb2.style.display="none";
    bulb1.style. border="3px solid palevioletred";
    
}