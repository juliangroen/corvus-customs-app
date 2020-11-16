import { writable } from 'svelte/store';

export const appData = writable({
    loading: true,
    user: null,
    view: 'UserLogin',
    vehicle: null,
});

export const menu = (() => {
    const { subscribe, set, update } = writable(false);
    return {
        subscribe,
        toggle: () => update((val) => !val),
        close: () => set(false),
    };
})();

export const modal = (() => {
    const { subscribe, set, update } = writable({
        status: false,
        data: { content: '' },
    });
    return {
        subscribe,
        toggle: () => update((val) => ({ ...val, status: !val.status })),
        close: () => update((val) => ({ ...val, status: false })),
        setContent: (string) =>
            update((val) => {
                let newData = { ...val.data, content: string };
                return { ...val, data: newData };
            }),
    };
})();

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
