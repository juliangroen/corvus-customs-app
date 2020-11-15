<script>
    import { firebaseSignOut } from '../../firebase';
    import { appData } from '../../stores';
    import Header from '../shared/Header.svelte';

    export let links = [
        { name: 'vehicles', link: 'Vehicles' },
        { name: 'parts', link: 'PartsList' },
        { name: 'reports', link: 'AdminReports' },
    ];
    const handleSignIn = () => {
        $appData.view = 'UserLogin';
        $appData.menuIsOpen = !$appData.menuIsOpen;
    };
    const handleSignOut = () => {
        firebaseSignOut();
        $appData.menuIsOpen = !$appData.menuIsOpen;
    };
</script>

<style>
    .xs {
        font-size: 8px;
    }
</style>

<div
    class="absolute inset-0 z-50 bg-gray-600 text-white text-3xl tracking-wider text-center w-full h-full">
    <Header />
    <section class="mt-8">
        {#each links as link}
            <div class="cursor-pointer mb-8">{link.name.toUpperCase()}</div>
        {/each}
    </section>
    <footer class="absolute bottom-0 w-full h-24">
        {#if $appData.user}
            <div class="absolute bg-indigo-200 rounded-full w-12 h-12 ml-8" />
            <div class="cursor-pointer" on:click={handleSignOut}>SIGN OUT</div>
        {:else}
            <div class="cursor-pointer" on:click={handleSignIn}>SIGN IN</div>
        {/if}
        <div class="xs absolute bottom-0 text-center text-gray-400 w-full mb-3">
            <div>©2020 Corvus Customs</div>
            <span>Icons made by</span>
            <a
                class="text-gray-200"
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik">Freepik</a>
            from
            <a
                class="text-gray-200"
                href="https://www.flaticon.com/"
                title="Flaticon">
                www.flaticon.com</a>
        </div>
    </footer>
</div>
