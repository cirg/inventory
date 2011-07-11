/**
 * Show functions to be exported from the design doc.
 */

var templates = require('kanso/templates'),
    forms = require('kanso/forms'),
    types = require('./types'),
    machine_form;

exports.welcome = function (doc, req) {
    return {
        title: 'It worked!',
        content: templates.render('welcome.html', req, {})
    };
};

exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};

exports.view = function (doc, req) {
    return {
        title: doc.name || '(unnamed)',
        content: templates.render('machine.html', req, doc)
    };
};

machine_form = function (title, doc, req) {
    var form, content;

    form = new forms.Form(types.machine, doc, {
        //exclude: ['created', 'comments']
    });

    // render the markup for a machine post form
    content = templates.render('machine_form.html', req, {
        form: form.toHTML(req),
        title: title
    });

    if (req.client) {
        // being run client-side
        $('#content').html(content);
        document.title = title;
    } else {
        return templates.render('base.html', req, {
            content: content,
            title: title
        });
    }
};

exports.add_machine = function (doc, req) {
    return machine_form('Add machine', doc, req);
};

exports.edit = function (doc, req) {
    return machine_form('Edit machine', doc, req);
};
