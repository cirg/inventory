/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_show/welcome'},
    {from: '/machine/add', to: '_update/add_machine', method: 'POST'},
    {from: '/machine/add', to: '_show/add_machine'},
    {from: '*', to: '_show/not_found'}
];
