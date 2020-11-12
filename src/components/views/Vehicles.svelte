<script>
    import { appData } from '../../stores';
    import MenuIcon from '../icons/MenuIcon.svelte';
    import Tile from '../shared/Tile.svelte';
</script>

<style>
</style>

<!-- Main Heading -->
<h1 class=" text-2xl italic font-bold text-center mb-4">Welcome {$appData.user.name}</h1>
<!-- Tiles Heading -->
<section class="grid grid-cols-1 gap-2">
    <h3 class="text-center mb-2">Your Custom Vehicles</h3>
    <Tile>
        <div slot="icon">
            <MenuIcon />
        </div>
        <span>Text Goes Here</span>
    </Tile>
</section>
