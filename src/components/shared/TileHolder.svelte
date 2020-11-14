<script>
    import Tile from './Tile.svelte';
    export let tiles = [];
</script>

<section class="grid grid-cols-1 gap-2 mb-2">
    <slot />
    {#each tiles as tile}
        <Tile src={tile.src}><span>{tile.text}</span></Tile>
    {/each}
</section>
