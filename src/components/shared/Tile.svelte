<script>
    export let icon = false;
</script>

<div class="grid grid-cols-5 gap-2 items-center bg-gray-600 rounded-lg text-white h-16 p-2">
    {#if icon == false}
        <div class="col-span-1 bg-gray-500 rounded-full w-12 h-12" />
    {:else}
        <div class="grid col-span-1 items-center justify-center  w-12 h-12">
            <slot name="icon" />
        </div>
    {/if}
    <div class="col-span-4">
        <slot>Tile Text</slot>
    </div>
</div>
