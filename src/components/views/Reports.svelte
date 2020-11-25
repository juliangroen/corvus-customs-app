<script>
    import VehicleFactory from '../../models/VehicleFactory';
    import { appData, parts, vehicles } from '../../stores';
    import Page from '../shared/Page.svelte';
    import Tile from '../shared/Tile.svelte';
    const testVehicles = [
        VehicleFactory.createVehicle({
            year: '2020',
            make: 'Lorem',
            model: 'Ipsum',
            parts: {
                tires: '1605932042704',
                chargers: '1605934207764',
                wheels: '1606187382788',
                shocks: '1605935969491',
                brakes: '1605935944162',
                exhausts: '1604983672865',
            },
        }),
        VehicleFactory.createVehicle({
            year: '2020',
            make: 'Lorem',
            model: 'Ipsum',
            parts: {
                tires: '1605932042704',
                chargers: '1605934207764',
                wheels: '1606187382788',
                shocks: '1605935969491',
                brakes: '1605935944162',
                exhausts: '1604983672865',
            },
        }),
        VehicleFactory.createVehicle({
            year: '2020',
            make: 'Lorem',
            model: 'Ipsum',
            parts: {
                tires: '1605932042704',
                chargers: '1605934207764',
                wheels: '1606187382788',
                shocks: '1605935969491',
                brakes: '1605935944162',
                exhausts: '1604983672865',
            },
        }),
        VehicleFactory.createVehicle({
            year: '2020',
            make: 'Lorem',
            model: 'Ipsum',
            parts: {
                tires: '1605932042704',
                chargers: '1605934207764',
                wheels: '1606187382788',
                shocks: '1605935969491',
                brakes: '1605935944162',
                exhausts: '1604983672865',
            },
        }),
    ];
    $: listView = true;
    $: currentReport = '';
    let rowHeaders = [
        'ID',
        'YEAR',
        'MAKE',
        'MODEL',
        'TIRES',
        'CHARGERS',
        'WHEELS',
        'SHOCKS',
        'BRAKES',
        'EXHAUSTS',
    ];

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

    const currentDateTime = () => {
        return new Date(`${new Date(new Date().getTime()).toString()} UTC`);
    };

    const lookupModel = (id) => {
        let text;
        if (id !== null) {
            try {
                const part = $parts.find((val) => val.getId() === id);
                text = part.getModel();
            } catch (e) {
                console.log(e);
                text = 'Error';
            } finally {
                return text;
            }
        } else {
            text = 'N/A';
            return text;
        }
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
        <h1 class="text-xl italic font-bold text-center mb-2">
            All Vehicles in Database
        </h1>
        <h2 class="text-sm text-center mb-4">Generated: {currentDateTime()}</h2>
        <section class="flex space-x-1 text-sm max-w-xl overflow-x-auto">
            <div class="flex flex-col space-y-1 w-24">
                <!-- <div class="bg-gray-600 rounded-lg text-white text-center p-2">
                    <span class="opacity-0">SPACER</span>
                </div> -->
                {#each rowHeaders as item}
                    <div
                        class="bg-gray-600 rounded-lg text-white text-center h-8 px-1">
                        <span class="leading-8">{item}</span>
                    </div>
                {/each}
            </div>

            {#each testVehicles as vehicle}
                <div class="flex flex-col space-y-1 w-32">
                    {#each Object.entries(vehicle.dbObject()) as [key, value] (key)}
                        {#if key === 'parts'}
                            {#each Object.entries(value) as [pKey, pValue] (pKey)}
                                <div
                                    class="bg-white rounded-lg text-xs text-center h-8 px-1">
                                    <span
                                        class="leading-8">{lookupModel(pValue)}</span>
                                </div>
                            {/each}
                        {:else if key === 'id'}
                            <div
                                class="bg-white rounded-lg text-xs text-center h-8 px-1">
                                <span class="leading-8">{value}</span>
                            </div>
                        {:else}
                            <div
                                class="bg-white rounded-lg text-center h-8 px-1">
                                <span class="leading-8">{value}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/each}
        </section>
    {:else if currentReport === 'allParts'}
        <section class="grid grid-cols-1 gap-2 mb-2">
            <div>All Parts</div>
        </section>
    {/if}
</Page>
<!-- <div
                    class="col-span-1 bg-gray-600 rounded-lg text-white text-center p-2">
                    <img
                        class=""
                        src="../assets/svg/cubes.svg"
                        alt="Part Icon" />
                </div> -->
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
