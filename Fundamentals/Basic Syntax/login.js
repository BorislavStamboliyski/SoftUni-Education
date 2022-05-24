function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    let pass = username.split('').reverse().join('');
    let counter = 1;
    let isLogin = false;
    while (pass !== password) {
        password = input[index];
        if (counter >= 4 && pass != password) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (password !== pass) {
            console.log(`Incorrect password. Try again.`);
        } else {
            isLogin = true;
            break;
        }
        index++;
        counter++;

    }
    if (pass === password) {
        console.log(`User ${username} logged in.`);
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']
);