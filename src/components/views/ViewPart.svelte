<script>
    import { onMount } from 'svelte';

    import { appData } from '../../stores';

    import Modal from '../shared/Modal.svelte';
    import Tile from '../shared/Tile.svelte';

    $: part = $appData.part;
    $: ({ category, name, model, id, ...rest } = part);
</script>

<style>
</style>

<Modal bottomLeft={{ text: 'REMOVE' }} bottomRight>
    <h1 class=" text-2xl italic font-bold text-center mb-4">{part.name}</h1>

    <div class="grid grid-cols-1 gap-2 mb-2">
        <Tile><span>CATEGORY: {category}</span></Tile>
        <Tile><span>NAME: {name}</span></Tile>
        <Tile><span>MODEL: {model}</span></Tile>
        {#each Object.entries(rest) as [fieldKey, fieldVal] (fieldKey)}
            <Tile><span>{fieldKey.toUpperCase()}: {fieldVal}</span></Tile>
        {/each}
    </div>
</Modal>
