<script>
    import VehicleFactory from '../../models/VehicleFactory';
    import { appData, parts, vehicles } from '../../stores';
    import Page from '../shared/Page.svelte';
    import Tile from '../shared/Tile.svelte';
    import GenerateParts from './GenerateParts.svelte';
    const testVehicles = [
        VehicleFactory.createVehicle({
            year: '2020',
            make: 'Lorem',
            model: 'Ipsum',
            parts: {
                tires: '1604983672865',
                chargers: '1605932042700',
                wheels: '1605934221884',
                shocks: '1606187382788',
                brakes: '1605935944370',
                exhausts: '1605935952906',
            },
        }),
        VehicleFactory.createVehicle({
            year: '2020',
            make: 'Lorem',
            model: 'Ipsum',
            parts: {
                tires: '1604983672865',
                chargers: '1605932042700',
                wheels: '1605934221884',
                shocks: '1606187382788',
                brakes: '1605935944370',
                exhausts: '1605935952906',
            },
        }),
        VehicleFactory.createVehicle({
            year: '2020',
            make: 'Lorem',
            model: 'Ipsum',
            parts: {
                tires: '1604983672865',
                chargers: '1605932042700',
                wheels: '1605934221884',
                shocks: '1606187382788',
                brakes: '1605935944370',
                exhausts: '1605935952906',
            },
        }),
        VehicleFactory.createVehicle({
            year: '2020',
            make: 'Lorem',
            model: 'Ipsum',
            parts: {
                tires: '1604983672865',
                chargers: '1605932042700',
                wheels: '1605934221884',
                shocks: '1606187382788',
                brakes: '1605935944370',
                exhausts: '1605935952906',
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
        return new Date(new Date().getTime()).toString();
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
        </section>
    {:else if currentReport === 'allVehicles'}
        <h1 class="text-xl italic font-bold text-center mb-2">
            All Vehicles in Database
        </h1>
        <h2 class="text-sm text-center mb-4">Generated: {currentDateTime()}</h2>
        <section class="flex space-x-1 text-sm max-w-xl overflow-x-auto">
            <div class="flex flex-col space-y-1 w-24">
                {#each rowHeaders as item}
                    <div
                        class="bg-gray-600 rounded-lg text-white text-center h-8 px-1">
                        <span class="leading-8">{item}</span>
                    </div>
                {/each}
            </div>

            {#each $vehicles as vehicle}
                <div class="flex flex-col space-y-1 w-32">
                    <div
                        class="bg-white rounded-lg text-xs text-center h-8 px-1">
                        <span class="leading-8">{vehicle.getId()}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span class="leading-8">{vehicle.getYear()}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span class="leading-8">{vehicle.getMake()}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span class="leading-8">{vehicle.getModel()}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span
                            class="leading-8">{lookupModel(vehicle.getParts().tires)}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span
                            class="leading-8">{lookupModel(vehicle.getParts().chargers)}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span
                            class="leading-8">{lookupModel(vehicle.getParts().wheels)}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span
                            class="leading-8">{lookupModel(vehicle.getParts().shocks)}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span
                            class="leading-8">{lookupModel(vehicle.getParts().brakes)}</span>
                    </div>
                    <div class="bg-white rounded-lg text-center h-8 px-1">
                        <span
                            class="leading-8">{lookupModel(vehicle.getParts().exhausts)}</span>
                    </div>
                </div>
            {/each}
        </section>
    {/if}
</Page>
