import Part from './Part';
const Charger = (id, name, model, type, boost) => {
    const parent = Part(id, name, model);
    const category = 'chargers';
    return {
        ...parent,
        getCategory: () => category,
        getType: () => type,
        getBoost: () => boost,
        dbObject: () => ({ ...parent.dbObject(), category, type, boost }),
    };
};

export default Charger;
