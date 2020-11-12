<script>
    import { appData } from '../stores';
    import Logo from './icons/Logo.svelte';
    import MenuIcon from './icons/MenuIcon.svelte';
    export let home = 'UserLogin';
</script>

<style>
</style>

<header class="relative bg-gray-600 text-white text-center h-12">
    <div
        class="absolute cursor-pointer left-0 h-12 w-12 pt-1 pl-1"
        on:click={() => {
            $appData.view = home;
        }}>
        <Logo size="38" />
    </div>
    <!-- <div class="absolute right-0 cursor-pointer h-12 w-12 p-2" on:click={() => ($menuIsOpen = !$menuIsOpen)}>-->
    <div
        class="absolute right-0 cursor-pointer h-12 w-12 p-2"
        on:click={() => ($appData.menuIsOpen = !$appData.menuIsOpen)}>
        <MenuIcon size="32" clicked={$appData.menuIsOpen} />
    </div>
</header>
