import { writable } from 'svelte/store';

export const appData = writable({
    view: '',
    menuIsOpen: false,
});
