<script>
    import Logo from './Logo.svelte';
    import MenuIcon from './MenuIcon.svelte';
    export let menuClicked = false;
</script>

<style>
</style>

<header class="relative bg-gray-600 text-white text-center h-12">
    <div class="absolute left-0 h-12 w-12 pt-1 pl-1">
        <Logo size="38" />
    </div>
    <div class="absolute right-0 h-12 w-12 p-2">
        <MenuIcon size="32" clicked={menuClicked} />
        <!--         <div class="grid grid-cols-1 gap-2 w-8 m-2">
            <div class="bg-white rounded-full w-full h-1" />
            <div class="bg-white rounded-full w-full h-1" />
            <div class="bg-white rounded-full w-full h-1" />
        </div> -->
    </div>
</header>
