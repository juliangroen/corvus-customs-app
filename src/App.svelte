<script>
    import Crud from './components/crud.svelte';
    import UserLogin from './components/UserLogin.svelte';
    import Tailwindcss from './Tailwindcss.svelte';
    $: view = 'UserLogin';
</script>

<style>
</style>

<Tailwindcss />
<main class="text-gray-600 font-ibm m-4">
    {#if view == 'UserLogin'}
        <UserLogin />
    {:else}
        <Crud />
    {/if}
</main>
