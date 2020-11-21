import Charger from './Charger';
import Tire from './Tire';
import Wheel from './Wheel';
import Shock from './Shock';
import Brake from './Brake';
import Exhaust from './Exhaust';

const PartFactory = (() => {
    const createTire = (obj) => {
        return Object.seal(Tire(obj.id, obj.name, obj.model, obj.type));
    };
    const createCharger = (obj) => {
        return Object.seal(Charger(obj.id, obj.name, obj.model, obj.type, obj.boost));
    };
    const createWheel = (obj) => {
        return Object.seal(Wheel(obj.id, obj.name, obj.model, obj.size));
    };
    const createShock = (obj) => {
        return Object.seal(Shock(obj.id, obj.name, obj.model, obj.type));
    };
    const createBrake = (obj) => {
        return Object.seal(Brake(obj.id, obj.name, obj.model, obj.rotor, obj.caliper));
    };
    const createExhaust = (obj) => {
        return Object.seal(Exhaust(obj.id, obj.name, obj.model, obj.type));
    };
    return { createTire, createCharger, createWheel, createShock, createBrake, createExhaust };
})();
export default PartFactory;
