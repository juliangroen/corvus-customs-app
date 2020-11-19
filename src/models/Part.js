const Part = (id = new Date().getTime().toString(), name, model) => {
    return {
        getId: () => id,
        getName: () => name,
        getModel: () => model,
        dbObject: () => ({ id, name, model }),
    };
};

export default Part;
