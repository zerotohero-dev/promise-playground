'use strict';

'use strict';

var people = {
    'Padme Amidala': {
        'Anakin Skywalker': 'Despite her misgivings, Padmé Amidala fell in love with and married Jedi hero, Anakin Skywalker. Because attachment is forbidden by the Jedi Code they were forced to keep their relationship a secret.'
    },
    'Cad Bane': 'Bounty hunter',
    'Jar Jar Binks': {
        'Padme Amidala': 'While Padmé Amidala represented Naboo in the Galactic Senate, Jar Jar was part of the Senatorial delegation, serving the interests of the Gungan Rep Council. In Padmé\'s absence, Jar Jar was given full authority over Naboo\'s representation.'
    },
    'C-3P0': {
        'Anakin Skywalker': 'Anakin built C-3PO from scrap to help his mother, Shmi, on Tatooine. Anakin left Threepio behind with his mother when he left to join the Jedi Order, but was reunited with him a decade later.'
    },
    'Chewbacca': {
        'Han Solo': 'Han and his Wookiee first mate and co-pilot Chewbacca had a variety of adventures throughout their long careers as smugglers. Their long history together forged a loyalty and trust between the two that served them through several battles, be it against gangsters, bounty hunters, or stormtroopers.'
    },
    'Cody': {
        'Obi-Wan Kenobi': 'Cody and Obi-Wan served together throughout the Clone Wars, fighting on such battlefields as Christophsis, Geonosis, Lola Sayu, Cato Neimoidia and Utapau.'
    },
    'Cont Dooku': {
        'Darth Sidious': 'Sidious corrupted Dooku, luring him to the dark side by appealing to his disgust with corruption inherent in the Republic. Dooku brought to the Sith decades of skill and knowledge as a Jedi, and adopted the title Darth Tyranus.'
    },
    'Boba Fett': {
        'Jango Fett': 'Boba was an unaltered clone of Jango Fett, whom Jango raised as a son. The elder Fett cared greatly for his son, and taught him combat skills and ruthlessness from an early age.'
    },
    'General Grievous': {
        'Obi-Wan Kenobi': 'As constant foes throughout the Clone Wars, Obi-Wan and General Grievous finally dueled their last battle on the planet Utapau, where, after being disarmed of his lightsaber, Obi-Wan finished off the Separatist general with Grievous\' own blaster.'
    },
    'Qui-Gong Jinn': {
        'Obi-Wan Kenobi': 'As Obi-Wan\'s master, Qui-Gon and Kenobi held a close bond. But as Obi-Wan got older, he began to worry about his mentor\'s somewhat rebellious nature. Qui-Gon\'s dying wish was for Obi-Wan to take Anakin Skywalker as his Padawan.'
    },
    'Obi-Wan Kenobi': {
        'Anakin Skywalker': 'Following the death of Qui-Gon Jinn, Obi-Wan Kenobi agreed to take young Anakin Skywalker as his apprentice. Obi-Wan and Anakin grew to love each other as brothers and became one of the most powerful Master-apprentice pairs in the Jedi Order until Skywalker\'s turn to the dark side.'
    },
    'Plo Koon': {
        'Ahsoka Tano': 'While on a mission, Plo Koon discovered a Force-sensitive Togruta named Ahsoka Tano and brought her to the Jedi Temple for training. Affectionately nicknaming her "Little \'Soka", they maintained a close bond all through her training and apprenticeship under Anakin Skywalker.'
    },
    'Duchess Satine Kryze': {
        'Obi-Wan Kenobi': 'To investigate the rumors of Mandalore creating an army to join the Separatists, the Jedi Council sent Obi-Wan Kenobi to Mandalore to meet with the duchess. While glad to see her old friend once again, Satine was angered by the rumors that had brought Kenobi to Mandalore.'
    },
    'Darth Maul': {
        'Darth Sidious': 'Darth Maul was Darth Sidious\' apprentice. Sidious\' master plan of conquest in the galaxy relied upon Maul\'s prowess and combat abilities. But Maul, too, was a capable strategist who embarked on his own diabolical plot upon his resurrection.'
    },
    'Savage Opress': {
        'Cont Dooku': 'After Dooku was forced by Darth Sidious to dispose of Asajj Ventress, he turned to the Nightsisters to deliver a new apprentice. Dooku was a cruel master to Savage, attempting to hone his apprentice\'s rage into a powerful weapon.'
    },
    'Princess Lea Organa': {
        'Luke Skywalker': 'It was a partial holographic message of Princess Leia, pleading for help, that launched Luke into a galaxy of adventure. The young hero was looking only to help a girl in trouble -- little did he know that their pasts and destinies were so connected.'
    },
    'Palpatine': {
        'Darth Sidious': 'Darth Sidious was the secret alternate identity of Palpatine. Using his Sith skills of manipulation as Sidious, he masterminded the Clone Wars and most of the events that lead to his public persona, Palpatine, becoming Supreme Chancellor and eventually Emperor.'
    },
    'R2-D2': {
        'C-3PO': 'C-3PO and R2-D2 bicker a lot, but they are true friends and counterparts. Threepio understands Artoo\'s binary machine language, and often translates it for their non-droid friends.'
    },
    'Anakin Skywalker': {
        'Obi-Wan Kenobi': 'For over a decade, Anakin trained as a Padawan under Obi-Wan Kenobi\'s guidance. At first, Obi-Wan did not think the boy was suitable for the Jedi Order, but he trained Skywalker to honor Qui-Gon Jinn\'s dying wish. Obi-Wan and Anakin developed a close, brotherly bond, but the strains of the Clone Wars drew them farther apart, especially when the demons that haunted Anakin isolated him from the rest of his loved ones.'
    },
    'Luke Skywalker': {
        'Princess Lea Organa': 'It was a partial holographic message of Princess Leia, pleading for help, that launched Luke into a galaxy of adventure. The young hero was looking only to help a girl in trouble -- little did he know that their pasts and destinies were so connected.'
    },
    'Han Solo': {
        'Princess Lea Organa': 'Han originally regarded Princess Leia as a headstrong politician used to getting her way -- likely the very quality he liked in her. While the two\'s relationship at times was tempestuous, their mutual respect for one another eventually developed into deeper feelings that would draw them together in their fight against the Empire.'
    },
    'Ahsoka Tano': {
        'Anakin Skywalker': 'As Anakin Skywalker\'s apprentice, Ahsoka is learning a lot while in the thick of combat. She is as daring as her Master, and not against bending the rules if the situation calls for it. Conversely, Anakin is learning his share of lessons too -- ironically, since Ahsoka has been raised in the Jedi Temple since infancy, she actually has more experience learning among Jedi than he does.'
    },
    'Dath Vader': {
        'Darth Sidious': 'Darth Vader pledged his loyalty to Darth Sidious as the Clone Wars came to an end. Kneeling before his dark master, Vader assumed the mantle of Dark Lord of the Sith. His first assignment was to wipe out the Jedi Temple. After Vader was defeated by Obi-Wan Kenobi and suffered severe injuries, his power was diminished. Darth Sidious rebuilt his apprentice, but kept his sickly yellow eye open for another who could take his place.'
    },
    'Asajj Ventress': {
        'Cont Dooku': 'Asajj Ventress loyally served her master, Count Dooku. She aspired to be a Sith Lord, and his secret apprentice. However, when Darth Sidious grew wary of Asajj\'s abilities and feared that Dooku might be plotting a move against him, Sidious ordered Asajj eliminated. It was an act of cold betrayal that Dooku turned his back on Asajj.'
    },
    'Wicket W. Warric': {
        'Princess Lea Organa': 'Wicket befriended Princess Leia after she was stranded in the thick of the Endor forest following a speeder bike collision. Wicket helped defend the Princess against stormtrooper scouts, and then brought the offworlder to his village.'
    },
    'Watto': {
        'Anakin Skywalker': 'Anakin Skywalker was a slave belonging to Watto. Watto put the boy to work in his junk shop, repairing machinery, and occasionally racing Pods.'
    },
    'Mace Windu': {
        'Yoda': 'Yoda and Mace were the senior members of the Jedi Council. The two held each other in the deepest trust, seeking advice and wisdom during the dark times of the Clone Wars.'
    },
    'Yoda': {
        'Luke Skywalker': 'Luke Skywalker voyaged to Dagobah, spurred by a vision of Obi-Wan Kenobi. The ghostly Kenobi urged Luke to visit the Jedi Master who had instructed him. On the murky world of Dagobah, Luke was surprised to find a tiny, elfin creature -- he was expecting a great warrior. In time, he came to learn not to judge Yoda by his appearance'
    }
};
