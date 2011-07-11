/**
 * Show functions to be exported from the design doc.
 */

var templates = require('kanso/templates'),
    forms = require('kanso/forms'),
    types = require('./types');


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

exports.show = function (doc, req) {
    return {
        title: doc.title,
        content: templates.render('machine.html', req, doc)
    };
};

exports.add_machine = function (doc, req) {
    var form, content;

    form = new forms.Form(types.machine, null, {
        //exclude: ['created', 'comments']
    });

    // render the markup for a machine post form
    content = templates.render('machine_form.html', req, {
        form_title: 'Add new machine',
        form: form.toHTML(req)
    });

    return {title: 'Add new machine', content: content};
};
