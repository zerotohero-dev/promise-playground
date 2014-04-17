'use strict';

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
