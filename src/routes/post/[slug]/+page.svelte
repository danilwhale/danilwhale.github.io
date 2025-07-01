<script>
    export let data;
</script>

<style>
    #footer {
        margin-top: 5rem;
    }
</style>

<article>
    <div class="card">
        <h1>{data.metadata.title}</h1>
        <p class="subtitle"><i>{data.metadata.description}</i></p>
    </div>

    <svelte:component this="{data.content}"/>

    <div class="card" id="footer">
        <p class="subtitle">published {data.metadata.date}</p>
    </div>
</article>