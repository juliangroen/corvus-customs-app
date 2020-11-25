<script>
    import VehicleFactory from '../../models/VehicleFactory';

    import { appData, parts, vehicles } from '../../stores';
    import Page from '../shared/Page.svelte';
    import Tile from '../shared/Tile.svelte';
    const testVehicle = VehicleFactory.createVehicle({
        year: '2020',
        make: 'Lorem',
        model: 'Ipsum',
    });
    $: listView = true;
    $: currentReport = null;

    const handleBack = () => {
        if (listView) {
            $appData.view = 'Vehicles';
        } else {
            listView = true;
        }
    };

    const handleSelect = (target) => {
        listView = false;
        currentReport = target;
    };
</script>

<style>
</style>

<Page topLeft on:tlClick={handleBack}>
    {#if listView}
        <h1 class=" text-2xl italic font-bold text-center mb-4">Reports</h1>
        <section class="grid grid-cols-1 gap-2 mb-2">
            <Tile
                src="../assets/svg/cubes.svg"
                on:click={() => handleSelect('allVehicles')}>
                <span> View All Vehicles </span>
            </Tile>
            <Tile
                src="../assets/svg/cubes.svg"
                on:click={() => handleSelect('allParts')}>
                <span> View All Parts </span>
            </Tile>
        </section>
    {:else if currentReport === 'allVehicles'}
        <section class="flex">
            <!-- id | year | make | model | tires | chargers | wheels | shocks | brakes | exhausts  -->
            <div class="flex flex-col space-y-1">
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    <span class="opacity-0">SPACER</span>
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    ID
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    YEAR
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    MAKE
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    MODEL
                </div>
                <!-- <div
                    class="col-span-1 bg-gray-600 rounded-lg text-white text-center p-2">
                    <img
                        class=""
                        src="../assets/svg/cubes.svg"
                        alt="Part Icon" />
                </div> -->
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    Tires
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    Chargers
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    Wheels
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    Shocks
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    Brakes
                </div>
                <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    Exhausts
                </div>
            </div>
        </section>
        <div>All Vehicles</div>
    {:else if currentReport === 'allParts'}
        <section class="grid grid-cols-1 gap-2 mb-2">
            <div>All Parts</div>
        </section>
    {/if}
</Page>
<!-- <div class="grid grid-cols-1 gap-4">
    <div>Vehicles:</div>
    {#each $vehicles as item}
        <div>{item.getModel()}</div>
    {/each}

    <div>Parts:</div>

    {#each $parts as item}
        <div>{item.getName()}</div>
    {/each}
</div> -->
