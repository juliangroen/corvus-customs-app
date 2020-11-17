<script>
    import { appData, modal, vehicles } from '../../stores';
    import Tile from '../shared/Tile.svelte';
    const selectVehicle = (object) => {
        $appData.vehicle = object;
        console.log(object);
        $appData.view = 'EditVehicle';
    };
    const handleAddVehicle = () => {
        modal.toggle();
        modal.setContent('AddVehicle');
    };
</script>

<style>
</style>

<!-- Main Heading -->
<h1 class=" text-2xl italic font-bold text-center mb-4">
    Welcome
    {$appData.user.email}
</h1>

<section class="grid grid-cols-1 gap-2 mb-2">
    <slot />
    {#each $vehicles as tile}
        <Tile
            src="../assets/svg/parts/key.svg"
            on:handleClick={selectVehicle(tile)}>
            <span>{tile.year} {tile.make} {tile.model}</span>
        </Tile>
    {/each}
</section>

<Tile src="../assets/svg/plus-white.svg" on:handleClick={handleAddVehicle}>
    <span>Add New Vehicle</span>
</Tile>
