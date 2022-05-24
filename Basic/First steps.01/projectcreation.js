function projectcreation(input) {
    let name = input[0];
    let countprojects = Number(input[1]);
    let hours = countprojects * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${countprojects} project/s.`)
}
projectcreation(["Sanya", "9"])