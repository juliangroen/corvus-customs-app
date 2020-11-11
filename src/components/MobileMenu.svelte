<script>
    import Header from './Header.svelte';
    export let links = [
        { name: 'vehicles', link: 'Vehicles' },
        { name: 'parts', link: 'PartsList' },
        { name: 'reports', link: 'AdminReports' },
    ];
</script>

<style>
</style>

<div class="absolute inset-0 z-50 bg-gray-600 text-white text-3xl tracking-wider text-center w-full h-full">
    <Header menuClicked={true} />
    <section class="mt-8">
        {#each links as link}
            <div class="cursor-pointer mb-8">{link.name.toUpperCase()}</div>
        {/each}
    </section>
    <footer class="absolute bottom-0 w-full h-20">
        <div class="absolute bg-indigo-200 rounded-full w-12 h-12 ml-8" />
        <div>SIGN OUT</div>
    </footer>
</div>
