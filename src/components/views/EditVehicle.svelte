<script>
    import { firebaseDeleteItem } from '../../firebase';

    import { appData } from '../../stores';
    import Page from '../shared/Page.svelte';
    import Tile from '../shared/Tile.svelte';
    $: vehicle = $appData.vehicle;
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

<Page
    topLeft
    bottomLeft
    bottomRight
    on:tlClick={() => ($appData.view = 'Vehicles')}
    on:blClick={handleDelete}>
    <!-- Main Heading -->
    <h1 class=" text-2xl italic font-bold text-center mb-4">
        Customize Vehicle
    </h1>

    <Tile src="./assets/svg/parts/key.svg">
        <span>{vehicle.year} {vehicle.make} {vehicle.model}</span>
    </Tile>
    <div class="mt-2">
        <div class="grid grid-cols-3 gap-2 mb-2">
            <Tile box={true} src="./assets/svg/parts/turbo.svg" />
            <Tile box={true} src="./assets/svg/parts/tire.svg" />
            <Tile box={true} src="./assets/svg/parts/shocks.svg" />
        </div>
        <div class="grid grid-cols-3 gap-2">
            <Tile box={true} src="./assets/svg/parts/wheels.svg" />
            <Tile box={true} src="./assets/svg/parts/exhaust.svg" />
            <Tile box={true} src="./assets/svg/parts/brakes.svg" />
        </div>
    </div>
</Page>
