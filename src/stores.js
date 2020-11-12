import { writable } from 'svelte/store';

export const appData = writable({
    view: 'Vehicles',
    menuIsOpen: false,
    user: { name: 'WGU' },
});
