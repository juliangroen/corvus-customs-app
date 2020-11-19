<script>
    import { firebaseDeleteItem, firebaseGetItem, firebaseSetItem } from '../../firebase';
    import { appData, modal, parts } from '../../stores';
    import Page from '../shared/Page.svelte';
    import Tile from '../shared/Tile.svelte';
    $: vehicle = $appData.vehicle;
    $: ({ tires, chargers, wheels, shocks, brakes, exhausts } = vehicle.parts);
    const svgPath = './assets/svg/parts/';
    const handlePartClick = (partKey, partVal) => {
        const part = $parts.find((val) => val.getId() === partVal);
        $appData.part = part;
        modal.toggle();
        modal.setContent('ViewPart');
    };
    const handlePartSearch = () => {
        modal.toggle();
        modal.setContent('PartSearch');
    };
    const handleDelete = () => {
        let result = confirm('Are you sure you want to delete this vehicle?');
        if (result) {
            firebaseDeleteItem('vehicles', vehicle.id)
                .then(() => {
                    console.log(`${vehicle.id} was deleted`);
                    $appData.view = 'Vehicles';
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
    const handleSave = () => {
        let result = confirm('Are you sure you want to save changes to this vehicle?');
        if (result) {
            const obj = vehicle;
            firebaseSetItem('vehicles', obj)
                .then(() => {
                    console.log(`${obj.id} was saved`);
                    $appData.view = 'Vehicles';
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
</script>

<style>
</style>

<Page
    topLeft
    bottomLeft
    bottomRight
    on:tlClick={() => ($appData.view = 'Vehicles')}
    on:blClick={handleDelete}
    on:brClick={handleSave}>
    <!-- Main Heading -->
    <h1 class=" text-2xl italic font-bold text-center mb-4">Customize Vehicle</h1>

    <Tile src="./assets/svg/parts/key.svg"><span>{vehicle.year} {vehicle.make} {vehicle.model}</span></Tile>
    <div class="mt-2">
        <div class="grid grid-cols-3 gap-2 mb-2">
            <Tile
                box
                empty={tires ? null : true}
                src={`${svgPath}tires.svg`}
                on:click={tires ? () => handlePartClick('tires', tires) : handlePartSearch} />
            <Tile
                box
                empty={chargers ? null : true}
                src={`${svgPath}chargers.svg`}
                on:click={chargers ? () => handlePartClick('chargers', chargers) : handlePartSearch} />
            <Tile
                box
                empty={wheels ? null : true}
                src={`${svgPath}wheels.svg`}
                on:click={wheels ? () => handlePartClick('wheels', wheels) : handlePartSearch} />
            <Tile
                box
                empty={shocks ? null : true}
                src={`${svgPath}shocks.svg`}
                on:click={shocks ? () => handlePartClick('shocks', shocks) : handlePartSearch} />
            <Tile
                box
                empty={brakes ? null : true}
                src={`${svgPath}brakes.svg`}
                on:click={brakes ? () => handlePartClick('brakes', brakes) : handlePartSearch} />
            <Tile
                box
                empty={exhausts ? null : true}
                src={`${svgPath}exhausts.svg`}
                on:click={exhausts ? () => handlePartClick('exhausts', exhausts) : handlePartSearch} />
        </div>
    </div>
</Page>
