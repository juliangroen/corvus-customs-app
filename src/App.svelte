<script>
    import { menuIsOpen, view } from './stores';
    import AddVehicle from './components/AddVehicle.svelte';
    import Crud from './components/crud.svelte';
    import Header from './components/Header.svelte';
    import MobileMenu from './components/MobileMenu.svelte';
    import UserLogin from './components/UserLogin.svelte';
    import Tailwindcss from './Tailwindcss.svelte';
</script>

<style>
</style>

<Tailwindcss />
<Header clicked={false} />
<main class="text-gray-600 font-ibm m-4">
    {#if $menuIsOpen}
        <MobileMenu />
    {/if}
    {#if $view == 'UserLogin'}
        <UserLogin />
    {:else if $view == 'AddVehicle'}
        <AddVehicle />
    {:else}
        <Crud />
    {/if}
</main>
