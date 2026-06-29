//Error
//compile time error-when there is a syntactical problem then this occurs

//runtime- when a problem ocurs during the execution
/*
1. ReferenceError- when trying to access a anything that is not declared
2. TypeError-when an arguments that is passed to a function is incompatible with the type
3. RangeError- when a numeric value drops outside of it allowed legal range
Ex- creating negative sized array, recursion etc.. */

function handling() {
    try {
        console.log(username);
    } catch (e) {
        console.log("this is name" + e.name);
        console.log("this is message" + e.message)
        console.log("this is stack info" + e.stack);
    }
}
//handling();

// login system

function validateName(name) {
    if (name === "vidya") {
        console.log(name);
    } else {
        throw new Error("Invalid username");
    }
}

function validateemail(email) {
    if (email.includes('@')) {
        console.log(email);
    } else {
        throw new Error("Invalid user");
    }
}

function validatepassword(password) {
    if (password.length >= 8) {
        console.log(password);
    } else {
        throw new Error("wrong user");
    }
}

function login(username, email, password) {
    try {
        validateName(username);
        validateemail(email);
        validatepassword(password);
        console.log("Login successful");

    } catch (e) {
        console.log(e.stack);
    }
}

login("vidya", 'vidya@123', "12345678");
