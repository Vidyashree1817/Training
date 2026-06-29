export function deliveryfood() {
    return new Promise((resolve) => {
        console.log("Delivery guy picked the order..");
        setTimeout(() => {
            resolve("Delivered successfully..")
        }, 3000)

    })
}