const numbers = document.querySelectorAll(".number");
const functionbtn = document.querySelectorAll(".fun");
const inputwindow = document.getElementById("inputwindow");
const deletebtn = document.getElementById("delete");
const resetbtn = document.getElementById("reset");
const equalbtn = document.getElementById("equal");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    const span = button.querySelector("span");
    const value = span.innerText;
    inputwindow.value += value;
  });
});

functionbtn.forEach((button) => {
  button.addEventListener("click", () => {
    const span = button.querySelector("span");
    const value = span.innerText;
    inputwindow.value += value;
  });
});

deletebtn.addEventListener("click", () => {
  inputwindow.value = inputwindow.value.slice(0, -1);
});

resetbtn.addEventListener("click", () => {
  inputwindow.value = "";
});


equalbtn.addEventListener("click", () => {
  let expression = inputwindow.value;
  if (expression) {
    try {
      expression = expression.replace(/x/g, "*");

      if (/^[\d+\-*/.() ]+$/.test(expression)) {
        const result = eval(expression);
        inputwindow.value = result;
      } else {
        inputwindow.value = "Invalid Input";
      }
    } catch (error) {
      inputwindow.value = "Error";
    }
  }
});

const body = document.body;
const calctitle = document.querySelector(".top h1");
const theme = document.querySelector(".themetitle h2");
const radiobtn1 = document.getElementById("option1");
const radiobtn2 = document.getElementById("option2");
const radiobtn3 = document.getElementById("option3");
const switchnumbers = document.querySelectorAll(".switchnum");
const keybg = document.querySelector(".cacbutton");
const inputwindowbg = document.querySelector(".inputnum");
const switchbuttonbg = document.querySelector(".btnbg");
const numberButtons = document.querySelectorAll(".number");
const funButtons = document.querySelectorAll(".fun");
const deleteButton = document.querySelector(".delete");
const resetButton = document.querySelector(".reset");
const equalButton = document.querySelector(".equal");

radiobtn1.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(222, 26%, 31%)";
  switchbuttonbg.style.backgroundColor = "hsl(223, 31%, 20%)";
  keybg.style.backgroundColor = "hsl(223, 31%, 20%)";
  inputwindowbg.style.backgroundColor = "hsl(224, 36%, 15%)";
  inputwindowbg.style.color = "hsl(0, 0%, 100%)";
  switchnumbers.forEach((numbers) => {
    numbers.style.color = "hsl(0, 0%, 100%)";
  });
  calctitle.style.color = "hsl(0, 0%, 100%)";
  theme.style.color = "hsl(0, 0%, 100%)";

  numberButtons.forEach((button) => {
    button.style.color = "hsl(198, 20%, 13%)";
    button.style.backgroundColor = "hsl(30, 25%, 89%)";
    button.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
  });
  numberButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "hsl(0, 0%, 100%)";
    });
    button.addEventListener("mouseout", () => {
      button.style.color = "hsl(198, 20%, 13%)";
      button.style.backgroundColor = "hsl(30, 25%, 89%)"
      button.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
    });
  });

  funButtons.forEach((button) => {
    button.style.color = "hsl(198, 20%, 13%)";
    button.style.backgroundColor = "hsl(30, 25%, 89%)";
    button.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
  });
  funButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "hsl(0, 0%, 100%)";
    });
    button.addEventListener("mouseout", () => {
      button.style.color = "hsl(198, 20%, 13%)";
      button.style.backgroundColor = "hsl(30, 25%, 89%)"
      button.style.boxShadow ="0px 4px 0px 0px hsl(28, 16%, 65%)";
    });
  });

  deleteButton.style.backgroundColor = "hsl(225, 21%, 49%)";
  deleteButton.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
  deleteButton.addEventListener("mouseover", () => {
    deleteButton.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  deleteButton.addEventListener("mouseout", () => {
    deleteButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    deleteButton.style.boxShadow ="0px 4px 0px 0px hsl(224, 28%, 35%)";
  });
  

  resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
  resetButton.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
  resetButton.addEventListener("mouseover", () => {
    resetButton.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  resetButton.addEventListener("mouseout", () => {
    resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetButton.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
  });
  

  resetButton.addEventListener("mouseover", () => {
    resetButton.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  resetButton.addEventListener("mouseout", () => {
    resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetButton.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";
  });

  equalButton.style.backgroundColor = "hsl(6, 63%, 50%)";
  equalButton.style.boxShadow = "0px 4px 0px 0px hsl(6, 70%, 34%)";
  equalButton.addEventListener("mouseover", () => {
    equalButton.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  equalButton.addEventListener("mouseout", () => {
    equalButton.style.backgroundColor = "hsl(6, 63%, 50%)";
    equalButton.style.boxShadow = "0px 4px 0px 0px hsl(6, 70%, 34%)";
  });
});

radiobtn2.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(0, 0%, 93%)";
  switchbuttonbg.style.backgroundColor = "hsl(0, 5%, 81%)";
  keybg.style.backgroundColor = "hsl(0, 5%, 81%)";
  inputwindowbg.style.backgroundColor = "hsl(0, 0%, 100%)";
  inputwindowbg.style.color = "hsl(60, 10%, 19%)";
  switchnumbers.forEach((numbers) => {
    numbers.style.color = "hsl(60, 10%, 19%)";
  });
  calctitle.style.color = "hsl(60, 10%, 19%)";
  theme.style.color = "hsl(60, 10%, 19%)";

  numberButtons.forEach((button) => {
    button.style.color = "hsl(198, 20%, 13%)";
    button.style.backgroundColor = "hsl(45, 7%, 89%)";
    button.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
  });
  numberButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "hsl(0, 0%, 100%)";
    });
    button.addEventListener("mouseout", () => {
      button.style.color = "hsl(198, 20%, 13%)";
      button.style.backgroundColor = "hsl(45, 7%, 89%)"
      button.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
    });
  });

  funButtons.forEach((button) => {
    button.style.color = "hsl(198, 20%, 13%)";
    button.style.backgroundColor = "hsl(45, 7%, 89%)";
    button.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
  });
  funButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "hsl(0, 0%, 100%)";
    });
    button.addEventListener("mouseout", () => {
      button.style.color = "hsl(198, 20%, 13%)";
      button.style.backgroundColor = "hsl(45, 7%, 89%)"
      button.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
    });
  });

  deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  deleteButton.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
  deleteButton.addEventListener("mouseover", () => {
    deleteButton.style.color = "black";
    deleteButton.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  deleteButton.addEventListener("mouseout", () => {
    deleteButton.style.color = "hsl(0, 0%, 100%)";
    deleteButton.style.backgroundColor = "hsl(185, 42%, 37%)";
    deleteButton.style.boxShadow ="0px 4px 0px 0px hsl(185, 58%, 25%)";
  });

  resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
  resetButton.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
  resetButton.addEventListener("mouseover", () => {
    resetButton.style.color = "black";
    resetButton.style.backgroundColor = "hsl(0, 0%, 100%)";
  });
  resetButton.addEventListener("mouseout", () => {
    resetButton.style.color = "hsl(0, 0%, 100%)";
    resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetButton.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";
  });

  equalButton.style.backgroundColor = "hsl(25, 98%, 40%)";
  equalButton.style.boxShadow = "0px 4px 0px 0px hsl(25, 99%, 27%)";
  equalButton.addEventListener("mouseover", () => {
    equalButton.style.color="black";
    equalButton.style.backgroundColor = "hsl(0, 0%, 100%)";
    equalButton.style.boxShadow = "0px 4px 0px 0px hsl(25, 99%, 27%)";
  });
  equalButton.addEventListener("mouseout", () => {
    equalButton.style.color="hsl(0, 0%, 100%)";
    equalButton.style.backgroundColor = "hsl(25, 98%, 40%)";
    equalButton.style.boxShadow = "0px 4px 0px 0px hsl(25, 99%, 27%)";
  });
});

