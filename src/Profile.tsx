import { Component } from "react"

export default class Profile extends Component<{}, { loaded: boolean }> {
    username: string | null = null
    avatar: string | null = null
    status: string | null = null

    constructor(props: {}) {
        super(props)
        this.state = { loaded: false }
    }

    async componentDidMount() {
        try {
            let data = await fetch('https://api.lanyard.rest/v1/users/568756569261604885')
            if (!data.ok) throw new Error(`explod ${data.status}`)

            let json = await data.json()

            this.username = json.data.discord_user.display_name ?? json.data.discord_user.username
            this.avatar = `https://cdn.discordapp.com/avatars/${json.data.discord_user.id}/${json.data.discord_user.avatar}.png?size=128`
            this.status = json.data.discord_status

            this.setState({ loaded: true })
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <>
                {this.state.loaded ?
                    <div>
                        <img
                            className={`rounded-full float-left m-4 mb-16 border-2 
                            ${this.get_status_color(this.status)}`}
                            src={this.avatar ?? './vite.svg'}
                            onError={e => {
                                this.avatar = 'https://github.com/danilwhale.png?size=128'

                                let img = e.target as HTMLImageElement
                                img.src = this.avatar

                                this.show_firefox_warning()
                            }} />

                        <h2 className="text-3xl cursor-default">
                            hi im {this.username}
                        </h2>

                        <p>im a silly goober and also i code various stuff, most of it is being abondoned and i never come back to it</p>
                        <p>my main programming language is c#, but sometimes i write projects on different languages (ts, java, etc.)</p>
                        <p>i make most of my games on raylib (raylib-cs)</p>
                    </div>

                    : <h1>d</h1>}

            </>
        )
    }

    get_status_color(status: string | null) {
        switch (status) {
            case "online":
                return "border-emerald-400"

            case "idle":
                return "border-yellow-400"

            case "dnd":
                return "border-rose-400"

            default:
                return "border-stone-50"
        }
    }

    show_firefox_warning() {
        let warning = document.getElementById('firefoxWarning')
        if (warning === null) {
            /* how the fuck */
            return
        }

        warning.className = warning.className.replace('hidden', '')
    }
}