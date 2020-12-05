<script>
    import { firebaseSignOut } from '../../firebase';
    import { appData, menu, modal } from '../../stores';

    const handleSignIn = () => {
        $appData.view = 'UserLogin';
        menu.toggle();
    };
    const handleSignOut = () => {
        firebaseSignOut();
        $appData.user = null;
        menu.toggle();
    };
    const handleLink = (target) => {
        $appData.view = target;
        menu.close();
        modal.hardClose();
    };
</script>

<style>
    .xs {
        font-size: 8px;
    }
</style>

<div
    class="md:hidden absolute inset-0 z-40 bg-gray-400 text-white text-3xl tracking-wider text-center w-full h-full pt-12">
    <section class="mt-8">
        <div class="cursor-pointer mb-8" on:click={() => handleLink('Vehicles')}>VEHICLES</div>

        {#if $appData.admin}
            <div class="cursor-pointer mb-8" on:click={() => handleLink('Reports')}>REPORTS</div>
        {/if}
    </section>
    <footer class="absolute bottom-0 w-full h-24">
        {#if $appData.user}
            <div class="absolute bg-indigo-200 rounded-full w-12 h-12 ml-8" />
            <div class="cursor-pointer" on:click={handleSignOut}>SIGN OUT</div>
        {:else}
            <div class="cursor-pointer" on:click={handleSignIn}>SIGN IN</div>
        {/if}
        <div class="xs absolute bottom-0 text-center text-gray-200 w-full">
            <span>Icons made by</span>
            <a class="text-indigo-100" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
            from
            <a class="text-indigo-100" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    </footer>
</div>
