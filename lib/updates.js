/**
 * Update functions to be exported from the design doc.
 */

var templates = require('kanso/templates'),
    flashmessages = require('kanso/flashmessages'),
    forms = require('kanso/forms'),
    utils = require('kanso/utils'),
    types = require('./types'),
    machine_form;

machine_form = function (form_title, doc, req) {
    var form, content;

    form = new forms.Form(types.machine, null, {
        //exclude: ['created', 'comments']
    });

    // parse the request data and check validation and permission functions
    form.validate(req);

    if (form.isValid()) {
        doc = form.values;

        flashmessages.addMessage(req, {
            type: 'success',
            message: 'Saved ' + doc.name
        });

        // the form is valid, save the document and redirect to the new page
        return [doc, utils.redirect(req, '/view/' + doc._id)];
    } else {
        flashmessages.addMessage(req, {
            type: 'error',
            message: 'Please correct the indicated errors'
        });

        // the form is not valid, so render it again with error messages
        content = templates.render('machine_form.html', req, {
            form: form.toHTML(req),
            title: form_title
        });

        // return null as the first argument so the document isn't saved
        return [null, {
            content: content,
            title: form_title
        }];
    }
};

exports.add_machine = function (doc, req) {
    return machine_form('Add new machine', doc, req);
};

exports.edit = function (doc, req) {
    return machine_form('Edit machine', doc, req);
};

exports.delete = function (doc, req) {
    doc._deleted = true;

    flashmessages.addMessage(req, {
        type: 'success',
        message: 'Deleted ' + doc._id
    });

    return [doc, utils.redirect(req, '/' + doc.type)];
};
