<script>
    export let src = false;
</script>

<div
    class="grid grid-cols-5 gap-2 items-center cursor-pointer bg-gray-600 rounded-lg text-white h-16">
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
