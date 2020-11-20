<script>
    import { onMount } from 'svelte';

    import { appData, modal, parts } from '../../stores';

    import Modal from '../shared/Modal.svelte';
    import SearchBar from '../shared/SearchBar.svelte';
    import Tile from '../shared/Tile.svelte';

    $: category = $appData.category;
    $: filtered = $parts.filter((part) => part.getCategory() === category);

    const handlePartClick = (part) => {
        $appData.part = part;
        modal.setContent('ViewPart');
    };

    const title = () => {
        switch (category) {
            case 'tires':
                return 'a Tire';

            case 'chargers':
                return 'a Charger';

            case 'wheels':
                return 'a Wheel';

            case 'shocks':
                return 'a Shock';

            case 'brakes':
                return 'a Brake';

            case 'exhausts':
                return 'an Exhaust';

            default:
                break;
        }
    };
</script>

<style>
</style>

<Modal>
    <!-- Main Heading -->
    <h1 class=" text-2xl italic font-bold text-center mb-4">
        Select
        {title()}
    </h1>

    <SearchBar />

    <div class="grid grid-cols-1 gap-2 mb-2">
        {#each filtered as part}
            <Tile
                src="../assets/svg/parts/{part.getCategory()}.svg"
                on:click={() => handlePartClick(part)}>
                {part.getName()}
            </Tile>
        {/each}
    </div>
</Modal>
