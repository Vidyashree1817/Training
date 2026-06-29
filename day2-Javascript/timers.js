//setTimeout

setTimeout(() => console.log("Good evening"), 2000);
setTimeout(() => console.log("Hello"), 1000);

//setInterval will go to infinate loop

//setInterval(()=>console.log("hii"),3000)

//clearInterval

const id = setInterval(() => console.log("greetings"), 1000);
setTimeout(() => clearInterval(id), 4000);


//promises
let username = "vidya"
const login = new Promise((resolve, reject) => {
    if (username === "vidya") {
        resolve("Valid user");
    } else {
        reject("Invalid user");
    }
})
login.then((data) => console.log(data))
    .catch((error) => console.log(error));

//async-await

function example() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello");
            resolve();
        }, 2000);
    });
}
async function run() {
    try {
        await example();
        console.log("Promise fulfilled");
    }
    catch (e) {
        console.log("Promise failed");
    }
}
run();