import Part from './Part';
const Tire = (id, name, model, type) => {
    const parent = Part(id, name, model);
    const category = 'tires';
    return {
        ...parent,
        getCategory: () => category,
        getType: () => type,
        dbObject: () => ({ ...parent.dbObject(), category, type }),
    };
};

export default Tire;
