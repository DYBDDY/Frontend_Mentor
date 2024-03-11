const createBtn = document.getElementById("createcheck");
const listArea = document.getElementById("listarea");
const newinputtext = document.getElementById("newinputtext");

// Delete
const deleteandcheck = (newitem) => {
  const deletebtn = newitem.querySelector(".deletebtn");
  deletebtn.addEventListener("click", () => {
    listArea.removeChild(newitem);
    updateItemCount(-1);
  });

  // Check
  const checkbtn = newitem.querySelector(".listcheck");
  const inputlists = newitem.querySelector(".inputlists");
  let isChecked = false;
  checkbtn.addEventListener("click", () => {
    if (isChecked) {
      isChecked = false;
      checkbtn.style.background = "";
      updateItemCount(1);
    } else {
      isChecked = true;
      checkbtn.style.background =
        'url("/images/icon-check.svg"), linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
      checkbtn.style.backgroundRepeat = "no-repeat";
      checkbtn.style.backgroundPosition = "center";
      updateItemCount(-1);
    }
    if (isChecked) {
      inputlists.style.textDecorationLine = "line-through";
      inputlists.style.color = "hsl(233, 14%, 35%)";
    } else {
      inputlists.style.textDecorationLine = "none";
      inputlists.style.color = "";
    }
    checkbtn.checked = isChecked;
  });
};

//create items
createBtn.addEventListener("click", () => {
  // Create
  if (newinputtext.value === "") {
    alert("Please write something");
  } else {
    var newitem = document.createElement("div");
    newitem.classList.add("list");
    newitem.innerHTML = `
    <button class="listcheck"></button>
    <input type="text" class="inputlists" value="${newinputtext.value}" readonly>
    <button class="deletebtn"><img src="/images/icon-cross.svg"></button>  
    `;
    listArea.appendChild(newitem);
    deleteandcheck(newitem);
    updateItemCount(1);

    // 添加拖放事件监听器
    addDnDHandlers(newitem);
  }
});

//update items left
const itemleft = document.getElementById("itemnum");
let itemCount = 0;
const updateItemCount = (num) => {
  itemCount += num;
  if (itemCount < 0) {
    itemCount = 0;
    itemleft.textContent = `${itemCount} items left`;
  } else {
    itemleft.textContent = `${itemCount} items left`;
  }
};

//clear completed
const clearbtn = document.getElementById("clear");
const clearCompleted = () => {
  const listItems = document.querySelectorAll(".list");
  listItems.forEach((item) => {
    const clearbtn = item.querySelector(".listcheck");
    if (clearbtn.checked) {
      listArea.removeChild(item);
    }
  });
};
clearbtn.addEventListener("click", clearCompleted);

//show active
const active = () => {
  const activebtn = document.getElementById("active");
  activebtn.addEventListener("click", () => {
    const listItems = document.querySelectorAll(".list");
    listItems.forEach((item) => {
      item.style.display = "";
      const checkBtn = item.querySelector(".listcheck");
      if (checkBtn.checked) {
        item.style.display = "none";
      }
    });
  });
};

//show completed
const completed = () => {
  const completebtn = document.getElementById("complete");
  completebtn.addEventListener("click", () => {
    const listItems = document.querySelectorAll(".list");
    listItems.forEach((item) => {
      const checkBtn = item.querySelector(".listcheck");
      if (checkBtn.checked === true) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
};
//show All
const All = () => {
  const showallbtn = document.getElementById("all");
  showallbtn.addEventListener("click", () => {
    const listItems = document.querySelectorAll(".list");
    listItems.forEach((item) => {
      item.style.display = "";
    });
  });
};
active();
completed();
All();

