function nextDay(year, month, date) {
    if (year <= 99) year += 1900;
    let newDate = new Date(`${year}-${month}-${date + 1}`);
    let newday = newDate.getDate();
    let newYear = newDate.getFullYear();
    let newMonth = newDate.getMonth() + 1;

    console.log(`${newYear}-${newMonth}-${newday}`);
}

nextDay(1, 1, 1)