import Vehicle from './Vehicle';

const VehicleFactory = (() => {
    // factory function to generate objects using the Vehicle object model
    const createVehicle = (obj) => {
        // Object.seal encapsulates the object preventing properties being modified directly
        return Object.seal(Vehicle(obj.id, obj.year, obj.make, obj.model, obj.parts));
    };

    return { createVehicle };
})();

export default VehicleFactory;
