<script>
    import { appData } from '../../stores';
    export let closeTarget = '';
</script>

<style>
</style>

<!-- top button row -->

<div class="relative h-8 mb-2">
    <span
        class="absolute right-0 cursor-pointer bg-gray-600 text-white text-center leading-10 rounded-full w-10"
        on:click={() => ($appData.view = closeTarget)}>X</span>
</div>

<!-- main content -->

<section>
    <slot />
</section>
