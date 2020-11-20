<script>
    const category = 'tires';
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
    ];
    const type = ['Sport', 'Snow', 'All Weather', 'Slick'];
    $: object = { name: null, model: null, type: null };
    $: number = '';
    const generateParts = (number) => {
        let name = `${words[Math.floor(Math.random() * words.length)]} ${
            words[Math.floor(Math.random() * words.length)]
        }`;
        let model = '';
        let type = '';
        console.log(name);
    };
    generateParts();
</script>

<style>
</style>
