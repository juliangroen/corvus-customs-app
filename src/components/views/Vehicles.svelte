<script>
    import { appData, modal, vehicles } from '../../stores';
    import Tile from '../shared/Tile.svelte';
    const selectVehicle = (object) => {
        $appData.vehicle = object;
        $appData.view = 'EditVehicle';
    };
    const handleAddVehicle = () => {
        modal.open();
        modal.setContent('AddVehicle');
    };
</script>

<style>
</style>

<!-- Main Heading -->
<h1 class=" text-2xl italic font-bold text-center mb-4">Welcome {$appData.user.email}</h1>

<section class="grid grid-cols-1 gap-2 mb-2">
    <slot />
    {#each $vehicles as vehicle}
        <Tile src="../assets/svg/parts/key.svg" on:click={selectVehicle(vehicle)}>
            <span> {vehicle.getYear()} {vehicle.getMake()} {vehicle.getModel()} </span>
        </Tile>
    {/each}
</section>

<Tile src="../assets/svg/plus-white.svg" on:click={handleAddVehicle}><span>Add New Vehicle</span></Tile>
