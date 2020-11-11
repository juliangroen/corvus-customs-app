<script>
    import AddVehicle from './components/AddVehicle.svelte';
    import Crud from './components/crud.svelte';
    import UserLogin from './components/UserLogin.svelte';
    import Tailwindcss from './Tailwindcss.svelte';
    $: view = 'AddVehicle';
</script>

<style>
</style>

<Tailwindcss />
<main class="text-gray-600 font-ibm m-4">
    {#if view == 'UserLogin'}
        <UserLogin />
    {:else if view == 'AddVehicle'}
        <AddVehicle />
    {:else}
        <Crud />
    {/if}
</main>
