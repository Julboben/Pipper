// var maxchar = 255;
// var i = document.getElementById("textpip");
// var c = document.getElementById("count");
// c.innerHTML = maxchar;

// i.addEventListener("keydown",count);

// function count(e){
//     var len =  i.value.length;
//     if (len >= maxchar){
//        e.preventDefault();
//     } else{
//        c.innerHTML = maxchar - len-1;   
//     }
// }

var maxchar = 255;
var i = document.getElementById("textpip");
var c = document.getElementById("count");
c.innerHTML = 0;

i.addEventListener("keydown",count);

function count(e){
    var len =  i.value.length;
    if (len >= maxchar){
       e.preventDefault();
    } else{
       c.innerHTML = 0 + len+1;   
    }
}