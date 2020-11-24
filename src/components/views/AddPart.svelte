<script>
    import { onMount } from 'svelte';
    import { appData, modal } from '../../stores';
    import Page from '../shared/Page.svelte';

    $: partCategory = $appData.category;
    // Used by all categories:
    $: categoryTitle = '';
    $: name = '';
    $: nameError = null;
    $: model = '';
    $: modelError = null;

    // Used by Tires, Chargers, Shocks, and Exhausts:
    $: type = '';
    $: typeError = null;

    // Used by Chargers:
    $: boost = '';
    $: boostError = null;

    // Used by Wheels:
    $: size = '';
    $: sizeError = null;

    // Used by Brakes:
    $: rotor = '';
    $: rotorError = null;
    $: caliper = '';
    $: caliperError = null;

    const validateName = () => {
        nameError = null;
        let pass = true;
        if (name === '') {
            pass = false;
            nameError = 'Please enter a name for the part';
        }
        return pass;
    };

    const validateModel = () => {
        modelError = null;
        let pass = true;
        if (model === '') {
            pass = false;
            modelError = 'Please enter a model number for the part';
        }
        return pass;
    };

    const validateType = () => {
        typeError = null;
        let pass = true;
        if (type === '') {
            pass = false;
            typeError = 'Please enter a type for the part';
        }
        return pass;
    };

    const validateBoost = () => {
        boostError = null;
        let pass = true;
        if (boost === '') {
            pass = false;
            boostError = 'Please enter a boost amount for the part';
        }
        return pass;
    };

    const validateSize = () => {
        sizeError = null;
        let pass = true;
        if (size === '') {
            pass = false;
            sizeError = 'Please enter a size for the part';
        }
        return pass;
    };

    const validateRotor = () => {
        rotorError = null;
        let pass = true;
        if (rotor === '') {
            pass = false;
            rotorError = 'Please enter a rotor type for the part';
        }
        return pass;
    };

    const validateCaliper = () => {
        caliperError = null;
        let pass = true;
        if (caliper === '') {
            pass = false;
            caliperError = 'Please enter a caliper type for the part';
        }
        return pass;
    };

    const handleSubmit = () => {
        if (validateName()) {
            if (validateModel()) {
                switch (partCategory) {
                    case 'tires':
                        if (validateType()) {
                            alert('submitted');
                        }
                        break;

                    case 'chargers':
                        if (validateType()) {
                            if (validateBoost()) {
                                // submit
                                alert('submitted');
                            }
                        }
                        break;

                    case 'wheels':
                        if (validateSize()) {
                            // submit
                            alert('submitted');
                        }
                        break;

                    case 'shocks':
                        if (validateType()) {
                            // submit
                            alert('submitted');
                        }
                        break;

                    case 'brakes':
                        if (validateRotor()) {
                            if (validateCaliper()) {
                                // submit
                                alert('submitted');
                            }
                        }
                        break;

                    case 'exhausts':
                        if (validateType()) {
                            // submit
                            alert('submitted');
                        }
                        break;

                    default:
                        break;
                }
            }
        }
    };

    onMount(() => {
        categoryTitle = `${partCategory.charAt(0).toUpperCase()}${partCategory.substr(1, partCategory.length - 2)}`;
    });
</script>

<style>
</style>

<Page
    topLeft
    on:tlClick={() => {
        modal.back();
    }}>
    <h1 class=" text-2xl italic font-bold text-center mb-4">Add New {categoryTitle}</h1>
    <form class="grid grid-col-1 gap-2" on:submit|preventDefault={handleSubmit}>
        <label class="font-bold" for="category">Category:</label>
        <input
            class="bg-gray-300 rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
            type="text"
            name="category"
            bind:value={partCategory}
            disabled />

        <label class="font-bold" for="name">Name:</label>
        <input
            class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
            type="text"
            name="name"
            bind:value={name}
            on:change={validateName}
            placeholder="please enter a name" />
        {#if nameError}<span class="text-red-300 italic mx-auto">{nameError}</span>{/if}

        <label class="font-bold" for="model-number">Model Number:</label>
        <input
            class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
            type="text"
            name="model-number"
            bind:value={model}
            on:change={validateModel}
            placeholder="please enter a model number" />
        {#if modelError}<span class="text-red-300 italic mx-auto">{modelError}</span>{/if}

        {#if partCategory === 'tires' || partCategory === 'chargers' || partCategory === 'shocks' || partCategory === 'exhausts'}
            <label class="font-bold" for="type">Type:</label>
            <input
                class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
                type="text"
                name="type"
                bind:value={type}
                on:change={validateType}
                placeholder="please enter a type" />
            {#if typeError}<span class="text-red-300 italic mx-auto">{typeError}</span>{/if}
        {/if}

        {#if partCategory === 'chargers'}
            <label class="font-bold" for="boost">Boost:</label>
            <input
                class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
                type="text"
                name="boost"
                bind:value={boost}
                on:change={validateBoost}
                placeholder="please enter a boost amount" />
            {#if boostError}<span class="text-red-300 italic mx-auto">{boostError}</span>{/if}
        {/if}

        {#if partCategory === 'wheels'}
            <label class="font-bold" for="size">Size:</label>
            <input
                class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
                type="text"
                name="size"
                bind:value={size}
                on:change={validateSize}
                placeholder="please enter a size" />
            {#if sizeError}<span class="text-red-300 italic mx-auto">{sizeError}</span>{/if}
        {/if}

        {#if partCategory === 'brakes'}
            <label class="font-bold" for="rotor">Rotor Type:</label>
            <input
                class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
                type="text"
                name="rotor"
                bind:value={rotor}
                on:change={validateRotor}
                placeholder="please enter a rotor type" />
            {#if rotorError}<span class="text-red-300 italic mx-auto">{rotorError}</span>{/if}

            <label class="font-bold" for="caliper">Caliper Type:</label>
            <input
                class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
                type="text"
                name="caliper"
                bind:value={caliper}
                on:change={validateCaliper}
                placeholder="please enter a caliper type" />
            {#if caliperError}<span class="text-red-300 italic mx-auto">{caliperError}</span>{/if}
        {/if}
        <button class="bg-gray-600 rounded-full text-white w-1/2 p-2 mx-auto">SUBMIT</button>
    </form>
</Page>
