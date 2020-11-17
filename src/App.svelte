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

    // Realtime Firebase User Listener
    let unsubscribe;
    onMount(() => {
        unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                $appData.user = firebaseUser;
            } else {
                console.log('not logged in');
            }
            $appData.loading = false;
        });
    });
    onDestroy(() => unsubscribe());
</script>

<Tailwindcss />
<Header />
<main class="m-4">
    {#if $menu}
        <MobileMenu />
    {/if}
    {#if $appData.loading}
        <div class="text-gray-400">
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
            {#if $modal.data.content === 'AddVehicle'}
                <AddVehicle />
            {:else if $modal.data.content === 'AddPart'}
                <AddPart />
            {:else if $modal.data.content === 'ViewPart'}
                <ViewPart />
            {:else if $modal.data.content === 'PartSearch'}
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
            {/if}
        </section>
    {:else}
        <UserLogin />
    {/if}
</main>
