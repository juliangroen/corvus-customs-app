<script>
    import Part from './Part.svelte';
    import { db } from '../firebase.js';
    let parts = [];
    db.collection('parts').onSnapshot((data) => {
        parts = data.docs;
    });
</script>

<ul id="parts">
    {#each parts as part}
        <Part data={part.data()} />
    {/each}
</ul>
