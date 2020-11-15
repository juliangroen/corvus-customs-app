<script>
    import Page from '../shared/Page.svelte';
    import SearchBar from '../shared/SearchBar.svelte';
    import TileHolder from '../shared/TileHolder.svelte';
    let results = [
        { src: '../assets/svg/parts/wheels.svg', text: 'Search Result Text' },
        { src: '../assets/svg/parts/wheels.svg', text: 'Search Result Text' },
        { src: '../assets/svg/parts/wheels.svg', text: 'Search Result Text' },
        { src: '../assets/svg/parts/wheels.svg', text: 'Search Result Text' },
        { src: '../assets/svg/parts/wheels.svg', text: 'Search Result Text' },
        { src: '../assets/svg/parts/wheels.svg', text: 'Search Result Text' },
        { src: '../assets/svg/parts/wheels.svg', text: 'Search Result Text' },
        { src: '../assets/svg/parts/wheels.svg', text: 'Search Result Text' },
    ];
</script>

<style>
</style>

<Page topLeft topRight={{ target: 'AddPart' }}>
    <!-- Main Heading -->
    <h1 class=" text-2xl italic font-bold text-center mb-4">
        Select a partCategory
    </h1>

    <SearchBar />
    <TileHolder tiles={results} />
</Page>
