<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let src = false;
    export let box = false;
    const handleClick = () => dispatch('handleClick');
</script>

{#if box}
    <div
        class="grid grid-cols-1 col-span-1 bg-gray-600 rounded-lg cursor-pointer h-24 p-4"
        on:click={handleClick}>
        {#if src}<img class="h-full m-auto" {src} alt="" />{/if}
    </div>
{:else}
    <div
        class="grid grid-cols-5 gap-2 items-center cursor-pointer bg-gray-600 rounded-lg text-white h-16"
        on:click={handleClick}>
        <div
            class="grid items-center justify-center col-span-1 rounded-l-lg bg-gray-500 h-full">
            {#if src}
                <div class="grid col-span-1 items-center justify-center">
                    <img class="w-12" {src} alt="Tile Icon" />
                </div>
            {/if}
        </div>

        <div class="col-span-4 p-2">
            <slot>Tile Text</slot>
        </div>
    </div>
{/if}
