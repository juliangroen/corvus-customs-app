<script>
    import { firebaseDeleteItem } from '../../firebase';
    import { appData, modal } from '../../stores';
    import Page from '../shared/Page.svelte';
    import Tile from '../shared/Tile.svelte';
    $: vehicle = $appData.vehicle;
    const svgPath = './assets/svg/parts/';
    const handlePartClick = (part) => {
        console.log(part);
    };
    const handlePartSearch = () => {
        modal.toggle();
        modal.setContent('PartSearch');
    };
    const handleDelete = () => {
        let result = confirm('Are you sure you want to delete this vehicle?');
        if (result) {
            firebaseDeleteItem('vehicles', vehicle.id)
                .then(() => {
                    console.log(`${vehicle.id} was deleted`);
                    $appData.view = 'Vehicles';
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
</script>

<style>
</style>

<Page topLeft bottomLeft bottomRight on:tlClick={() => ($appData.view = 'Vehicles')} on:blClick={handleDelete}>
    <!-- Main Heading -->
    <h1 class=" text-2xl italic font-bold text-center mb-4">Customize Vehicle</h1>

    <Tile src="./assets/svg/parts/key.svg"><span>{vehicle.year} {vehicle.make} {vehicle.model}</span></Tile>
    <div class="mt-2">
        <div class="grid grid-cols-3 gap-2 mb-2">
            {#each Object.entries(vehicle.parts) as [partKey, partVal] (partKey)}
                {#if partVal === ''}
                    <Tile box empty src={`${svgPath}${partKey}.svg`} on:click={handlePartSearch} />
                {:else}
                    <Tile box src={`${svgPath}${partKey}.svg`} on:click={() => handlePartClick(partVal)} />
                {/if}
            {/each}
        </div>
    </div>
</Page>
