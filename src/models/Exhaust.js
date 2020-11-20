import Part from './Part';
const Exhaust = (id, name, model, type) => {
    const parent = Part(id, name, model);
    const category = 'brakes';
    return {
        ...parent,
        getCategory: () => category,
        getType: () => type,
        dbObject: () => ({ ...parent.dbObject(), category, type }),
    };
};

export default Exhaust;
