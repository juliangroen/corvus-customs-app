<script>
    import { appData } from '../../stores';
    import TileHolder from '../shared/TileHolder.svelte';
</script>

<style>
</style>

<!-- Main Heading -->
<h1 class=" text-2xl italic font-bold text-center mb-4">Welcome {$appData.user.name}</h1>

<TileHolder>
    <h3 class="text-center mb-2">Your Custom Vehicles</h3>
</TileHolder>
