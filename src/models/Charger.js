import Part from './Part';
const Charger = (id, name, model, boost) => {
    const parent = Part(id, name, model);
    const category = 'chargers';
    return {
        ...parent,
        getCategory: () => category,
        getBoost: () => boost,
        dbObject: () => ({ ...parent.dbObject(), category, boost }),
    };
};

export default Charger;
