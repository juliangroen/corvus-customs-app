const Part = (id = new Date().getTime().toString(), name, model) => {
    const getId = () => id;
    const getName = () => name;
    const getModel = () => model;
    const dbObject = () => ({ id, name, model });
    return { getId, getName, getModel, dbObject };
};

export default Part;
