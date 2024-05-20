import { user } from "../scripts/services/user.js"
import { repositories } from "../scripts/services/repositories.js"
import { events } from "./services/events.js"
import { userInformation } from "./objects/userInformation.js"
import { injectHtml } from "./objects/injectHtml.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (userName.length > 0) {
        insertUserData(userName)
    } else {
        alert('Insira um nome de usuário')
    }
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (userName.length > 0) {
            insertUserData(userName)
        } else {
            alert('Insira um nome de usuário')
        }
    }
})

async function insertUserData(userName) {
    const responseUser = await user(userName)
    const responseRepositories = await repositories(userName)
    const responseEvents = await events(userName)

    userInformation.setInfo(responseUser)
    userInformation.setEvents(responseEvents)
    userInformation.setRepositories(responseRepositories)

    injectHtml.dataFrom(userInformation)
}