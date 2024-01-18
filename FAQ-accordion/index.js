const acc = document.getElementsByClassName("plus");

for (let i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if(panel.style.display === "block"){
      panel.style.display = "none";
      this.innerHTML = '<img src="./assets/images/icon-plus.svg">'
    } else {
      panel.style.display = "block";
      this.innerHTML = '<img src="./assets/images/icon-minus.svg">'
    }
  })
}

