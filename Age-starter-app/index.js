const button = document.getElementById("button");

button.addEventListener("click", () => {
  let valid = true;

  if (Year() == true) {
    const inputyear = document.getElementById("inputyear");
    inputyear.classList.remove("validationstyle-border");
    titleyear.style.color = "";
    validyear.innerHTML = "";
  } else {
    valid = false;
  }

  if (Month() == true) {
    const inputmonth = document.getElementById("inputmon");
    inputmonth.classList.remove("validationstyle-border");
    titlemonth.style.color = "";
    validmonth.innerHTML = "";
  } else {
    valid = false;
  }

  if (Day() == true) {
    const inputday = document.getElementById("inputday");
    inputday.classList.remove("validationstyle-border");
    titleday.style.color = "";
    validday.innerHTML = "";
  } else {
    valid = false;
  }

  if (valid) {
    caculate();
  }
});

const leap = () => {
  const leapyear = true;
  const notleapyear = false;
  if (inputyear.value % 4 == 0) {
    if (inputyear.value % 100 == 0) {
      if (inputyear.value % 400 == 0) {
        return leapyear;
      } else {
        return notleapyear;
      }
    } else {
      return leapyear;
    }
  } else {
    return notleapyear;
  }
};

const Year = () => {
  const inputyear = document.getElementById("inputyear");
  // const changeyear = document.getElementById("dashyear");
  const titleyear = document.getElementById("titleyear");
  const validyear = document.getElementById("validyear");
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  if (inputyear.value == "") {
    inputyear.classList.add("validationstyle-border");
    titleyear.style.color = "hsl(0, 100%, 67%)";
    validyear.innerHTML = "This field is required";
    return false;
  } else if (inputyear.value > year) {
    inputyear.classList.add("validationstyle-border");
    titleyear.style.color = "hsl(0, 100%, 67%)";
    validyear.innerHTML = "Must be in past";
    return false;
  } else {
    return true;
  }
};

const Month = () => {
  const inputmonth = document.getElementById("inputmon");
  const titlemonth = document.getElementById("titlemonth");
  const validmonth = document.getElementById("validmonth");
  const inputyear = document.getElementById("inputyear");
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  if (inputmonth.value == "") {
    inputmonth.classList.add("validationstyle-border");
    titlemonth.style.color = "hsl(0, 100%, 67%)";
    validmonth.innerHTML = "This field is required";
    return false;
  } else if (inputyear.value == year && inputmonth.value > month) {
    inputmonth.classList.add("validationstyle-border");
    titlemonth.style.color = "hsl(0, 100%, 67%)";
    validmonth.innerHTML = "Must be past month";
    return false;
  } else if (inputmonth.value == 0 || inputmonth.value > 12) {
    inputmonth.classList.add("validationstyle-border");
    titlemonth.style.color = "hsl(0, 100%, 67%)";
    validmonth.innerHTML = "Must be a valid month";
    return false;
  } else {
    return true;
  }
};

const Day = () => {
  const inputyear = document.getElementById("inputyear");
  const inputmonth = document.getElementById("inputmon");
  const inputday = document.getElementById("inputday");
  const titleday = document.getElementById("titleday");
  const validday = document.getElementById("validday");
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let date = currentDate.getDate();
  if (inputday.value == "") {
    inputday.classList.add("validationstyle-border");
    titleday.style.color = "hsl(0, 100%, 67%)";
    validday.innerHTML = "This field is required";
    return false;
  } else if (inputday.value != "" && inputmonth.value == "") {
    inputday.classList.add("validationstyle-border");
    titleday.style.color = "hsl(0, 100%, 67%)";
    validday.innerHTML = "Month is required";
    return false;
  } else if (
    inputyear.value == year &&
    inputmonth.value == month &&
    inputday.value > date
  ) {
    inputday.classList.add("validationstyle-border");
    titleday.style.color = "hsl(0, 100%, 67%)";
    validday.innerHTML = "Must be past day";
    return false;
  } else {
    if (leap()) {
      const leapdate = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (
        inputmonth.value >= 1 &&
        inputmonth.value <= 12 &&
        inputday.value >= 1 &&
        inputday.value <= leapdate[inputmonth.value]
      ) {
        return true;
      } else {
        inputday.classList.add("validationstyle-border");
        titleday.style.color = "hsl(0, 100%, 67%)";
        validday.innerHTML = "Must be a valid day";
        return false;
      }
    } else {
      const normalyear = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (
        inputmonth.value >= 1 &&
        inputmonth.value <= 12 &&
        inputday.value >= 1 &&
        inputday.value <= normalyear[inputmonth.value]
      ) {
        return true;
      } else {
        inputday.classList.add("validationstyle-border");
        titleday.style.color = "hsl(0, 100%, 67%)";
        validday.innerHTML = "Must be a valid day";
        return false;
      }
    }
  }
};

const daysInMonth =(month, year) =>{
  switch (month) {
      case 1: 
      case 3: 
      case 5: 
      case 7: 
      case 8: 
      case 10: 
      case 12: 
          return 31;
      case 4: 
      case 6: 
      case 9: 
      case 11: 
          return 
      case 2: 
          return leap(year) ? 29 : 28;
      default:
          return -1; 
  }
}

const caculate = () => {
  const inputyear = document.getElementById("inputyear");
  const inputmonth = document.getElementById("inputmon");
  const inputday = document.getElementById("inputday");
  const dashyear = document.getElementById("dashyear");
  const dashmonth = document.getElementById("dashmonth");
  const dashday = document.getElementById("dashday");
  const year = parseInt(inputyear.value);
  const month = parseInt(inputmonth.value);
  const day = parseInt(inputday.value);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let ageYears = currentYear - year;
  let ageMonths = currentMonth - month;
  let ageDays = currentDay - day;
  if (ageDays < 0) {
    ageMonths--;
    ageDays += daysInMonth(currentMonth - 1, currentYear);
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  dashyear.innerHTML = ageYears
  dashmonth.innerHTML = ageMonths
  dashday.innerHTML = ageDays

  
};
