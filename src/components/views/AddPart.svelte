<script>
    import { appData } from '../../stores';
    import Modal from '../shared/Modal.svelte';
    export let partCategory = null;
</script>

<style>
</style>

<Modal>
    <h1 class=" text-2xl italic font-bold text-center mb-4">
        Add New
        {partCategory}
    </h1>
    <form
        class="grid grid-col-1 gap-2"
        on:submit|preventDefault={() => ($appData.view = 'PartSearch')}>
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
        <span class="text-red-300 italic mx-auto">Validation Message</span>
        <label class="font-bold" for="model-number">Model Number:</label>
        <input
            class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
            type="text"
            name="model-number"
            placeholder="please enter a model number" />
        <span class="text-red-300 italic mx-auto">Validation Message</span>
        <button
            class="bg-gray-600 rounded-full text-white w-1/2 p-2 mx-auto">SUBMIT</button>
    </form>
</Modal>
