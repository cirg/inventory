/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_show/welcome'},
    {from: '/view/:id', to: '_show/view/:id'},
    {from: '/edit/:id', to: '_update/edit/:id', method: 'POST'},
    {from: '/edit/:id', to: '_show/edit/:id'},
    {from: '/delete/:id', to: '_update/delete/:id', method: 'POST'},
    {from: '/machine/add', to: '_update/add_machine', method: 'POST'},
    {from: '/machine/add', to: '_show/add_machine'},
    {from: '*', to: '_show/not_found'}
];
