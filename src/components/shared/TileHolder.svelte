<script>
    import Tile from './Tile.svelte';
    export let tiles = [
        { text: 'Vehicle 1', src: '../assets/svg/parts/key.svg' },
        { text: 'Vehicle 2', src: '../assets/svg/parts/key.svg' },
        {
            text: 'Vehicle 3',
            src: '../assets/svg/parts/key.svg',
        },
        { text: 'Vehicle 4', src: '../assets/svg/parts/key.svg' },
    ];
</script>

<section class="grid grid-cols-1 gap-2 mb-2">
    <slot />
    {#each tiles as tile}
        <Tile src={tile.src}><span>{tile.text}</span></Tile>
    {/each}
</section>
