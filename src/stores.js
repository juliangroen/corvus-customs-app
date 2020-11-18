import { readable, writable } from 'svelte/store';
import { db } from './firebase';
import VehicleFactory from './models/VehicleFactory';
import PartFactory from './models/PartFactory';

export const appData = writable({
    loading: true,
    part: null,
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
                    snapshot.docs.map((val) => {
                        let doc = val.data();
                        data.push(VehicleFactory.createVehicle(doc));
                    });
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

export const tires = (() => {
    const tires = readable([], (set) => {
        const unsubscribe = db
            .collection('tires')
            .orderBy('id', 'asc')
            .onSnapshot(
                (snapshot) => {
                    let data = [];
                    snapshot.docs.map((val) => {
                        let doc = val.data();
                        data.push(PartFactory.createTire(doc));
                    });
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
    return tires;
})();
