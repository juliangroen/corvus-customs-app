import Part from './Part';
const Shock = (id, name, model, type) => {
    const parent = Part(id, name, model);
    const category = 'shocks';
    return {
        ...parent,
        getCategory: () => category,
        getType: () => type,
        dbObject: () => ({ ...parent.dbObject(), category, type }),
    };
};

export default Shock;
