<script>
    export let src = false;
    export let box = false;
    export let empty = false;
</script>

{#if box}
    <div class="grid grid-cols-1 col-span-1 bg-gray-400 rounded-lg cursor-pointer h-24 p-4" on:click>
        {#if src}<img class="h-full m-auto {empty ? 'opacity-25' : null}" {src} alt="" />{/if}
    </div>
{:else}
    <div class="grid grid-cols-5 gap-2 items-center cursor-pointer bg-gray-400 rounded-lg text-white h-16" on:click>
        <div class="grid items-center justify-center col-span-1 rounded-l-lg bg-gray-300 h-full p-2">
            {#if src}<img class="w-12 h-full" {src} alt="Tile Icon" />{/if}
        </div>

        <div class="col-span-4 p-2">
            <slot>Tile Text</slot>
        </div>
    </div>
{/if}
