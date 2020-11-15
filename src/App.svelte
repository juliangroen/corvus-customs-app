<script>
    import { appData, menu, modal } from './stores';
    import AddVehicle from './components/views/AddVehicle.svelte';
    import Crud from './components/crud.svelte';
    import Header from './components/shared/Header.svelte';
    import MobileMenu from './components/views/MobileMenu.svelte';
    import UserLogin from './components/views/UserLogin.svelte';
    import Tailwindcss from './Tailwindcss.svelte';
    import Modal from './components/shared/Modal.svelte';
    import Page from './components/shared/Page.svelte';
    import Vehicles from './components/views/Vehicles.svelte';
    import EditVehicle from './components/views/EditVehicle.svelte';
    import PartSearch from './components/views/PartSearch.svelte';
    import AddPart from './components/views/AddPart.svelte';
    import ViewPart from './components/views/ViewPart.svelte';

    // Realtime Firebase User Listener
    import firebase from 'firebase/app';
    import 'firebase/auth';
    firebase.auth().onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
            $appData.user = firebaseUser;
        } else {
            $appData.user = null;
            console.log('not logged in');
        }
    });
</script>

<style>
</style>

<Tailwindcss />
<Header />
{#if $menu}
    <MobileMenu />
{/if}
<main class="m-4">
    {#if $appData.user}
        {#if $modal.status}
            {#if $modal.data.content === 'AddVehicle'}
                <AddVehicle />
            {:else if $modal.data.content === 'AddPart'}
                <AddPart />
            {:else if $modal.data.content === 'ViewPart'}
                <ViewPart />
            {/if}
        {/if}
        <section class={$modal.status ? 'hidden' : null}>
            {#if $appData.view === 'Vehicles' || $appData.view == 'UserLogin'}
                <Vehicles />
            {:else if $appData.view === 'EditVehicle'}
                <EditVehicle />
            {:else if $appData.view === 'PartSearch'}
                <PartSearch />

                <!-- {:else}
            <Page topLeft bottomLeft>
                <Crud />
            </Page> -->
            {/if}
        </section>
    {:else}
        <UserLogin />
    {/if}
</main>
