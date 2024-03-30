import { useEffect, useState } from "react"

function Profile() {
    const [username, setUsername] = useState<string | null>(null)
    const [avatar, setAvatar] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.lanyard.rest/v1/users/568756569261604885')
            if (!res.ok) throw new Error(`explod ${res.status}`)

            return res;
        }

        const fetchUsername = async () => {
            const res = await fetchData()
            const json = await res.json()

            setUsername(json.data.discord_user.username)
        }

        const fetchAvatar = async () => {
            const res = await fetchData()
            const json = await res.json()

            setAvatar(`https://cdn.discordapp.com/avatars/${json.data.discord_user.id}/${json.data.discord_user.avatar}.png?size=256`)
        }

        try {
            fetchUsername()
            fetchAvatar();
        } catch (e) {
            console.error(e)
        }
    }, [])

    return (
        <>
            <img className="rounded-full float-left m-4 mb-16" src={!avatar ? './vite.svg' : avatar} width={128} height={128}></img>

            <h2 className="text-3xl cursor-default">
                hi im {!username ? 'danil' : username}
            </h2>

            <p>im a silly goober and also i code various stuff, most of it is being abondoned and i never come back to it</p>
            <p>my main programming language is c#, but sometimes i write projects on different languages (ts, java, etc.)</p>
            <p>i make most of my games on raylib (raylib-cs)</p>
        </>
    )
}

export default Profile