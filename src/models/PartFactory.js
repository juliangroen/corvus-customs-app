import Tire from './Tire';

const PartFactory = (() => {
    //            return Tire(obj.name, obj.model, obj.type);
    const createTire = (obj) => {
        return Object.seal(Tire(obj.id, obj.name, obj.model, obj.type));
    };

    return { createTire };
})();
export default PartFactory;
