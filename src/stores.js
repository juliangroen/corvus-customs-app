import { readable, writable } from 'svelte/store';
import { db } from './firebase';

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

export const vehicles = (() => {
    const vehicles = readable([], (set) => {
        const unsubscribe = db
            .collection('vehicles')
            .orderBy('id', 'asc')
            .onSnapshot(
                (snapshot) => {
                    let data = [];
                    snapshot.docs.map((val) => data.push(val.data()));
                    set(data);
                },
                (e) => {
                    console.log(e);
                }
            );
        return () => {
            unsubscribe();
        };
    });
    return vehicles;
})();
