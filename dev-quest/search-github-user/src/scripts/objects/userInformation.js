const userInformation = {
    name: '',
    userName: '',
    bio: '',
    avatarUrl: '',
    profileUrl: '',
    followers: '',
    followersUrl: '',
    following: '',
    followingUrl: '',
    events: [],
    repositories: [],
    setInfo(responseUser) {
        this.name = responseUser.name
        this.userName = responseUser.login
        this.bio = responseUser.bio
        this.avatarUrl = responseUser.avatar_url
        this.profileUrl = responseUser.html_url
        this.followers = responseUser.followers
        this.followersUrl = `https://github.com/${responseUser.login}?tab=followers`
        this.following = responseUser.following
        this.followingUrl = `https://github.com/${responseUser.login}?tab=following`
    },
    setEvents(responseEvents) {
        this.events = responseEvents
    },
    setRepositories(responseRepositories) {
        this.repositories = responseRepositories
    }
}

export { userInformation }