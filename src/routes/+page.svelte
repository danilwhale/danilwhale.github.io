<script>
    let g = []

    function add() {
        g = [...g, 'g']
    }
</script>

<p>{g.join('')}</p>
<button on:click={add}>add g</button>