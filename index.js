'use strict';

var log = require('./lib/util').log,
    createGetter = require('./lib/util').createCollectionGetter,

    quote = require('./lib/quote'),
    people = require('./lib/people'),
    relationship = require('./lib/relationship'),
    bio = require('./lib/bio'),

    Q = require('q');


// ------------------- CONTINUATION-PASSING STYLE ------------------------------
//
people.provide(5, function(err, result) {
    console.log(result);
});
//
//// ------------------- BASIC PROMISE -------------------------------------------
////var promise = null;
////
////function getPeople() {
////    var deferred = Q.defer();
////
////    people.provide(5, function(err, result) {
////        deferred.resolve(result);
////    });
////
////    promise = deferred.promise;
////
////    return promise;
////}
////
////getPeople().then(function(people) {
////   console.log(people);
////});
//
//// ------------------- REJECTION -----------------------------------------------
//
////function getPeople() {
////    var deferred = Q.defer();
////
////    people.provide(5, function(err, result) {
////
////        // ... simulate a network error ...
////
////        deferred.reject('These are not the droids you\'re looking for!');
////    });
////
////    return deferred.promise;
////}
////
////getPeople().then(function(people) {
////    console.log(people);
////}, function(reason) {
////    console.log(reason);
////});
//
//// ------------------- QUEUEING `then`s ----------------------------------------
//
////function getPeople() {
////    var deferred = Q.defer();
////
////    people.provide(5, function(err, result) {
////        deferred.resolve(result);
////    });
////
////    return deferred.promise;
////}
////
////function getQuotes() {
////    var deferred = Q.defer();
////
////    quote.provide(5, function(err, result) {
////        deferred.resolve(result);
////    });
////
////    return deferred.promise;
////}
//
////getPeople().then(function(people) {
////    return people;
////}).then(function(people) {
////    getQuotes().then(function(quotes) {
////        var counter = 0;
////
////        people.forEach(function(hero) {
////            var key;
////
////            for (key in hero) {
////                if (hero.hasOwnProperty(key)) {
////                    console.log(key + ': "' + quotes[counter++] + '"');
////                }
////            }
////        });
////    });
////});
//
//// ------------------- Refactoring ---------------------------------------------
//
////var getQuotes = createGetter(quote),
////    getPeople = createGetter(people),
////    getRelationship = createGetter(relationship),
////    getBio = createGetter(bio);
////
////function pairQuotesWithPeople(quotes, people) {
////    var counter = 0;
////
////    people.forEach(function(hero) {
////        var key;
////
////        for (key in hero) {
////            if (hero.hasOwnProperty(key)) {
////                console.log(key + ': "' + quotes[counter++] + '"');
////            }
////        }
////    });
////}
////
////getPeople()
////    /*.then(function(people) {
////    return people;
////})*/.
////    then(function(people) {
////    getQuotes().then(function(quotes) {
////        pairQuotesWithPeople(quotes, people);
////    });
////});
//
//// ------------------- Propagating Fail Cases ---------------------------------
//
////var getQuotes = createGetter(quote),
////    getPeople = createGetter(people),
////    getRelationship = createGetter(relationship),
////    getBio = createGetter(bio);
////
////function pairQuotesWithPeople(quotes, people) {
////    var counter = 0;
////
////    people.forEach(function(hero) {
////        var key;
////
////        for (key in hero) {
////            if (hero.hasOwnProperty(key)) {
////                console.log(key + ': "' + quotes[counter++] + '"');
////            }
////        }
////    });
////}
//
////try {
////    ...
////} cath {
////
////} finally {}
//
//
////getPeople().then(function(people) {
////    return people;
////}).then(function(people) {
////    return getQuotes().then(function(quotes) {
////        pairQuotesWithPeople(quotes, people);
////    });
////}).then(function(value) {
////    console.log(value);// <-- undefined.
////    console.log('All done!');
////}, function(reason) {
////    console.log('Oopsie! :: ' + reason);
////});
//
//// ------------------- Propagating Values --------------------------------------
//
////var getQuotes = createGetter(quote),
////    getPeople = createGetter(people),
////    getRelationship = createGetter(relationship),
////    getBio = createGetter(bio);
////
////function pairQuotesWithPeople(quotes, people) {
////    var counter = 0;
////
////    people.forEach(function(hero) {
////        var key;
////
////        for (key in hero) {
////            if (hero.hasOwnProperty(key)) {
////                console.log(key + ': "' + quotes[counter++] + '"');
////            }
////        }
////    });
////
////    return true;
////}
////
//////prm2 = prm.then(function() {
//////    return new Promise();
//////});
////
////getPeople().then(function(people) {
////    return people;
////}).then(function(people) {
////    return getQuotes().then(function(quotes) {
////        return pairQuotesWithPeople(quotes, people);
////    });
////}).then(function(value) {
////    console.log(value);// <-- true.
////    console.log('All done!');
////}, function(reason) {
////    console.log('Oopsie! :: ' + reason);
////});
//
//// ------------------- Unchain My Heart ----------------------------------------
//
//// http://promises-aplus.github.io/promises-spec/
////
////var getQuotes = createGetter(quote),
////    getPeople = createGetter(people);
//////
//////function doStuffWithQuotes_Incorrect() {
//////    var promise = getQuotes();
//////
//////    // TODO: this looks kind of misleading.
//////    var promise2 = promise.then(function() {
//////        getPeople();
//////        throw 'Booyah!';
//////    });
//////
//////    return promise;
//////}
//////
//////
//////doStuffWithQuotes_Incorrect().then(function() {
//////   console.log('All done!');
//////}, function(reason) {
//////    console.log('Problem: ' + reason);
//////});
////
////
////function doStuffWithQuotes() {
////    var promise = getQuotes();
////
////    return promise.then(function() {
////        throw 'Yabooh!';
////
////        return getPeople();
////    });
////}
////
////doStuffWithQuotes().then(function(value) {
////    console.log(value);
////}, function(err) {
////    console.log(err);
////});
//
//// ------------------- Abuse of Deferred ---------------------------------------
//
////var deferred = Q.defer(),
////    getPeople = createGetter(people);
////
////
////function compute(value) {
////    return value;
////}
////
////var prm2 = prm.then(function() {
////    return "hello";
////}, function() {
////    var deferred = Q.defer();
////
////    var promise = deferred.promise;
////
////    deferred.resolve("Yay! Success!");
////
////    return promise;
////});
////
////prm2.then(function() {
////    ///<---
////})
////
////// Wrong!
////getPeople().then(function(people) {
////    var result = compute(people);
////
////    deferred.resolve(result);
////}, function(reason) {
////    deferred.reject(reason);
////});
////
////getPeople().then(function(people) {
////    return compute(people);
////}).then(function(result) {
////    console.log(result);
////}, function(err) {
////    console.log(err);
////});
//
//// ------------------- Deferred as an Attribute --------------------------------
//
////var oldGetQuotes = createGetter(quote);
////
////var getQuotes = function() {
////    console.log("Did a network request");
////
////    return oldGetQuotes();
////};
////
////var QuotePage = function() {
////};
////
////QuotePage.prototype.initialize = function() {
////    this.deferred = getQuotes();
////};
////
////function changePage(page) {
////    page.deferred.then(function(data) {
////        console.log(data);
////    });
////}
////
////var page = new QuotePage();
////
////page.initialize();
////
////changePage(page);
////
////// Wait long enough for the deferred to resolve.
////setTimeout(function() {
////    changePage(page);
////    changePage(page);
////    changePage(page);
////    changePage(page);
////}, 4000);
//
//// ------------------- Sudo Make Me Tea ----------------------------------------
//
////function wait(interval) {
////    var deferred = Q.defer();
////
////    setTimeout(function() {
////        deferred.resolve();
////    }, interval || 0);
////
////    return deferred.promise;
////}
////
////console.log('Started...');
////
////function makeMeSomeTea() {
////    console.log('How many sugars would you like?');
////}
////
////wait(2000).then(makeMeSomeTea);
////
////function animate(obj) {
////    void obj;
////
////    console.log('Animating...');
////
////    return wait(3000);
////}
////
////var layer = {'foo': 'some dom layer'};
////
////animate(layer).then(function() {
////    console.log('Done.');
////});
//
//// ------------------- Flow Control (Serial) -----------------------------------
//
//var getQuotes = createGetter(quote),
//    getPeople = createGetter(people),
//    getRelationship = createGetter(relationship),
//    getBios = createGetter(bio);
//
//getPeople().then(function(people) {
//    console.log( '001: Got people: ' + people.length );
//
//    return getQuotes().then(function(quotes) {
//        console.log( '002: Got quotes: ' + quotes.length );
//
//        return getRelationship().then(function(relationships) {
//            console.log( '003: Got relationships: ' + relationships.length );
//
//            return getBios().then(function(bios) {
//                console.log( '004: Got bios: ' + bios.length );
//
//                return 'Yippie!';
//            });
//        });
//    });
//}).then(function(value) {
//    console.log('All done! ' + value);
//}, function(reason) {
//    console.log('Bah Humbug! :' + reason);
//});
//
//// ------------------- Flow Control (with added functional Kung-Fu) ------------
//
////var getQuotes = createGetter(quote),
////    getPeople = createGetter(people),
////    getRelationships = createGetter(relationship),
////    getBios = createGetter(bio),
////
////    deferred = Q.defer(),
////    token = deferred.promise;
////    deferred.resolve();
////
////function chain(prev, current) {
////    return prev.then(function(value) {
////        print(value);
////
////        return current;
////    });
////}
////
////function print(value) {
////    console.log(value);
////    console.log('----');
////}
////
////function err(reason) {
////    console.log(reason);
////}
////
////function evaluate(fn) { return fn(); }
////
////[getQuotes, getPeople, getRelationships, getBios]
////.map(evaluate)
////.reduce(chain, token)
////.then(print, err)
////.then(print.bind(null, 'All Done!'));
//
//// ------------------- Flow Control (Parallel) ---------------------------------
//
//var getQuotes = createGetter(quote),
//    getPeople = createGetter(people),
//    getRelationships = createGetter(relationship),
//    getBios = createGetter(bio);
//
//function wait(interval) {
//    var deferred = Q.defer();
//
//    setTimeout(function() {
//        deferred.resolve();
//    }, interval || 0);
//
//    return deferred.promise;
//}
//
//Q.all([
//    getQuotes(),
//    getPeople(),
//    getRelationships(),
//    getBios()
//]).spread(function(
//    quotes,
//    people,
//    relationships,
//    bios
//) {
//    wait(0)
//        console.log('\u001b[2J');
//        console.log('quotes:');
//        console.log(quotes);
//    })
//    .then(function() {return wait(5000);})
//    .then(function() {
//        console.log('\u001b[2J');
//        console.log('people:');
//        console.log(people);
//    })
//    .then(function() {return wait(5000);})
//    .then(function() {
//        console.log('\u001b[2J');
//        console.log('relationships:');
//        console.log(relationships);
//    })
//    .then(function() {return wait(5000);})
//    .then(function() {
//        console.log('\u001b[2J');
//        console.log('bios:');
//        console.log(bios);
//    })
//    .then(function() {return wait(5000);})
//        .then(function() {
//            console.log('\u001b[2J');
//            console.log('\n\n\n\n\n\n\n\n                    May the SOURCE be with you!\n\n\n\n\n\n\n\n');
//        });
//}).then(function(value) {
//    void value;
//
//    console.log('All done!');
//}, function(reason) {
//    void reason;
//
//    console.log('Ooops! I did it again!');
//});
