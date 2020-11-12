<script>
    import { appData } from './stores';
    import AddVehicle from './components/views/AddVehicle.svelte';
    import Crud from './components/crud.svelte';
    import Header from './components/Header.svelte';
    import MobileMenu from './components/MobileMenu.svelte';
    import UserLogin from './components/views/UserLogin.svelte';
    import Tailwindcss from './Tailwindcss.svelte';
    import Modal from './components/Modal.svelte';
    import Page from './components/Page.svelte';
</script>

<style>
</style>

<Tailwindcss />
<Header />
{#if $appData.menuIsOpen}
    <MobileMenu />
{/if}
<main class="m-4">
    {#if $appData.view == 'UserLogin'}
        <UserLogin />
    {:else if $appData.view == 'AddVehicle'}
        <Modal closeTarget="UserLogin">
            <AddVehicle />
        </Modal>
    {:else}
        <Page topLeft={{ visible: true }} bottomLeft={{ visible: true }}>
            <Crud />
        </Page>
    {/if}
</main>
