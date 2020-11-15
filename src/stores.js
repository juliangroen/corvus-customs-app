import { writable } from 'svelte/store';

export const appData = writable({
    view: 'UserLogin',
    menuIsOpen: false,
    user: null,
});

export const vehicles = writable([
    {
        text: 'Vehicle 1',
        src: '../assets/svg/parts/key.svg',
    },
    { text: 'Vehicle 2', src: '../assets/svg/parts/key.svg' },
    {
        text: 'Vehicle 3',
        src: '../assets/svg/parts/key.svg',
    },
    { text: 'Vehicle 4', src: '../assets/svg/parts/key.svg' },
]);
