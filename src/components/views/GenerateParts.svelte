<script>
    import { firebaseSetItem } from '../../firebase';
    import PartFactory from '../../models/PartFactory';
    import { parts } from '../../stores';

    const words = [
        'Crow',
        'Tengu',
        'Karasu',
        'Neko',
        'Shadow',
        'Osiris',
        'Midnight',
        'Six',
        'Eight',
        '6',
        '8',
        '60',
        '80',
        'Sixty',
        'Eighty',
        'Sugoi',
        'Kawaii',
        'Katana',
        'Sword',
        'Blade',
        'Spear',
        'Chakra',
        'Kunai',
        'Kage',
        'Kyuubi',
        'Claw',
        'Fang',
        'Super',
        'Ultra',
        'Special',
        'Gold',
        'Silver',
        'Bronze',
        'Plus',
        'Tiger',
        'Raven',
        '64',
        'Custom',
        'Rugged',
        'Speed',
    ];
    $: testMode = false;
    $: number = '0';
    $: option = 'tires';
    $: failed = [];

    const nameModel = () => {
        const first = words[Math.floor(Math.random() * words.length)];
        const second = words[Math.floor(Math.random() * words.length)];
        const name = `${first} ${second}`;
        const model = `${
            first.length > 3
                ? first.substr(0, 3).toUpperCase()
                : first.toUpperCase()
        }${
            second.length > 3
                ? second.substr(0, 3).toUpperCase()
                : second.toLocaleUpperCase()
        }`;
        return { name, model };
    };

    const addPart = (obj) => {
        let flag = true;
        $parts.map((val) => {
            if (val.getModel() === obj.model) {
                console.log('FAILED: ', obj);
                failed = [...failed, obj];
                flag = false;
            }
        });
        if (flag) {
            if (testMode) {
                console.log('Test: ', obj);
            } else {
                firebaseSetItem('parts', obj)
                    .then(() => console.log('success: ', obj))
                    .catch((e) => console.log(e));
            }
        }
    };

    const generateTires = (num) => {
        setTimeout(() => {
            if (num > 0) {
                const category = 'tires';
                const types = ['Sport', 'Snow', 'All Weather', 'Slick'];
                const { name, model } = nameModel();
                const type = types[Math.floor(Math.random() * types.length)];
                const obj = PartFactory.createTire({
                    name,
                    model,
                    type,
                }).dbObject();
                addPart(obj);
                generateTires(num - 1);
            }
        }, 100);
    };

    const generateChargers = (num) => {
        setTimeout(() => {
            if (num > 0) {
                const category = 'chargers';
                const types = ['Turbocharger', 'Supercharger'];
                const boosts = ['4', '6', '8', '10', '12', '16'];
                const { name, model } = nameModel();
                const type = types[Math.floor(Math.random() * types.length)];
                const boost = boosts[Math.floor(Math.random() * boosts.length)];
                const obj = PartFactory.createCharger({
                    name,
                    model,
                    type,
                    boost,
                }).dbObject();
                addPart(obj);
                generateChargers(num - 1);
            }
        }, 100);
    };

    const generateWheels = (num) => {
        setTimeout(() => {
            if (num > 0) {
                const category = 'wheels';
                const sizes = [
                    '15-inch',
                    '16-inch',
                    '17-inch',
                    '18-inch',
                    '19-inch',
                    '20-inch',
                ];
                const { name, model } = nameModel();
                const size = sizes[Math.floor(Math.random() * sizes.length)];
                const obj = PartFactory.createWheel({
                    name,
                    model,
                    size,
                }).dbObject();
                addPart(obj);
                generateWheels(num - 1);
            }
        }, 100);
    };

    const generateShocks = (num) => {
        setTimeout(() => {
            if (num > 0) {
                const category = 'shocks';
                const types = ['Hydraulic', 'Gas', 'Adjustable'];
                const { name, model } = nameModel();
                const type = types[Math.floor(Math.random() * types.length)];
                const obj = PartFactory.createShock({
                    name,
                    model,
                    type,
                }).dbObject();
                addPart(obj);
                generateShocks(num - 1);
            }
        }, 100);
    };

    const generateBrakes = (num) => {
        setTimeout(() => {
            if (num > 0) {
                const category = 'brakes';
                const { name, model } = nameModel();
                const rotors = ['Slotted', 'Drilled', 'Vented'];
                const calipers = [
                    'Dual Piston',
                    'Triple Piston',
                    'Quad Piston',
                ];
                const rotor = rotors[Math.floor(Math.random() * rotors.length)];
                const caliper =
                    calipers[Math.floor(Math.random() * calipers.length)];
                const obj = PartFactory.createBrake({
                    name,
                    model,
                    rotor,
                    caliper,
                }).dbObject();
                addPart(obj);
                generateBrakes(num - 1);
            }
        }, 100);
    };

    const generateExhausts = (num) => {
        setTimeout(() => {
            if (num > 0) {
                const category = 'exhausts';
                const types = ['Cat-Back', 'Axel-Back'];
                const { name, model } = nameModel();
                const type = types[Math.floor(Math.random() * types.length)];
                const obj = PartFactory.createExhaust({
                    name,
                    model,
                    type,
                }).dbObject();
                addPart(obj);
                generateExhausts(num - 1);
            }
        }, 100);
    };

    const handleClick = (category) => {
        const result = testMode
            ? true
            : confirm(
                  `Are you sure you want to add ${number} ${category.toUpperCase()} to the database?`
              );
        if (result) {
            switch (category) {
                case 'tires':
                    generateTires(number);
                    break;
                case 'chargers':
                    generateChargers(number);
                    break;
                case 'wheels':
                    generateWheels(number);
                    break;
                case 'shocks':
                    generateShocks(number);
                    break;
                case 'brakes':
                    generateBrakes(number);
                    break;
                case 'exhausts':
                    generateExhausts(number);
                    break;
                default:
                    break;
            }
        }
    };
</script>

<style>
</style>

<form
    class="grid grid-cols-1 gap-2 mb-2"
    on:submit|preventDefault={() => handleClick(option)}>
    <label for="number">Number:</label>
    <input class="p-2" name="number" type="number" bind:value={number} />
    <select class="p-2" bind:value={option}>
        <option value="tires">Tires</option>
        <option value="chargers">Chargers</option>
        <option value="wheels">Wheels</option>
        <option value="shocks">Shocks</option>
        <option value="brakes">Brakes</option>
        <option value="exhausts">Exhausts</option>
    </select>
    <button class="bg-indigo-400 text-white p-2">Submit</button>
</form>

<div class="grid grid-cols-1 gap-2">
    <div>FAILED ({failed.length}):</div>
    {#each failed as item}
        <div>{item.model}</div>
    {/each}
</div>
