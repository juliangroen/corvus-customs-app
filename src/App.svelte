<script>
    import Tailwindcss from './Tailwindcss.svelte';
    import { db } from './firebase';
    import PartFactory from './models/PartFactory';
    $: tires = [];
    db.collection('tires')
        .orderBy('id', 'asc')
        .onSnapshot((data) => {
            tires = data.docs;
        });
    $: partObj = {};
    $: newTire = PartFactory.createTire(partObj);
    const dbAdd = (obj) => {
        //const obj = PartFactory.createTire(partObj);
        db.collection('tires')
            .doc(obj.getId())
            .set(obj.dbObject())
            .then(() => {
                console.log(`${obj.getName()} was added!`);
            });
        partObj = {};
    };
    const dbDel = (id) => {
        db.collection('tires').doc(id).delete();
    };
    const getTire = (obj) => {
        const tire = PartFactory.createTire(obj);
        alert(tire.getName() + tire.getModel());
    };
</script>

<style>
</style>

<Tailwindcss />
<main>
    <form on:submit|preventDefault={dbAdd(newTire)}>
        <label for="name">Name:</label>
        <input
            type="text"
            name="name"
            placeholder="name..."
            bind:value={partObj.name} />
        <label for="model">Model:</label>
        <input
            type="text"
            name="model"
            placeholder="model..."
            bind:value={partObj.model} />
        <label for="type">Type:</label>
        <input
            type="text"
            name="type"
            placeholder="type..."
            bind:value={partObj.type} />
        <button>Add</button>
    </form>
    <ul>
        {#each tires as tire}
            <li>
                <span
                    class="cursor-pointer"
                    on:click={dbDel(tire.data().id)}>🗑</span>
                {tire.data().name}
                /
                {tire.data().model}
                /
                {tire.data().type}
                <span
                    class="cursor-pointer"
                    on:click={getTire(tire.data())}>📢</span>
            </li>
        {/each}
    </ul>
</main>
