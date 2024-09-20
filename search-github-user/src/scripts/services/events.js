import { baseUrl, eventQuantity } from "../variables.js"
async function events(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events/public?per_page=${eventQuantity}`)
    return await response.json()
}

export { events }