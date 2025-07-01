<script>
    export let data;
</script>

<style>
    div {
        margin-bottom: 1rem;
    }
</style>

{#each data.posts as post}
    <div class="card">
        <a href={post.path} class="title"><h1>{post.metadata.title}</h1></a>
        <p class="description">{post.metadata.description}</p>
        <p class="subtitle">published {post.metadata.date}</p>
    </div>
{/each}