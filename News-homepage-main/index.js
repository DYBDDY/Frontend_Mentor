const overlay = document.getElementById("overlay");
const overlaybtn = document.getElementById("overlaybtn");
const closebtn = document.getElementById("closebtn")
overlaybtn.addEventListener("click", function(){
  overlay.style.width ="100%"
  });

closebtn.addEventListener("click",function(){
  overlay.style.width ="0"
})

