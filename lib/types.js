/**
 * Kanso document types to export
 */

var Type = require('kanso/types').Type,
    fields = require('kanso/fields'),
    widgets = require('kanso/widgets');

exports.machine = new Type('machine', {
    fields: {
        created: fields.createdTime(),
        name: fields.string({ required: false }),
        manufacturer: fields.string({ required: false }),
        model: fields.string({ required: false }),
        serial: fields.string({ required: false })
    }
});
