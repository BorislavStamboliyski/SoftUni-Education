function personalTitles(input) {
    let gender = input[1];
    let age = Number(input[0]);
    if (gender === "f") {
        if (age < 16) {
            console.log("Miss");
        } else {
            console.log("Ms.")
        }
    } else {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.")
        }
    }
}
personalTitles(["m", "13.5"])