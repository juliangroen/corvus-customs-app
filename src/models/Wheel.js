import Part from './Part';
const Wheel = (id, name, model, size) => {
    const parent = Part(id, name, model);
    const category = 'wheels';
    return {
        ...parent,
        getCategory: () => category,
        getSize: () => size,
        dbObject: () => ({ ...parent.dbObject(), category, size }),
    };
};

export default Wheel;
