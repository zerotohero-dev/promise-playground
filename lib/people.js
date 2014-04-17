'use strict';

var peoples = shuffle([
    {'Padme Amidala': 'Senator of the naboo'},
    {'Cad Bane': 'Bounty hunter'},
    {'Jar Jar Binks': 'Gungan outcast'},
    {'C-3P0': 'Fretful protocol droid'},
    {'Lando Calrissian': 'Card player, gambler, scoundrel'},
    {'Chewbacca': 'Wookie hero'},
    {'Cody': 'Obi-Wan\'s clone commander'},
    {'Cont Dooku': 'Leader of the separatists'},
    {'Boba Fett': 'The best bounty hunter in the galaxy'},
    {'Jango Fett': 'The father of Boba Fett'},
    {'General Grievous': 'Ruthless cyborg warmaster'},
    {'Nute Gunray': 'Trade federation viceroy'},
    {'Jabba the Hutt': 'Godfather; crime lord of the underworld'},
    {'Qui-Gong Jinn': 'Venerable Jedi master'},
    {'Obi-Wan Kenobi': 'Legendary Jedi knight'},
    {'Plo Koon': 'Kel Dor Jedi master'},
    {'Duchess Satine Kryze': 'Duchess of Mandalore'},
    {'Darth Maul': 'Deadly Sith lord'},
    {'Savage Opress': 'Brother of Darth Maul'},
    {'Princess Lea Organa': 'Heroic rebel leader'},
    {'Palpatine': 'The last chancellor of the republic'},
    {'R2-D2': 'Heroic astromech droid'},
    {'Darth Sidious': 'Shadowy Sith lord'},
    {'Anakin Skywalker': 'The chosen one'},
    {'Luke Skywalker': 'The last of the Jedi'},
    {'Han Solo': 'The captain of the Millenium Falcon'},
    {'Ahsoka Tano': 'The apprentice of the chosen one'},
    {'Dath Vader': 'The dark lord of the Sith'},
    {'Asajj Ventress': 'Former dark-side assasin'},
    {'Wicket W. Warric': 'Heroic ewok scout'},
    {'Watto': 'Mos espa merchant'},
    {'Mace Windu': 'Fearless Jedi master'},
    {'Yoda': 'Grand Jedi master'}
]);

exports.provide = function(number, callback) {
    var i, len, result = [];

    for (i = 0, len = Math.min(people.length, number); i < len; i++) {
        result.push(quotes[i]);
    }

    shuffle(peoples);

    setTimeout(function() {
        callback(null, result);
    }, Math.floor(Math.random()*2000));
};
