'use strict';

var quote = require('./lib/quote');

//try {
//    quote.provide(10, function(err, data) {
//        console.log(data);
//    });
//} catch(ignore) {
//    console.warn('errror occurerd');
//}


//quote.provide(10, function(err, data) {
//    console.log(data);
//
//    quote.provide(10, function(err, data) {
//        console.log(data);
//
//        quote.provide(10, function(err, data) {
//            console.log(data);
//
//            quote.provide(10, function(err, data) {
//                console.log(data);
//            });
//        });
//
//        quote.provide(10, function(err, data) {
//            console.log(data);
//        });
//    });
//});

//try {
//    quote.provide(10, function(err, data) {
//        console.log(data);
//
//        quote.provide(10, function(err, data) {
//            console.log(data);
//
//            quote.provide(10, function(err, data) {
//                console.log(data);
//
//                quote.provide(10, function(err, data) {
//                    console.log(data);
//                });
//            });
//
//            quote.provide(10, function(err, data) {
//                console.log(data);
//            });
//        });
//    });
//} catch(exception) {
//    console.log('Exception bro!');
//    console.log(exception);
//}

//try {
//    quote.provide(10, function(err, data) {
//        console.log(data);
//
//        try {
//            quote.provide(10, function(err, data) {
//                console.log(data);
//
//                try {
//                    quote.provide(10, function(err, data) {
//                        console.log(data);
//
//                        try {
//                            quote.provide(10, function(err, data) {
//                                console.log(data);
//                            });
//                        } catch (exception) {
//                            console.warn(exception);
//                        }
//                    });
//                } catch (exception) {
//                    console.warn(exception);
//                }
//
//                try {
//                    quote.provide(10, function(err, data) {
//                        console.log(data);
//                    });
//                } catch (exception) {
//                    console.warn(exception);
//                }
//            });
//        } catch (exception) {
//            console.warn(exception);
//        }
//    });
//} catch(exception) {
//    console.log('Exception bro!');
//    console.warn(exception);
//}

var then = require('o2.then');

function getQuotes() {
    var deferred = then.defer();

    try {
        quote.provide(10, function(err, data) {
            if (err) {
                deferred.reject(err);

                return;
            }

            deferred.resolve(data);
        });
    } catch(exception) {
        deferred.reject(exception);
    }

    return deferred.promise;
}

function ensureQuotes() {
    var deferred = then.defer();

    getQuotes().then(function(data) {
        deferred.resolve(data);
    }, function() {
        deferred.resolve(ensureQuotes());
    });

    return deferred.promise;
}

//ensureQuotes().then(function(data) {
//    console.log(data);
//
//    ensureQuotes().then(function(data) {
//        console.log(data);
//
//        ensureQuotes().then(function(data) {
//            console.log(data);
//
//            ensureQuotes().then(function(data) {
//                console.log(data);
//            });
//
//            ensureQuotes().then(function(data) {
//                console.log(data);
//            });
//        });
//    });
//});

//ensureQuotes().then(function(data) {
//    console.log(data);
//
//    return ensureQuotes().then(function(data) {
//        console.log(data);
//
//        return ensureQuotes().then(function(data) {
//            console.log(data);
//
//            var remaining = 2,
//                deferred = then.defer();
//
//            ensureQuotes().then(function(data) {
//                remaining--;
//
//                console.log(data);
//
//                if (!remaining) {
//                    deferred.resolve();
//                }
//            });
//
//            ensureQuotes().then(function(data) {
//                remaining--;
//
//                // Look ma! order does not matter!
//                if (!remaining) {
//                    deferred.resolve();
//                }
//
//                console.log(data);
//            });
//
//            return deferred.promise;
//        });
//    });
//}).then(function() {
//    console.log('All done!');
//});

ensureQuotes().then(function(data) {
    console.log('1');
    console.log(data);
}).then(function() {
    return ensureQuotes();
}).then(function(data) {
    console.log('2');
    console.log(data);

    return ensureQuotes();
}).then(function(data) {
    console.log('3');
    console.log(data);

    return ensureQuotes().then(function(data) {
        console.log('4');
        console.log(data);

        var remaining = 2,
            deferred = then.defer();

        ensureQuotes().then(function(data) {
            remaining--;

            console.log('4.x');
            console.log(data);

            if (!remaining) {
                deferred.resolve();
            }
        });

        ensureQuotes().then(function(data) {
            remaining--;

            // Look ma! order does not matter!
            if (!remaining) {
                deferred.resolve();
            }

            console.log('4.y');
            console.log(data);
        });

        return deferred.promise;
    });
}).then(function() {
    console.log('5');
    console.log('All done!');
}, function(reason) {
    console.log("problem:" + reason);
});

// Q

// https://github.com/promises-aplus/promises-spec/blob/master/implementations.md
