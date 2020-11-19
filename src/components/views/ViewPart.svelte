<script>
    import { appData, modal } from '../../stores';
    import Modal from '../shared/Modal.svelte';
    import Tile from '../shared/Tile.svelte';
    const part = $appData.part;
    const { category, name, model, id, ...rest } = part.dbObject();
    const handleRemove = () => {
        $appData.vehicle.parts[category] = null;
        modal.close();
    };
</script>

<style>
</style>

<Modal bottomLeft={{ text: 'REMOVE' }} bottomRight on:blClick={handleRemove}>
    <h1 class=" text-2xl italic font-bold text-center mb-4">{name}</h1>

    <div class="grid grid-cols-1 gap-2 mb-2">
        <Tile src="./assets/svg/cubes.svg"><span>CATEGORY: {category}</span></Tile>
        <Tile src="./assets/svg/cubes.svg"><span>NAME: {name}</span></Tile>
        <Tile src="./assets/svg/cubes.svg"><span>MODEL: {model}</span></Tile>
        {#each Object.entries(rest) as [fieldKey, fieldVal] (fieldKey)}
            <Tile src="./assets/svg/cubes.svg"><span>{fieldKey.toUpperCase()}: {fieldVal}</span></Tile>
        {/each}
    </div>
</Modal>
