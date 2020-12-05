import { readable, writable } from 'svelte/store';
import { db } from './firebase';
import VehicleFactory from './models/VehicleFactory';
import makePart from './shared/partHelper';

export const appData = writable({
    admin: false,
    category: null,
    loading: true,
    part: null,
    partEdit: false,
    partsUpdated: false,
    selectedPart: false,
    user: null,
    view: 'Vehicles',
    vehicle: null,
    vehicleEdit: false,
    vehicleUpdated: false,
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
        content: '',
        previous: [],
    });
    return {
        subscribe,
        open: () => update((val) => ({ ...val, status: true })),
        hardClose: () => update((val) => ({ ...val, status: false, content: '', previous: [] })),
        back: () => {
            update((val) => {
                if (val.previous.length > 0) {
                    let array = val.previous;
                    let prev = array.pop();
                    let newData = { ...val, content: prev, previous: array };
                    return newData;
                } else {
                    return { ...val, status: false, content: '' };
                }
            });
        },
        setContent: (string) =>
            update((val) => {
                let newData = {
                    ...val,
                    content: string,
                    previous: val.content !== '' ? [...val.previous, val.content] : val.previous,
                };
                return newData;
            }),
    };
})();

export const vehicles = (() => {
    const vehiclesRef = db.collection('vehicles');
    const vehicleCache = JSON.parse(localStorage.getItem('vehicleCache'));
    const vehicleList = vehicleCache === null ? null : vehicleCache.map((item) => VehicleFactory.createVehicle(item));
    let appDataStore = null;
    const unsubAppData = appData.subscribe((value) => (appDataStore = value));
    vehicleCache === null ? (appDataStore.vehicleUpdated = true) : null;
    const vehicles = readable(vehicleList !== null ? vehicleList : [], (set) => {
        if (appDataStore.vehicleUpdated) {
            vehiclesRef.get().then((res) => {
                const snapshot = res.docs.map((doc) => doc.data());
                set(snapshot.map((item) => VehicleFactory.createVehicle(item)));
                localStorage.setItem('vehicleCache', JSON.stringify(snapshot));
                console.log('pulled vehicles from database');
                appDataStore.vehicleUpdated = false;
            });
        } else {
            console.log('pulled vehicles from cache');
        }
        return () => {
            unsubAppData();
        };
    });
    return vehicles;
})();

export const parts = (() => {
    const partsRef = db.collection('parts');
    const partsCache = JSON.parse(localStorage.getItem('partsCache'));
    const partsList = partsCache === null ? null : partsCache.map((item) => makePart(item.category, item));
    let appDataStore = null;
    const unsubAppData = appData.subscribe((value) => (appDataStore = value));
    partsCache === null ? (appDataStore.partsUpdated = true) : null;
    const parts = readable(partsList !== null ? partsList : [], (set) => {
        if (appDataStore.partsUpdated) {
            partsRef.get().then((res) => {
                const snapshot = res.docs.map((doc) => doc.data());
                set(snapshot.map((item) => makePart(item.category, item)));
                localStorage.setItem('partsCache', JSON.stringify(snapshot));
                console.log('pulled parts from database');
                appDataStore.partsUpdated = false;
            });
        } else {
            console.log('pulled parts from cache');
        }
        return () => {
            unsubAppData();
        };
    });
    return parts;
})();
