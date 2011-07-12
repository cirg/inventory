/**
 * List functions to be exported from the design doc.
 */

var templates = require('kanso/templates');

exports.machines = function (head, req) {
    var row,
        rows = [],
        content;

    start({code: 200, headers: {'Content-Type': 'text/html'}});

    // fetch all the rows
    while (row = getRow()) {
        rows.push(row);
    }

    // generate the markup for a list of blog posts
    content = templates.render('machines.html', req, {
        rows: rows
    });

    return {title: 'Machines', content: content};
};
