const btn1 = document.getElementById("inp1");
const btn2 = document.getElementById("inp2");
const btn3 = document.getElementById("inp3");

//Iframe
const frame1 = document.querySelector(".iframe-1");
const frame2 = document.querySelector(".iframe-2");
const frame3 = document.querySelector(".iframe-3");

btn1.addEventListener("click", function(event){
    frame1.style.display = "block";
    frame2.style.display = "none";
    frame3.style.display = "none";
});

btn2.addEventListener("click", function(event){
    frame2.style.display = "block";
    frame1.style.display = "none";
    frame3.style.display = "none";
});

btn3.addEventListener("click", function(event){
    frame3.style.display = "block";
    frame2.style.display = "none";
    frame1.style.display = "none";
});