<script>
    import { appData, parts } from '../../stores';

    import Modal from '../shared/Modal.svelte';
    import SearchBar from '../shared/SearchBar.svelte';
    import Tile from '../shared/Tile.svelte';
    $: category = $appData.category;
</script>

<style>
</style>

<Modal>
    <!-- Main Heading -->
    <h1 class=" text-2xl italic font-bold text-center mb-4">Select a {category}</h1>

    <SearchBar />

    <div class="grid grid-cols-1 gap-2 mb-2">
        {#each $parts as tile}
            <Tile>{tile.getName()}</Tile>
        {/each}
    </div>
</Modal>
