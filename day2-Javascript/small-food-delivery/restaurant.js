export function prepareOrder(order) {
    return new Promise((resolve) => {
        console.log("Preparing food")
        setTimeout(() => {
            console.log("Food is ready");
            resolve(order);
        }, 3000)
    })
}
