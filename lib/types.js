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
        location: fields.string({ required: false }),
        custodian: fields.string({ required: false }),
        operating_system: fields.string({ required: false }),
        machine_type: fields.string({ required: false }),
        uw_tag: fields.string({ required: false }),
        manufacturer: fields.string({ required: false }),
        model: fields.string({ required: false }),
        date_purchased: fields.number({ required: false }),
        serial: fields.string({ required: false })
    }
});
