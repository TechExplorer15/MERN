/* let circle = document.querySelector(".circle");


window.addEventListener("mousemove", function(det){
    console.log(det);
    
    circle.style.top = det.clientY + "px";
    circle.style.left = det.clientX + "px";
}); */

let plus = document.querySelector("#add");
let remove = document.querySelector("#remove");
let count = document.querySelector("h1");

remove.disabled = true;
let cnt = 0;

plus.addEventListener("click", function(){
    cnt++;
    count.innerText = cnt;
    remove.disabled = false;
})

remove.addEventListener("click", function(){
    cnt--;
    count.innerText = cnt;

    if(cnt == 0){
        remove.disabled = true;
    }
})

