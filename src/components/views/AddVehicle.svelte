<script>
    import { appData, modal } from '../../stores';
    import VehicleFactory from '../../models/VehicleFactory';
    import { firebaseAddVehicle, firebaseSetItem } from '../../firebase';
    import Page from '../shared/Page.svelte';
    import { onDestroy, onMount } from 'svelte';
    $: editMode = $appData.vehicleEdit;
    $: year = '';
    $: make = '';
    $: model = '';
    $: yearError = null;
    $: makeError = null;
    $: modelError = null;
    $: newObj = {
        year: year.trim(),
        make: make.trim(),
        model: model.trim(),
    };

    const validateYear = () => {
        yearError = null;
        let pass = true;
        if (year === '') {
            pass = false;
            yearError = 'Please enter a year for your vehicle';
        } else {
            const pattern = '^[1-9][0-9]{3}$';
            if (!year.match(pattern)) {
                pass = false;
                yearError = 'Please enter a valid year (YYYY)';
            }
        }
        return pass;
    };

    const validateMake = () => {
        makeError = null;
        let pass = true;
        if (make === '') {
            pass = false;
            makeError = 'Please enter a make for your vehicle';
        }
        return pass;
    };

    const validateModel = () => {
        modelError = null;
        let pass = true;
        if (model === '') {
            pass = false;
            modelError = 'Please enter a model for your vehicle';
        }
        return pass;
    };

    const handleSubmit = async () => {
        if (validateYear()) {
            if (validateMake()) {
                if (validateModel()) {
                    $appData.loading = true;
                    if (editMode) {
                        const editVehicle = VehicleFactory.createVehicle({
                            ...$appData.vehicle.dbObject(),
                            ...newObj,
                        });
                        await firebaseSetItem('vehicles', editVehicle.dbObject())
                            .then(() => {
                                modal.back();
                                $appData.view = 'Vehicles';
                            })
                            .catch((e) => {
                                console.log(e);
                            });
                    } else {
                        const newVehicle = VehicleFactory.createVehicle(newObj);
                        await firebaseAddVehicle(newVehicle.dbObject())
                            .then(() => {
                                modal.back();
                                $appData.view = 'Vehicles';
                            })
                            .catch((e) => {
                                console.log(e);
                            });
                    }
                    $appData.loading = false;
                }
            }
        }
    };

    onMount(() => {
        if (editMode) {
            const vehicle = $appData.vehicle.dbObject();
            year = vehicle.year;
            make = vehicle.make;
            model = vehicle.model;
        }
    });
    onDestroy(() => {
        $appData.vehicleEdit = false;
    });
</script>

<style>
</style>

<Page topLeft on:tlClick={() => modal.back()}>
    {#if editMode}
        <h1 class=" text-2xl italic font-bold text-center mb-4">Edit Vehicle</h1>
    {:else}
        <h1 class=" text-2xl italic font-bold text-center mb-4">Add New Vehicle</h1>
    {/if}
    <form class="grid grid-col-1 gap-4" on:submit|preventDefault={handleSubmit}>
        <label class="font-bold" for="year">Year:</label>
        <input
            class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
            type="text"
            name="year"
            bind:value={year}
            on:change={validateYear}
            placeholder="please enter a year" />
        {#if yearError}<span class="text-red-300 italic mx-auto">{yearError}</span>{/if}
        <label class="font-bold" for="make">Make:</label>
        <input
            class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
            type="text"
            name="make"
            bind:value={make}
            on:change={validateMake}
            placeholder="please enter a make" />
        {#if makeError}<span class="text-red-300 italic mx-auto">{makeError}</span>{/if}
        <label class="font-bold" for="model">Model:</label>
        <input
            class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
            type="text"
            name="model"
            bind:value={model}
            on:change={validateModel}
            placeholder="please enter a model" />
        {#if modelError}<span class="text-red-300 italic mx-auto">{modelError}</span>{/if}
        <button class="bg-gray-600 rounded-full text-white w-1/2 p-2 mx-auto">SUBMIT</button>
    </form>
</Page>
