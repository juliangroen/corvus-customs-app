<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let topLeft = null;
    export let topRight = null;
    export let bottomLeft = null;
    export let bottomRight = null;

    $: topLeftButton = {
        text: 'BACK',
        color: 'gray-600',
        ...topLeft,
    };
    $: topRightButton = {
        text: 'ADD',
        color: 'gray-600',
        ...topRight,
    };
    $: bottomLeftButton = {
        text: 'DELETE',
        color: 'red-400',
        ...bottomLeft,
    };
    $: bottomRightButton = {
        text: 'SAVE',
        color: 'gray-600',
        ...bottomRight,
    };
    $: topRow = topLeft || topRight ? true : false;
    $: bottomRow = bottomLeft || bottomRight ? true : false;
</script>

<style>
</style>

<!-- Top Row Buttons -->
{#if topRow}
    <div class="relative h-10 mb-4">
        <!-- Left Button -->
        {#if topLeft}
            <span
                class="absolute left-0 cursor-pointer bg-{topLeftButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => dispatch('tlClick')}>{topLeftButton.text}</span>
        {/if}
        <!-- Right Button -->
        {#if topRight}
            <span
                class="absolute right-0 cursor-pointer bg-{topRightButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => dispatch('trClick')}>{topRightButton.text}</span>
        {/if}
    </div>
{/if}

<!-- Main Content -->
<section class="mb-2">
    <slot />
</section>

<!-- Bottom Row Buttons -->

{#if bottomRow}
    <div class="relative h-10 mb-2">
        <!-- Left Button -->
        {#if bottomLeft}
            <span
                class="absolute left-0 cursor-pointer bg-{bottomLeftButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => dispatch('blClick')}>{bottomLeftButton.text}</span>
        {/if}
        <!-- Right Button -->
        {#if bottomRight}
            <span
                class="absolute right-0 cursor-pointer bg-{bottomRightButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => dispatch('brClick')}>{bottomRightButton.text}</span>
        {/if}
    </div>
{/if}
