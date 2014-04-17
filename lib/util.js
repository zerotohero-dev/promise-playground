'use strict';

var Q = require('q');

/**
 * Yeah this works ;)
 *
 * @param o
 *
 * @returns a shuffled o.
 */
exports.shuffle = function(o) {

    // Make Doug Crockford's eyes "pop".
    for(
        var j, x,
            i = o.length;

        i;

        j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        )
        ;

    return o;
};

/**
 * Logs stuff.
 */
exports.log = function() {
    console.log.apply(console, arguments);
};

/**
 * Creates provider.
 */
exports.createProvider = function(collection) {
    exports.shuffle(collection);

    return function(number, callback) {
        var i, len, result = [];

        for (i = 0, len = Math.min(collection.length, number); i < len; i++) {
            result.push(collection[i]);
        }

        exports.shuffle(collection);

        setTimeout(function() {
            callback(null, result);
        }, Math.floor(Math.random()*2000));
    };
};

exports.createCollectionGetter = function(collection) {
    return function() {
        var deferred = Q.defer();

        collection.provide(5, function(err, result) {
            deferred.resolve(result);
        });

        return deferred.promise;
    };
};
