// const year = 2022
// const month = 1 
// const date = 13

// const curryear = 2024
// const curmonth = 1
// const curdate = 13

function calculateAge(year, month, day) {
    // 取得現在的日期
    const currentDate = new Date();

    // 計算年齡
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    // 處理可能的借位情況
    if (ageDays < 0) {
        ageMonths--;
        ageDays += daysInMonth(currentMonth - 1, currentYear);
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
}

// 計算指定月份的天數
function daysInMonth(month, year) {
    switch (month) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
            return 31;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            return 30;
        case 2: // February
            return isLeapYear(year) ? 29 : 28;
        default:
            return -1; // Invalid month
    }
}

// 判斷是否為閏年
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// 以 1990 年 1 月 1 日為例
const { years, months, days } = calculateAge(2022, 1, 28);
console.log(`你活了 ${years} 年 ${months} 月 ${days} 天`);
