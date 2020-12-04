import VehicleFactory from './VehicleFactory';

test('throws error when attempting to modify properties of encapsulated object', () => {
    const year = '2020';
    const make = 'Test';
    const model = 'Vehicle';
    const obj = { year, make, model };
    // encapsulated object created with the Vehicle factory function.
    const newVehicle = VehicleFactory.createVehicle(obj);
    expect(() => {
        // attempt to add a new property to the encapsulated object
        // throws "TypeError: Cannot add property testProp, object is not extensible".
        newVehicle.testProp = 'testValue';
    }).toThrowError(TypeError);
});
