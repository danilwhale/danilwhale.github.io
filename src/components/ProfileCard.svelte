<script>
	import Card from "./Card.svelte";

    let username = null
    let globalName = null
    let statusStyle = "hidden"
    let avatarUrl = "https://github.com/danilwhale.png"

    fetch("https://api.lanyard.rest/v1/users/568756569261604885")
        .then(response => response.json())
        .then(json => {
            if (!json.success) {
                console.error(`failed to fetch lanyard info: ${json.error.code} - ${json.error.message}`)
                return
            }

            username = json.data.discord_user.username
            globalName = json.data.discord_user.global_name
            
            switch (json.data.discord_status) {
                case "online":
                    statusStyle = "border-green-500/50"
                    break
                
                case "idle":
                    statusStyle = "border-yellow-500/50"
                    break
                
                case "dnd":
                    statusStyle = "border-orange-700/50"
                    break
                
                default:
                    statusStyle = "border-stone-700/50"
                    break
            }
        })
</script>

<Card title="profile">
    <img src={avatarUrl} class="{statusStyle} border-2 w-32 h-32" alt="avatar"/>
    <div class="mt-6">
        <p class="text-2xl">{username != null ? `@${username}` : ""}</p>  
        <p class="text-md text-slate-400 {globalName == null ? "hidden" : ""}">{globalName}</p>
    </div>
</Card>
