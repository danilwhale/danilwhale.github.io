<script>
    import { page } from '$app/stores';
</script>

<div class="place-content-center w-full h-full">
    <p class="text-3xl text-center">{$page.status}!!!</p>
    <p class="text-xl text-center m-5">{#if $page.status == "404"} page has been exploded!!! {:else} qhar??? {/if}</p>
    <div class="flex justify-center">
        <img src="/existential_dread.gif" alt="explod">
    </div>
</div>