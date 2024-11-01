<script>
	import { onMount } from 'svelte';
	import Card from './Card.svelte';

	let username = null;
	let globalName = null;
	let statusStyle = 'hidden';

	let userPfpUrl = null;
	let discordPfpUrl = 'https://api.lanyard.rest/1191777214467940414.png';
	let githubPfpUrl = 'https://github.com/danilwhale.png';

	let avatarUrl = githubPfpUrl;

	onMount(() => {
		fetch('https://api.lanyard.rest/v1/users/1191777214467940414')
			.then((response) => response.json())
			.then((json) => {
				if (!json.success) {
					console.error(`failed to fetch lanyard info: ${json.error.code} - ${json.error.message}`);
					return;
				}

				username = json.data.discord_user.username;
				globalName = json.data.discord_user.global_name;

				switch (json.data.discord_status) {
					case 'online':
						statusStyle = 'border-green-500/50';
						break;

					case 'idle':
						statusStyle = 'border-yellow-500/50';
						break;

					case 'dnd':
						statusStyle = 'border-orange-700/50';
						break;

					default:
						statusStyle = 'border-stone-700/50';
						break;
				}
			});
	});

	function switchAvatar() {
		if (avatarUrl.startsWith('https://github.com')) {
			avatarUrl = discordPfpUrl;
		} else {
			avatarUrl = githubPfpUrl;
		}
	}
</script>

<Card title="profile">
	<button on:click={switchAvatar}>
		<img src={avatarUrl} class="{statusStyle} border-2 w-32 h-32" alt="avatar" />
	</button>
	<div class="mt-6">
		<p class="text-2xl">{username != null ? `@${username}` : ''}</p>
		<p class="text-md text-slate-400 {globalName == null ? 'hidden' : ''}">{globalName}</p>
	</div>
</Card>
