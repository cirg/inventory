/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_show/welcome'},
    {from: '/add_machine', to: '_show/add_machine'},
    {from: '/add_machine', to: '_update/add__machine', method: 'POST'},
    {from: '*', to: '_show/not_found'}
];
