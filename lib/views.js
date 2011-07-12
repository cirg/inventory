/**
 * Show functions to be exported from the design doc.
 */

exports.machines_by_name = {
    map: function (doc) {
        if (doc.type === 'machine') {
            emit(doc.name, doc);
        }
    }
};
