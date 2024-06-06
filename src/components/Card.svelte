
<script>
    export let title = ""
    export let justifyContent = false
</script>

<div class="
    bg-black/5 
    border-black/30 border-2 
    backdrop-blur-md
    p-6 m-6">

    <p class="text-xl text-slate-400 mb-2">{title}</p>
    <div class="{justifyContent ? "flex justify-center items-center" : ""}">
        <slot />
    </div>
</div>