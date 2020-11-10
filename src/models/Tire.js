import Part from './Part';
const Tire = (id, name, model, type) => {
    const category = 'tire';
    const getCategory = () => category;
    const getType = () => type;
    const parent = Part(id, name, model);
    const dbObject = () => ({ ...parent.dbObject(), category, type });
    return { ...parent, getCategory, getType, dbObject };
};

export default Tire;
