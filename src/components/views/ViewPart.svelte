<script>
    import { onDestroy } from 'svelte';
    import { firebaseDeleteItem } from '../../firebase';
    import VehicleFactory from '../../models/VehicleFactory';
    import { appData, modal } from '../../stores';
    import Page from '../shared/Page.svelte';
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

    const handleDelete = () => {
        const result = confirm(`Are you sure you want to delete "${name}" from the database?`);
        if (result) {
            firebaseDeleteItem('parts', id)
                .then(() => {
                    console.log(id, 'was deleted');
                    $appData.partsUpdated = true;
                    modal.back();
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };

    const handleEdit = () => {
        $appData.partEdit = true;
        $appData.category = category;
        modal.open();
        modal.setContent('AddPart');
    };

    onDestroy(() => {
        $appData.selectedPart = false;
    });
</script>

<style>
</style>

<Page
    topLeft
    topRight={{ text: 'EDIT' }}
    bottomLeft={$appData.selectedPart ? { text: 'REMOVE' } : true}
    bottomRight={$appData.selectedPart ? null : true}
    on:tlClick={() => modal.back()}
    on:trClick={handleEdit}
    on:blClick={$appData.selectedPart ? handleRemove : handleDelete}
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
</Page>
