import Part from './Part';
const Brake = (id, name, model, rotor, caliper) => {
    const parent = Part(id, name, model);
    const category = 'brakes';
    return {
        ...parent,
        getCategory: () => category,
        getRotor: () => rotor,
        getCaliper: () => caliper,
        dbObject: () => ({ ...parent.dbObject(), category, rotor, caliper }),
    };
};

export default Brake;
