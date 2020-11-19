const createID = () => {
    return `V${new Date().getTime()}`;
};

const partsObj = {
    brakes: null,
    chargers: null,
    exhausts: null,
    shocks: null,
    tires: null,
    wheels: null,
};

const Vehicle = (id = createID(), year, make, model, parts = partsObj) => {
    return {
        getId: () => id,
        getYear: () => year,
        getMake: () => make,
        getModel: () => model,
        getParts: () => parts,
        dbObject: () => ({
            id,
            year,
            make,
            model,
            parts,
        }),
    };
};

export default Vehicle;
