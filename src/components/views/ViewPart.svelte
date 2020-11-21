<script>
    import { onDestroy } from 'svelte';

    import VehicleFactory from '../../models/VehicleFactory';

    import { appData, modal } from '../../stores';
    import Modal from '../shared/Modal.svelte';
    import Tile from '../shared/Tile.svelte';

    const part = $appData.part;
    const { category, name, model, id, ...rest } = part.dbObject();

    const handleSelect = () => {
        let changed = $appData.vehicle.dbObject();
        changed.parts[category] = id;
        $appData.vehicle = VehicleFactory.createVehicle(changed);
        modal.hardClose();
    };

    const handleRemove = () => {
        let changed = $appData.vehicle.dbObject();
        changed.parts[category] = null;
        $appData.vehicle = VehicleFactory.createVehicle(changed);
        modal.back();
    };

    onDestroy(() => {
        $appData.selectedPart = false;
        $appData.part = null;
    });
</script>

<style>
</style>

<Modal
    bottomLeft={$appData.selectedPart ? { text: 'REMOVE' } : null}
    bottomRight={$appData.selectedPart ? null : true}
    on:blClick={handleRemove}
    on:brClick={$appData.selectedPart ? null : handleSelect}>
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
