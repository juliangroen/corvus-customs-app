<script>
    import { db } from '../firebase';
    import PartFactory from '../models/PartFactory';
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

<form class="grid grid-cols-1" on:submit|preventDefault={dbAdd(newTire)}>
    <label for="name">Name:</label>
    <input class="bg-white rounded-full px-4 py-1 mb-2" type="text" name="name" bind:value={partObj.name} />
    <label for="model">Model:</label>
    <input class="bg-white p-1 mb-2" type="text" name="model" bind:value={partObj.model} />
    <label for="type">Type:</label>
    <input class="bg-white p-1 mb-4" type="text" name="type" bind:value={partObj.type} />
    <button class="bg-pink-400 p-2 mb-4">Add</button>
</form>
<ul class="">
    {#each tires as tire}
        <li>
            <span class="cursor-pointer" on:click={dbDel(tire.data().id)}>🗑</span>
            {tire.data().name}
            /
            {tire.data().model}
            /
            {tire.data().type}
            <span class="cursor-pointer" on:click={getTire(tire.data())}>📢</span>
        </li>
    {/each}
</ul>
