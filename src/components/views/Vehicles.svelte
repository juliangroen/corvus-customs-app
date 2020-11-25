<script>
    import { firebaseGetItem } from '../../firebase';
    import VehicleFactory from '../../models/VehicleFactory';
    import { appData, modal, vehicles } from '../../stores';
    import Tile from '../shared/Tile.svelte';

    const selectVehicle = async (vehicle) => {
        $appData.loading = true;
        let changed = vehicle.dbObject();
        await Promise.all(
            Object.entries(changed.parts).map(async (item) => {
                const [key, value] = item;
                if (value !== null) {
                    const part = await firebaseGetItem('parts', value);
                    if (part.data() !== undefined) {
                        changed.parts[key] = part.data().id;
                    } else {
                        changed.parts[key] = null;
                    }
                } else {
                    changed.parts[key] = null;
                }
            })
        )
            .then(() => {
                $appData.loading = false;
                $appData.vehicle = VehicleFactory.createVehicle(changed);
                $appData.view = 'EditVehicle';
            })
            .catch((e) => {
                console.log(e);
            });
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
    {#each $vehicles as vehicle}
        <Tile src="../assets/svg/parts/key.svg" on:click={selectVehicle(vehicle)}>
            <span> {vehicle.getYear()} {vehicle.getMake()} {vehicle.getModel()} </span>
        </Tile>
    {/each}
</section>

<Tile src="../assets/svg/plus-white.svg" on:click={handleAddVehicle}><span>Add New Vehicle</span></Tile>
