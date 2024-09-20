const injectHtml = {

    sectionHtml: document.querySelector('.profile-data'),
    dataFrom(userInformation) {
        this.sectionHtml.innerHTML = `
            <div class="info">
                <a target="_blank" href="${userInformation.profileUrl}"><img src="${userInformation.avatarUrl}" alt="Foto do perfil do usuário"/></a>
                <div class = "data">
                    <h1>${userInformation.name}</h1>
                    <p>User: ${userInformation.userName}</h1>
                    <p>Bio: ${userInformation.bio ?? 'não cadastrada'}</p>
                </div>
            </div>
            <div class='social'>
                <div>
                    <i class="fa-solid fa-user-group"></i>
                    <a target="_blank" href="${userInformation.followersUrl}">Seguidores: ${userInformation.followers}</a>
                    <a target="_blank" href="${userInformation.followingUrl}">Seguindo: ${userInformation.following}</a>
                </div>
                <img src="https://github-readme-stats.vercel.app/api?username=${userInformation.userName}&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${userInformation.userName}&layout=compact&langs_count=6&theme=tokyonight"/>
            </div>`

        let userEvents = ''
        userInformation.events.forEach(lastEvent => {
            let dataHora = new Date(lastEvent.created_at)
            let dataFormatada = dataHora.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' })
            let horaFormatada = dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            let nomeRepo = lastEvent.repo.name.split('/')[1]
            let tipoEvent = lastEvent.type.split("Event")[0]
            let descriptionEvent = ""
            if (tipoEvent == "Push") {
                descriptionEvent = lastEvent.payload.commits[0].message
            } else {
                descriptionEvent = "Usuário criou repositório"
            }
            userEvents += `
                <tr>
                <td><a target="_blank" href="https://github.com/${lastEvent.repo.name}">${dataFormatada}<br>${horaFormatada}</a></td>
                <td><a target="_blank" href="https://github.com/${lastEvent.repo.name}">${tipoEvent}</a></td>
                <td><a target="_blank" href="https://github.com/${lastEvent.repo.name}">${nomeRepo}</a></td>
                <td><a target="_blank" href="https://github.com/${lastEvent.repo.name}/commits">${descriptionEvent}</a></td>
                </tr>
                `
        })
        if (userInformation.events.length > 0) {
            this.sectionHtml.innerHTML += `
                <div class="events">
                    <h2 class="subtitles">Últimos eventos</h2>
                    <table>
                        <tr>
                            <th>Dia/hora</th>
                            <th>Ação</th>
                            <th>Repositório</th>
                            <th>Descrição</th>
                        </tr>
                            ${userEvents}
                    </table>
                </div>`
        }

        let repositoriesItens = ''
        userInformation.repositories.forEach(repo => {
            repositoriesItens += `  
                <li>
                    <a href="${repo.html_url}" target="_blank">${repo.name}
                    <div class "repo-stats">
                        <span title="Forks do repositório"><i class="fa-solid fa-code-fork"></i> ${repo.forks}</span>
                        <span title="Estrelas do repositório"><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
                        <span title="Watchers do repositório"><i class="fa-solid fa-eye"></i> ${repo.watchers}</span>
                        <span title="Linguagem do repositório"><i class="fa-solid fa-code"></i> ${repo.language ?? '---'}</span>
                    </div>
                    </a>
                </li>`
        })
        if (userInformation.repositories.length > 0) {
            document.querySelector('.profile-data').innerHTML += `
            <div class="repositories">
                <h2 class="subtitles">Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
    }
}

export { injectHtml }