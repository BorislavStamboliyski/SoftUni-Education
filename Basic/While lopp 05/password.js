function password(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    while (true) {
        let data = input[index];
        if (data === password) {
            break;
        }
        index++;
    }
    console.log(`Welcome ${username}!`);
}
password(["Gosho",
"secret",
"secret"])
