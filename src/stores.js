import { writable } from 'svelte/store';

export const appData = writable({
    view: 'UserLogin',
    menuIsOpen: false,
    user: { name: 'WGU' },
});
