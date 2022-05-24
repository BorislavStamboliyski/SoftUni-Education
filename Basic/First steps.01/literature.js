function literature(input) {
    let pages = Number(input[0]);
    let pagesperhour = Number(input[1]);
    let days = Number(input[2]);
    let book = pages / pagesperhour;
    let hoursperday = book / days;
    console.log(hoursperday);
}
literature(["432", "15", "4"])