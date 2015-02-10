var fs = require('fs'),
    path = require('path');

module.exports = function walk(dir, fileCallback, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err && done) return done(err);
        var pending = list.length;
        if (!pending && done) {
            return done(null, results);
        }
        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, fileCallback, function(err, res) {
                        results = results.concat(res);
                        if (!--pending && done) return done(null, results);
                    });
                } else {
                    results.push(file);
                    fileCallback(null, file);
                    if (!--pending && done) return done(null, results);
                }
            });
        });
    });
};