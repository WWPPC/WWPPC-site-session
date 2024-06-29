import createHost from 'cross-domain-storage/host';

createHost([
    {
        origin: 'https://wwppc.tech',
        allowedMethods: ['get', 'set', 'remove']
    },
    {
        origin: 'https://math.wwppc.tech',
        allowedMethods: ['get', 'set', 'remove']
    }
]);