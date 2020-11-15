<script>
    import PartFactory from '../../models/PartFactory';
    import TileHolder from '../shared/TileHolder.svelte';
    export let part = PartFactory.createTire({
        name: 'Test Tire',
        model: 'test-420',
        type: 'Snow',
    });
    let tiles = () => {
        let array = [];
        let obj = part.dbObject();
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && key != 'id' && key != 'name') {
                const element = obj[key];
                array.push({
                    src: '../assets/svg/parts/turbo.svg',
                    text: `${key.toLocaleUpperCase()}: ${element}`,
                });
            }
        }
        return array;
    };
</script>

<style>
</style>

<h1 class=" text-2xl italic font-bold text-center mb-4">{part.getName()}</h1>
<TileHolder tiles={tiles()} />