radiobtn3.addEventListener("click", () => {
  body.style.backgroundColor = "hsl(268, 75%, 9%)";
  switchbuttonbg.style.backgroundColor = "hsl(268, 71%, 12%)";
  keybg.style.backgroundColor = "hsl(268, 71%, 12%)";
  inputwindowbg.style.backgroundColor = "hsl(268, 71%, 12%)";
  inputwindowbg.style.color = "hsl(52, 100%, 62%)";
  switchnumbers.forEach((numbers) => {
    numbers.style.color = "hsl(52, 100%, 62%)";
  });
  calctitle.style.color = "hsl(52, 100%, 62%)";
  theme.style.color = "hsl(52, 100%, 62%)";

  numberButtons.forEach((button) => {
    button.style.color = "hsl(52, 100%, 62%)";
    button.style.backgroundColor = "hsl(268, 47%, 21%)";
    button.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
  });
  numberButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "hsl(285, 91%, 52%)";
    });
    button.addEventListener("mouseout", () => {
      button.style.color = "hsl(52, 100%, 62%)";
      button.style.backgroundColor = "hsl(268, 47%, 21%)"
      button.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
    });
  });
  funButtons.forEach((button) => {
    button.style.color = "hsl(52, 100%, 62%)";
    button.style.backgroundColor = "hsl(268, 47%, 21%)";
    button.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
  });

  funButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "hsl(285, 91%, 52%)";
    });
    button.addEventListener("mouseout", () => {
      button.style.color = "hsl(52, 100%, 62%)";
      button.style.backgroundColor = "hsl(268, 47%, 21%)"
      button.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
    });
  });

  deleteButton.style.backgroundColor = "hsl(281, 89%, 26%)";
  deleteButton.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
  deleteButton.addEventListener("mouseover", () => {
    deleteButton.style.color = "hsl(0, 0%, 100%)";
    deleteButton.style.backgroundColor = "hsl(285, 91%, 52%)";
  });
  deleteButton.addEventListener("mouseout", () => {
    deleteButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    deleteButton.style.boxShadow ="0px 4px 0px 0px hsl(285, 91%, 52%)";
  });

  resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
  resetButton.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
  resetButton.addEventListener("mouseover", () => {
    resetButton.style.color = "hsl(0, 0%, 100%)";
    resetButton.style.backgroundColor = "hsl(285, 91%, 52%)";
  });
  resetButton.addEventListener("mouseout", () => {
    resetButton.style.color = "hsl(0, 0%, 100%)";
    resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetButton.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";
  });

  equalButton.style.backgroundColor = "hsl(176, 100%, 44%)";
  equalButton.style.boxShadow = "0px 4px 0px 0px hsl(177, 92%, 70%)";
  equalButton.addEventListener("mouseover", () => {
    equalButton.style.color="black"
    equalButton.style.backgroundColor = "hsl(285, 91%, 52%)";
    equalButton.style.boxShadow ="0px 4px 0px 0px hsl(285, 91%, 52%)";
  });
  equalButton.addEventListener("mouseout", () => { 
    equalButton.style.backgroundColor = "hsl(176, 100%, 44%)";
    equalButton.style.boxShadow = "0px 4px 0px 0px hsl(177, 92%, 70%)";
  });
});
