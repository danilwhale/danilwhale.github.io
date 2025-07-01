<script lang="ts">
    import {OpCode} from "$lib";

    const userId = "1191777214467940414";
    let iconUrl = `https://api.lanyard.rest/${userId}.png`;
    let iconBorderColor = "rgba(0.0, 0.0, 0.0, 0.0)";

    const ws = new WebSocket("wss://api.lanyard.rest/socket");
    ws.addEventListener("message", e => {
        const jason = JSON.parse(e.data);
        switch (jason.op) {
            case OpCode.Event:
                switch (jason.t) {
                    case "INIT_STATE":
                        updateIconBorder(jason.d[userId].discord_status);
                        break;
                    case "PRESENCE_UPDATE":
                        updateIconBorder(jason.d.discord_status);
                        break;
                }

                break;
            case OpCode.Hello:
                setInterval(() => {
                    ws.send(JSON.stringify({op: OpCode.Heartbeat}));
                }, jason.d.heartbeat_interval)
                ws.send(JSON.stringify({op: OpCode.Initialize, d: {subscribe_to_ids: [userId]}}))
                break;
        }
    })

    function updateIconBorder(status: string) {
        switch (status) {
            case "online":
                iconBorderColor = "#63c055";
                break;
            case "idle":
                iconBorderColor = "#deb13f";
                break;
            case "dnd":
                iconBorderColor = "#ef4141";
                break;
            default:
                iconBorderColor = "#737373";
                break;
        }
    }
</script>

<style>
    #profile {
        margin-bottom: 1rem;
    }

    #icon {
        margin-right: 1rem;

        width: 64px;
        height: 64px;

        border: 4px solid;
    }
</style>

<div id="profile" class="card flex-row">
    <img src="{iconUrl}" id="icon" style="border-color: {iconBorderColor};" alt="profile icon"/>
    <div>
        <h2>hello, I'm danilwhale</h2>
    </div>
</div>
