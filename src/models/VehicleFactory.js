import Vehicle from './Vehicle';

const VehicleFactory = (() => {
    const createVehicle = (obj) => {
        return Object.seal(Vehicle(obj.id, obj.year, obj.make, obj.model, obj.parts));
    };

    return { createVehicle };
})();

export default VehicleFactory;
