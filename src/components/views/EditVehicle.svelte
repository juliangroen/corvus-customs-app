<script>
    import { appData } from '../../stores';
    import Tile from '../shared/Tile.svelte';
</script>

<style>
</style>

<!-- Main Heading -->
<h1 class=" text-2xl italic font-bold text-center mb-4">Customize Vehicle</h1>

<Tile src="./assets/svg/parts/key.svg"><span>Vehicle Name</span></Tile>
<div class="mt-2">
    <div class="grid grid-cols-3 gap-2 mb-2">
        <Tile box={true} src="./assets/svg/parts/turbo.svg" />
        <Tile box={true} src="./assets/svg/parts/tire.svg" />
        <Tile box={true} src="./assets/svg/parts/shocks.svg" />
    </div>
    <div class="grid grid-cols-3 gap-2">
        <Tile box={true} src="./assets/svg/parts/wheels.svg" />
        <Tile box={true} src="./assets/svg/parts/exhaust.svg" />
        <Tile box={true} src="./assets/svg/parts/brakes.svg" />
    </div>
</div>
