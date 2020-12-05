import { readable, writable } from 'svelte/store';
import { db } from './firebase';
import VehicleFactory from './models/VehicleFactory';
import PartFactory from './models/PartFactory';
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
    const vehicles = readable([], (set) => {
        const unsubscribe = db
            .collection('vehicles')
            .orderBy('id', 'asc')
            .onSnapshot(
                (snapshot) => {
                    let data = snapshot.docs
                        .map((val) => {
                            let doc = val.data();
                            return VehicleFactory.createVehicle(doc);
                        })
                        .filter((val) => val !== undefined);
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

export const parts = (() => {
    const partsRef = db.collection('parts');
    const partsCache = JSON.parse(localStorage.getItem('partsCache'));
    const partsList = partsCache === null ? null : partsCache.map((item) => makePart(item.category, item));
    console.log(partsCache);
    let appDataStore = null;
    const unsubAppData = appData.subscribe((value) => (appDataStore = value));
    partsCache === null ? (appDataStore.partsUpdated = true) : null;
    console.log(appDataStore.partsUpdated);
    const parts = readable(partsList !== null ? partsList : [], async (set) => {
        if (appDataStore.partsUpdated) {
            await partsRef.get().then((res) => {
                const snapshot = res.docs.map((doc) => doc.data());
                set(snapshot.map((item) => makePart(item.category, item)));
                localStorage.setItem('partsCache', JSON.stringify(snapshot));
                console.log('pulled parts from database');
                appDataStore.partsUpdated = false;
            });
        } else {
            console.log('pulled parts from cache');
        }

        // const unsubscribe = db
        //     .collection('parts')
        //     .orderBy('id', 'asc')
        //     .onSnapshot(
        //         (snapshot) => {
        //             let data = snapshot.docs
        //                 .map((val) => {
        //                     let doc = val.data();
        //                     switch (doc.category) {
        //                         case 'tires':
        //                             return PartFactory.createTire(doc);
        //                         case 'chargers':
        //                             return PartFactory.createCharger(doc);
        //                         case 'wheels':
        //                             return PartFactory.createWheel(doc);
        //                         case 'shocks':
        //                             return PartFactory.createShock(doc);
        //                         case 'brakes':
        //                             return PartFactory.createBrake(doc);
        //                         case 'exhausts':
        //                             return PartFactory.createExhaust(doc);
        //                         default:
        //                             break;
        //                     }
        //                 })
        //                 .filter((val) => val !== undefined);
        //             set(data);
        //         },
        //         (e) => {
        //             console.log(e);
        //         }
        //     );
        return () => {
            unsubAppData();
        };
    });
    return parts;
})();
