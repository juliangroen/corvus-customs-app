<script>
    import Modal from '../shared/Modal.svelte';
</script>

<style>
</style>

<h1 class=" text-2xl italic font-bold text-center mb-4">Add New Vehicle</h1>
<form class="grid grid-col-1 gap-2" on:submit|preventDefault>
    <label class="font-bold" for="year">Year:</label>
    <input
        class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
        type="text"
        name="year"
        placeholder="please enter a year" />
    <span class="text-red-300 italic mx-auto">Validation Message</span>
    <label class="font-bold" for="make">Make:</label>
    <input
        class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
        type="text"
        name="make"
        placeholder="please enter a make" />
    <span class="text-red-300 italic mx-auto">Validation Message</span>
    <label class="font-bold" for="model">Model:</label>
    <input
        class="bg-white rounded-full placeholder-gray-300 border-2 border-transparent focus:outline-none focus:border-gray-400 px-4 py-2"
        type="text"
        name="model"
        placeholder="please enter a model" />
    <span class="text-red-300 italic mx-auto">Validation Message</span>
    <button class="bg-gray-600 rounded-full text-white w-1/2 p-2 mx-auto">SUBMIT</button>
</form>
