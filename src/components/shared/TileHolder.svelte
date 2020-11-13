<script>
    import Tile from './Tile.svelte';
    export let tiles = [{ text: 'Hello, world!', icon: 'MenuIcon' }];
</script>

<section class="grid grid-cols-1 gap-2">
    <slot />
    {#each tiles as tile}
        <Tile><span>{tile.text}</span></Tile>
    {/each}
</section>
