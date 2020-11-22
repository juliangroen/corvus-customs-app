<script>
    import { appData, modal, parts } from '../../stores';
    import Page from '../shared/Page.svelte';
    import SearchBar from '../shared/SearchBar.svelte';
    import Tile from '../shared/Tile.svelte';

    $: category = $appData.category;
    $: filtered = $parts.filter((part) => part.getCategory() === category);
    $: searchActive = false;

    const handlePartClick = (part) => {
        $appData.part = part;
        modal.setContent('ViewPart');
    };

    const clearSearch = () => {
        searchActive = false;
        filtered = $parts.filter((part) => part.getCategory() === category);
    };

    const handleSearch = (event) => {
        clearSearch();
        const query = event.detail;
        filtered = filtered.filter((part) => part.getName().toLowerCase().includes(query.toLowerCase()));
        searchActive = true;
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

<Page topLeft on:tlClick={() => modal.back()}>
    <!-- Main Heading -->
    <h1 class=" text-2xl italic font-bold text-center mb-4">Select {title()}</h1>

    <SearchBar on:handleSearch={handleSearch} />

    <div class="grid grid-cols-1 gap-2 mb-2">
        {#if searchActive}
            <div class="bg-gray-400 text-center rounded-full cursor-pointer p-4" on:click={clearSearch}>
                CLEAR SEARCH
            </div>
        {/if}
        {#each filtered as part}
            <Tile src="../assets/svg/parts/{part.getCategory()}.svg" on:click={() => handlePartClick(part)}>
                {part.getName()}
            </Tile>
        {/each}
    </div>
</Page>
