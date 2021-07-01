import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false,
    isAnswerOpen: false,
    puzzles: [
        {
          title: 'Section 3',
          id: 'mit_2003_section_3',
          hover: false,
          author: 'Bridget Copley, Lance Nathan, Marc Moskowitz',
          link: 'https://www.mit.edu/~puzzle/2003/www.acme-corp.com/teamGuest/3/index.html',
          solution: 'KRISHNA',
          solution_link: 'http://web.mit.edu/puzzle/www/2003/www.acme-corp.com/solutions/m3.html',
          solution_hints: {
            'MADASAMARCH': 'KEEP GOING',
            'HARE': 'KEEP GOING',
            'HAREKRISHNA': 'JUST THE SECOND WORD',
          },
          source: 'MIT 2003',
          flavor: `<p>Wednesday the boss went to church.</p>
<p>When you come through the doors of <span class='hint1'>Holy Trinity</span>, a <span class='hint2'>middle-aged</span> priest at the other end of the nave sees you and <span class='hint2'>strides down the center aisle</span> to greet you. "Good afternoon," he says warmly. "I'm <span class='hint1'>Msgr. Thurman</span>--like the actress in <span class='hint1'><i>Pulp Fiction</i></span>," he explains. "Can I help you?"</p>

<p>You explain your investigation, and his face falls; he leads you into his office. He sets aside a book about the first <span class='hint1'>Pope Gregory</span> ("Reading about the chants," he explains) and takes a seat behind his desk, looking saddened by the news.</p>

<p>"I'll miss him greatly," he tells you. "I remember when he first came here to ask how he could help. <span class='hint1'>Dame Fortune</span> must have smiled on us; he's been a pillar of the community ever since. Wednesday, in fact, he came to drop off some papers. Did you want to look through them?"</p>`,
          hints: [
            {
              id: 'hint1',
              name: 'Hint - First Step',
              text: 'There are a number of unusual proper nouns in the flavor text.  Do they have anything in common?',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - Extraction',
              text: 'Some flavor text indicates looking at something in the middle.',
              revealed: false,
            },
            {
              id: 'hint3',
              name: 'Hint - Final Step',
              text: 'You should have found a hint to a four-letter word.  It\'s the classic "do the thing again" final step - find this word\'s partner!',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'Paranoia',
              solution: 'ECHO',
              revealed: false,
            },
            {
              title: 'Don\'t Make Me Say This Twice',
              solution: 'DIRE',
              revealed: false,
            },
            {
              title: 'Cans and Donations Gratefully Accepted',
              solution: 'GALL',
              revealed: false,
            },
            {
              title: 'Stained Glass',
              solution: 'FOOD',
              revealed: false,
            },
            {
              title: 'Titles',
              solution: 'GILA',
              revealed: false,
            },
            {
              title: 'Campaign Speeches',
              solution: 'LEVI',
              revealed: false,
            },
            {
              title: 'Bogots',
              solution: 'DOWN',
              revealed: false,
            },
            {
              title: 'The Price is Right',
              solution: 'CARD',
              revealed: false,
            },
            {
              title: 'Unprecedented Discovery',
              solution: 'BALL',
              revealed: false,
            },
            {
              title: 'Lost in a Maze',
              solution: 'SALK',
              revealed: false,
            },
            {
              title: 'The Property of Others',
              solution: 'SLOT',
              revealed: false,
            },
          ],
        },
        {
          title: 'Dossier 1 - Samantha Oriflamme',
          id: 'MIT_2008_dossier_1',
          hover: false,
          author: 'Mark Halpin',
          link: 'https://devjoe.appspot.com/huntindex/hunt/mit2008',
          solution: 'HETRAMPLEDHERVIOLETS',
          solution_link: 'http://web.mit.edu/puzzle/www/2008/dossier_metas/dossier1_meta.shtml',
          source: 'MIT 2008',
          flavor: '<p>Her neighbors in the quiet New England town of Saint Margaret\'s Mews, less than half an hour’s drive from Cambridge center, would\'ve been shocked to learn that the gentle old soul harbored a secret. They\'d have considered Miss Oriflamme incapable of any act more covert than the discreet insertion of a saucer beneath an errant teacup, the ginger elision of a name from an item of neighborhood gossip, or the surreptitious excision of an encroaching weed from her much-beloved garden. They\'d no inkling at all that she\'d been supplementing her meager widow\'s pension by designing websites from her home.</p>',
          puzzle_content: '<img src="http://web.mit.edu/puzzle/www/2008/dossier_metas/dossier1_card.gif">',
          notes: 'A physical copy of the business card was given to teams during hunt.  The link on the card is no longer active, but led to the above digital version of the card to help solvers.',
          hints: [
            {
              id: 'hint1',
              name: 'Hint - First Step',
              text: 'If you\'re not already familiar with any relationship between "x11" and swatches of color, now is a good time to google it.',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - Extraction',
              text: 'The color names can be matched to the feeder answers, with a little something leftover.',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'Dream On',
              solution: 'REVIVALS',
              revealed: false,
            },
            {
              title: 'The More The Merrier',
              solution: 'THERMOLYSIS',
              revealed: false,
            },
            {
              title: 'Little Rascals',
              solution: 'MENAGERIES',
              revealed: false,
            },
            {
              title: 'Monopoles',
              solution: 'GRIDIRON',
              revealed: false,
            },
            {
              title: 'Cluesome',
              solution: 'EMOTIVE',
              revealed: false,
            },
            {
              title: 'Facebook',
              solution: 'PEARLYGATES',
              revealed: false,
            },
            {
              title: 'Mystery Rallye',
              solution: 'SLOTCAR',
              revealed: false,
            },
            {
              title: 'The Deadly Hobby of Murder',
              solution: 'ADENINES',
              revealed: false,
            },
            {
              title: 'This Puzzle Needs A Title',
              solution: 'ICONOCLASM',
              revealed: false,
            },
            {
              title: 'All Geared Up',
              solution: 'INTERLOCKS',
              revealed: false,
            },
            {
              title: 'Eight Not-So-Deadly Sins',
              solution: 'MANHOLES',
              revealed: false,
            },
          ],
        },
    ]
});

export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },
    toggleAnswer() {
        store.isAnswerOpen = !store.isAnswerOpen
    },
    revealFeeder(meta_id,solution) {
        store.puzzles.find(o => o.id === meta_id).feeders.find(o => o.solution === solution).revealed = true
    },
    revealHint(meta_id,hint_id) {
        store.puzzles.find(o => o.id === meta_id).hints.find(o => o.id === hint_id).revealed = true
    },
};
