import Charger from './Charger';
import Tire from './Tire';

const PartFactory = (() => {
    const createTire = (obj) => {
        return Object.seal(Tire(obj.id, obj.name, obj.model, obj.type));
    };
    const createCharger = (obj) => {
        return Object.seal(Charger(obj.id, obj.name, obj.model, obj.boost));
    };

    return { createTire, createCharger };
})();
export default PartFactory;
