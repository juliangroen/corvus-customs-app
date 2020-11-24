<script>
    import { appData, menu, modal } from '../../stores';
    import { firebaseSignOut } from '../../firebase';
    import Logo from '../icons/Logo.svelte';
    import MenuIcon from '../icons/MenuIcon.svelte';
    export let home = 'Vehicles';
    const handleSignOut = () => {
        firebaseSignOut();
        $appData.user = null;
        menu.close();
    };
    const handleLink = (link) => {
        $appData.view = link.target;
        menu.close();
        modal.hardClose();
    };
</script>

<style>
</style>

<header class="relative z-50 bg-gray-600 text-white text-center h-12">
    <div
        class="absolute cursor-pointer left-0 h-12 w-12 pt-1 pl-1 hover:text-indigo-200"
        on:click={() => {
            $appData.view = home;
            menu.close();
            modal.back();
        }}>
        <Logo size="38" />
    </div>

    <div class="md:hidden absolute right-0 cursor-pointer h-12 w-12 p-2" on:click={menu.toggle}>
        <MenuIcon size="32" clicked={$menu} />
    </div>

    <div class="hidden md:flex items-center justify-center space-x-8 h-full ">
        {#each $appData.menuLinks as link}
            <span
                class="cursor-pointer leading-none text-lg hover:text-indigo-200"
                on:click={() => handleLink(link)}>{link.name}</span>
        {/each}
        {#if $appData.user}
            <div class="absolute top-0 right-0 flex items-center justify-center h-full pr-1">
                <div class="cursor-pointer leading-none text-lg ml-4 mr-2" on:click={handleSignOut}>Sign Out</div>
                <div class="p-1">
                    <div class="cursor-pointer bg-indigo-200 rounded-full w-8 h-8" />
                </div>
            </div>
        {/if}
    </div>
</header>
