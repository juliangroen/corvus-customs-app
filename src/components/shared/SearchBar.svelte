<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    $: query = '';
    const handleClick = () => dispatch('handleSearch', query.trim());
</script>

<style>
</style>

<form class="relative mb-2" on:submit|preventDefault={handleClick}>
    <input
        class=" rounded-r-3xl rounded-l-lg w-full pl-2 pr-24 py-2"
        type="search"
        bind:value={query}
        placeholder="enter your search" />
    <button class="absolute right-0 bg-gray-600 text-white rounded-full px-4 py-2">SEARCH</button>
</form>
