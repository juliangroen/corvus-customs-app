<script>
    import { appData } from '../../stores';
    import AddVehicle from './AddVehicle.svelte';
    export let topLeft = {};
    export let topRight = {};
    export let bottomLeft = {};
    export let bottomRight = {};

    $: topLeftButton = { visible: true, text: 'BACK', color: 'gray-600', target: '', ...topLeft };
    $: topRightButton = { visible: false, text: 'ADD', color: 'gray-600', target: '', ...topRight };
    $: bottomLeftButton = { visible: false, text: 'DELETE', color: 'red-400', target: '', ...bottomLeft };
    $: bottomRightButton = { visible: true, text: 'SAVE', color: 'gray-600', target: '', ...bottomRight };
    $: topRow = topLeftButton.visible || topRightButton.visible ? true : false;
    $: bottomRow = bottomLeftButton.visible || bottomRightButton.visible ? true : false;
</script>

<style>
</style>

<!-- Top Row Buttons -->
{#if topRow}
    <div class="relative h-10 mb-2">
        <!-- Left Button -->
        {#if topLeftButton.visible}
            <span
                class="absolute left-0 cursor-pointer bg-{topLeftButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => ($appData.view = topLeft.target)}>{topLeftButton.text}</span>
        {/if}
        <!-- Right Button -->
        {#if topRightButton.visible}
            <span
                class="absolute right-0 cursor-pointer bg-{topRightButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => ($appData.view = topRight.target)}>{topRightButton.text}</span>
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
        {#if bottomLeftButton.visible}
            <span
                class="absolute left-0 cursor-pointer bg-{bottomLeftButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => ($appData.view = bottomLeft.target)}>{bottomLeftButton.text}</span>
        {/if}
        <!-- Right Button -->
        {#if bottomRightButton.visible}
            <span
                class="absolute right-0 cursor-pointer bg-{bottomRightButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => ($appData.view = bottomRight.target)}>{bottomRightButton.text}</span>
        {/if}
    </div>
{/if}
