<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let src = false;
    const handleClick = () => dispatch('handleClick');
</script>

<style>
</style>

<div class="grid grid-cols-3 gap-2 items-center justify-center" on:click={handleClick}>
    <div class="grid-cols-1 col-span-1 bg-gray-400 rounded-lg h-32 p-4">
        {#if src}<img class="h-full m-auto" {src} alt="" />{/if}
    </div>
</div>
