import PartFactory from '../models/PartFactory';

const makePart = (category, object) => {
    switch (category) {
        case 'tires':
            return PartFactory.createTire(object);

        case 'chargers':
            return PartFactory.createCharger(object);

        case 'wheels':
            return PartFactory.createWheel(object);

        case 'shocks':
            return PartFactory.createShock(object);

        case 'brakes':
            return PartFactory.createBrake(object);

        case 'exhausts':
            return PartFactory.createExhaust(object);
        default:
            break;
    }
};

export default makePart;
