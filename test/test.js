var walk = require('../'),
    assert = require('assert');

describe('OtterWalker', function() {
    describe('walk', function() {
        it('should have length of 6 for example', function(done) {
            walk('example', function() {}, function(err, results) {
                assert.equal(6, results.length);
                done();
            });
        });

        it('should have length of 3 for example/multiple', function(done) {
            walk('example/multiple', function() {}, function(err, results) {
                assert.equal(3, results.length);
                done();
            });
        });

        it('should have length of 1 for example/run', function(done) {
            walk('example/run', function() {}, function(err, results) {
                assert.equal(1, results.length);
                done();
            });
        });
    });
});