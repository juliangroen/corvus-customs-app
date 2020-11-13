<script>
    import { appData } from '../../stores';
    import Tile from '../shared/Tile.svelte';
    import TileHolder from '../shared/TileHolder.svelte';
</script>

<style>
</style>

<!-- Main Heading -->
<h1 class=" text-2xl italic font-bold text-center mb-4">
    Welcome
    {$appData.user.name}
</h1>

<TileHolder>
    <h3 class="text-center mb-2">Your Custom Vehicles</h3>
</TileHolder>
<Tile
    src="../assets/svg/plus-white.svg"
    on:handleClick={() => ($appData.view = 'AddVehicle')}>
    <span>Add New Vehicle</span>
</Tile>
