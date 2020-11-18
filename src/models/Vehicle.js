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
    const getId = () => id;
    const getYear = () => year;
    const getMake = () => make;
    const getModel = () => model;
    const getParts = () => parts;
    const dbObject = () => ({
        id: getId(),
        year: getYear(),
        make: getMake(),
        model: getModel(),
        parts: getParts(),
    });
    return { ...dbObject(), dbObject };
};

export default Vehicle;
