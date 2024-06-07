
<script>
    export let title = ""
    export let justifyContent = false
</script>

<div class="
    bg-black/20
    p-6 m-6">

    <p class="text-xl text-slate-400 mb-2">{title}</p>
    <div class="{justifyContent ? "flex justify-center items-center" : ""}">
        <slot />
    </div>
</div>