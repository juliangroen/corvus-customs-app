<script>
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import { appData, menu, modal } from './stores';
    import AddVehicle from './components/views/AddVehicle.svelte';
    import Header from './components/shared/Header.svelte';
    import MobileMenu from './components/views/MobileMenu.svelte';
    import UserLogin from './components/views/UserLogin.svelte';
    import Tailwindcss from './Tailwindcss.svelte';
    import Vehicles from './components/views/Vehicles.svelte';
    import EditVehicle from './components/views/EditVehicle.svelte';
    import PartSearch from './components/views/PartSearch.svelte';
    import AddPart from './components/views/AddPart.svelte';
    import ViewPart from './components/views/ViewPart.svelte';
    import { onDestroy, onMount } from 'svelte';
    import Reports from './components/views/Reports.svelte';

    // Realtime Firebase User Listener
    let unsubscribe;
    onMount(() => {
        unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                $appData.user = firebaseUser;
                if (firebaseUser.email === 'admin@wgu.edu') {
                    $appData.admin = true;
                }
            } else {
                console.log('not logged in');
                $appData.admin = false;
            }
            $appData.loading = false;
        });
    });
    onDestroy(() => unsubscribe());
</script>

<Tailwindcss />
<Header />
<main class="m-4 max-w-xl mx-auto p-4">
    {#if $menu}
        <MobileMenu />
    {/if}
    {#if $appData.loading}
        <div class="absolute inset-0 text-gray-300 max-w-xs md:max-w-sm mx-auto mt-16">
            <svg
                class="animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        </div>
    {:else if $appData.user}
        {#if $modal.status}
            {#if $modal.content === 'AddVehicle'}
                <AddVehicle />
            {:else if $modal.content === 'AddPart'}
                <AddPart />
            {:else if $modal.content === 'ViewPart'}
                <ViewPart />
            {:else if $modal.content === 'PartSearch'}
                <PartSearch />
            {/if}
        {/if}
        <section class={$modal.status ? 'hidden' : null}>
            {#if $appData.view === 'Vehicles' || $appData.view == 'UserLogin'}
                <Vehicles />
            {:else if $appData.view === 'EditVehicle'}
                <EditVehicle />
            {:else if $appData.view === 'PartSearch'}
                <PartSearch />
            {:else if $appData.view === 'Reports' && $appData.admin}
                <Reports />
            {/if}
        </section>
    {:else}
        <UserLogin />
    {/if}
    {#if !$appData.loading}
        <div class="hidden md:block border-t border-gray-200 text-xs text-center text-gray-200 w-full pt-4 mt-8">
            <span> © 2020 Corvus Customs - Icons made by</span>
            <a class="text-indigo-100" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
            from
            <a class="text-indigo-100" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    {/if}
</main>
