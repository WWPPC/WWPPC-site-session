import createHost from 'cross-domain-storage/host';

createHost([
    {
        origin: 'http://wwppc.tech',
        allowedMethods: ['get', 'set', 'remove']
    },
    {
        origin: 'http://math.wwppc.tech',
        allowedMethods: ['get', 'set', 'remove']
    }
]);