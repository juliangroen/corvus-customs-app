<script>
    import { onMount } from 'svelte';
    import { appData } from '../../stores';
    import Page from '../shared/Page.svelte';
    $: partCategory = $appData.category;
    $: categoryTitle = '';
    $: name = '';
    $: model = '';
    $: nameError = null;
    $: modelError = null;
    onMount(() => {
        categoryTitle = `${partCategory.charAt(0).toUpperCase()}${partCategory.substr(1, partCategory.length - 2)}`;
    });
</script>

<style>
</style>

<Page>
    <h1 class=" text-2xl italic font-bold text-center mb-4">Add New {categoryTitle}</h1>
    <form class="grid grid-col-1 gap-2" on:submit|preventDefault={() => ($appData.view = 'PartSearch')}>
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
            placeholder="please enter a name" />
        {#if nameError}<span class="text-red-300 italic mx-auto">Validation Message</span>{/if}
        <label class="font-bold" for="model-number">Model Number:</label>
        <input
            class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
            type="text"
            name="model-number"
            placeholder="please enter a model number" />
        {#if modelError}<span class="text-red-300 italic mx-auto">Validation Message</span>{/if}
        <button class="bg-gray-600 rounded-full text-white w-1/2 p-2 mx-auto">SUBMIT</button>
    </form>
</Page>
