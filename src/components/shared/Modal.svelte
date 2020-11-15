<script>
    import { appData } from '../../stores';
    export let closeTarget = '';
    export let bottomLeft = null;
    export let bottomRight = null;
    $: bottomLeftButton = {
        text: 'DELETE',
        color: 'red-400',
        target: '',
        ...bottomLeft,
    };
    $: bottomRightButton = {
        text: 'SELECT',
        color: 'gray-600',
        target: '',
        ...bottomRight,
    };
    $: bottomRow = bottomLeft || bottomRight ? true : false;
</script>

<style>
</style>

<!-- top button row -->

<div class="relative h-10 mb-2">
    <span
        class="absolute right-0 cursor-pointer bg-gray-600 text-white text-center leading-10 rounded-full w-10"
        on:click={() => ($appData.view = closeTarget)}>X</span>
</div>

<!-- main content -->

<section class="mb-2">
    <slot />
</section>

{#if bottomRow}
    <div class="relative h-10 mb-2">
        <!-- Left Button -->
        {#if bottomLeft}
            <span
                class="absolute left-0 cursor-pointer bg-{bottomLeftButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => ($appData.view = bottomLeft.target)}>{bottomLeftButton.text}</span>
        {/if}
        <!-- Right Button -->
        {#if bottomRight}
            <span
                class="absolute right-0 cursor-pointer bg-{bottomRightButton.color} text-white text-center leading-10 rounded-full w-1/4"
                on:click={() => ($appData.view = bottomRight.target)}>{bottomRightButton.text}</span>
        {/if}
    </div>
{/if}
