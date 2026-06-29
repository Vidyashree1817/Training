import { prepareOrder } from "./restaurant.js";
import { deliveryfood } from "./delivery.js";

const order = {
    id: 101,
    customer: "Vidyashree R",
    food: "Paneer Pizza",
    price: 350
};
async function placeOrder() {
    console.log("Customer placed an order");
    const preparedOrder = await prepareOrder(order);
    const result = await deliveryfood(prepareOrder);
    console.log(result);

}
placeOrder();