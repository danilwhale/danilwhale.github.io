export default function createAvatarHtml() {
    let avatarUrl = fetch('https://discordlookup.mesavirep.xyz/v1/user/568756569261604885')
        .then(response => response.json())
        .then(json => {
            return json.avatar.link
        })

    return `
    <img src="${avatarUrl}" class="box circle" alt="silly discord pfp">
    `;
}