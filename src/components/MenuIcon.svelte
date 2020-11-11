<script>
    export let size = '32';
    export let clicked = false;
    $: container = `width: ${size}px; height: ${size}px;`;
    $: bar = () => {
        let bar = size / 8;
        return `height: ${bar}px; margin-bottom: ${bar * 2}px;`;
    };
    $: cross = () => {
        let bar = size / 8;
        return `height: ${bar}px; width: ${size}px;`;
    };
</script>

<style>
</style>

{#if clicked == false}
    <div class="cursor-pointer" style={container}>
        <div class="bg-white rounded-full w-full" style={bar()} />
        <div class="bg-white rounded-full w-full" style={bar()} />
        <div class="bg-white rounded-full w-full" style={bar()} />
    </div>
{:else}
    <div class="relative cursor-pointer" style={container}>
        <div class="absolute inset-0 m-auto bg-white rounded-full transform rotate-45" style={cross()} />
        <div class="absolute inset-0 m-auto bg-white rounded-full transform -rotate-45" style={cross()} />
    </div>
{/if}
