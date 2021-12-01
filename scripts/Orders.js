import { getOrders, getMetals } from "./database.js"
const metals = getMetals()

const buildOrderListItem = (order) => {
    
    
    
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
 
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

